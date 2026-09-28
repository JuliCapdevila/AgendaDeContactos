import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
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

  editarContacto(contactoActualizado: Contact) {
    const index = this.contactList.findIndex(c => c.id === contactoActualizado.id);
    if (index !== -1) {
      this.contactList[index] = { ...contactoActualizado };
    }
  }

  deleteContact(id: string) {
    const index = this.contactList.findIndex(c => c.id === id);
    if (index !== -1) {
      this.contactList.splice(index, 1);
    }
  }
}