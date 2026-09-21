import { Component, inject, signal } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { form, FormField } from '@angular/forms/signals';
import { Contacts } from '../../services/contacts';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  imports: [FormField],
  selector: 'app-create-edit-contact',
  styleUrl: './crear-editar-contacto.scss',
  templateUrl: './crear-editar-contacto.html',
})
export class CreateEditContact {

  contactsService = inject(Contacts);
  router = inject(Router);

  newContactModel = signal<Contact>({
    id: '',
    nombre: '',
    apellido: '',
    numeroTelefono: ''
  });

  formCreateContact = form(this.newContactModel);

  onSubmit(event: Event) {
    event.preventDefault();

    const idContactoCreado = this.contactsService.agregarContacto(this.newContactModel());

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
      title: "Contacto creado"
    });

    this.router.navigate(['/contacts', idContactoCreado]);
  }
}