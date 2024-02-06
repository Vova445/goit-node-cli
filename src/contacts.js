const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.promises.readFile(contactsPath, encoding = "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading contacts:", error);
    return [];
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.promises.readFile(contactsPath, encoding = "utf8");
    const contacts = JSON.parse(data);
    const contact = contacts.find((c) => c.id === contactId);
    return contact || null;
  } catch (error) {
    console.error("Error contact by ID:", error);
    return null;
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.promises.readFile(contactsPath, encoding = "utf8");
    const contacts = JSON.parse(data);
    const removedContact = contacts.find((c) => c.id === contactId);
    const updatedContacts = contacts.filter((c) => c.id !== contactId);
    await fs.promises.writeFile(
      contactsPath,
      JSON.stringify(updatedContacts)
    );
    return removedContact || null;
  } catch (error) {
    console.error("Error removing contact:", error);
    return null;
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.promises.readFile(contactsPath, encoding = "utf8");
    const contacts = JSON.parse(data);
    const newContact = { id: Date.now(), name, email, phone };
    contacts.push(newContact);
    await fs.promises.writeFile(
      contactsPath,
      JSON.stringify(contacts)
    );
    return newContact;
  } catch (error) {
    console.error("Error adding contact:", error);
    return null;
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
