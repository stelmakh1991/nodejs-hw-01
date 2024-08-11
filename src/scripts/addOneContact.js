import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

export const addOneContact = async () => {
  try {
    const currentContacts = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(currentContacts);

    const newContact = createFakeContact();
    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2), 'utf-8');

    console.log(`Додано новий контакт.`);
  } catch (error) {
    console.error('Помилка додавання контакту:', error);
  }
};

addOneContact();
