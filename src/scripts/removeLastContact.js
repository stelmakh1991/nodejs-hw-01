import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
        const currentContacts = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(currentContacts);

        contacts.pop();

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2), 'utf-8');

        console.log(`Видалено останній контакт.`);
      } catch (error) {
        console.error('Помилка видалення останнього контакту:', error);
      }
};

removeLastContact();
