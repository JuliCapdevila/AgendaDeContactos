import { Service } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Service()
export class Contacts {
  contactList: Contact[] = [
    {
      id: "1",
      nombre: 'AA',
      apellido: "iiiii",
      email: 'AA@AA.com',
      numeroTelefono: '12345',
    }
  ];

  getContactById(id: string): Contact | undefined {
    return this.contactList.find(c => c.id === id);
  }

  agregarContacto(nuevoContacto: Contact): string {
    const nuevoId = Date.now().toString();
    nuevoContacto.id = nuevoId;
    this.contactList.push(nuevoContacto);
    return nuevoId;
  }

  deleteContact(id: string) {
    this.contactList = this.contactList.filter(c => c.id !== id);
  }
}