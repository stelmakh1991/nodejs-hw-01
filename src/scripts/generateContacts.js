import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    const currentData = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(currentData);

    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2), 'utf-8');

    console.log(`Додано ${number} контактів.`);
  } catch (error) {
    console.error('Помилка додавання контактів:', error);
  }
};

generateContacts(5);
