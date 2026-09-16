import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Contacts } from '../../services/contacts';
import Swal from 'sweetalert2';

@Component({
  imports: [RouterLink],
  selector: 'app-contact-list',
  styleUrl: './contact-list.scss',
  templateUrl: './contact-list.html',
})
export class ContactList {

  contacts = inject(Contacts);

  contactsService = inject(Contacts);

  eliminarContacto(id:string){
    this.contacts.deleteContact(id);
    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      theme: 'dark',
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    }).fire({
      icon: "success",
      title: "Contacto eliminado"
    });
  }

 

};