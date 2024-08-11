import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const dataJSON = await fs.readFile(PATH_DB, 'utf-8');
    const data = Array.isArray(JSON.parse(dataJSON))
      ? JSON.parse(dataJSON)
      : [];
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getAllContacts();
