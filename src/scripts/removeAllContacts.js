import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const contacts = [];

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2), 'utf-8');

    console.log('Всі контакти були успішно видалені.');
  } catch (error) {
    console.error('Помилка видалення контактів:', error);
  }
};

removeAllContacts();
