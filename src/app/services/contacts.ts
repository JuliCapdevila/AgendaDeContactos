import { Service } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Service()
export class Contacts {
    contactList:Contact[] = [
    {
      id: "1",
      nombre: 'AA',
      apellido: "iiiii",
      email: 'AA@AA.com',
      numeroTelefono: '12345',
    },]
    AgregarContacto() {this.contactList.push({
      id: '2',
      nombre: '44567',
      apellido: '4567',
      numeroTelefono: '4567'
    })}
deleteContact(id:string){
  this.contactList = this.contactList.filter(c => c.id !== id);
}
}