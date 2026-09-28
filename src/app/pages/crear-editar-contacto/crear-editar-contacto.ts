import { Component, inject, signal, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { form, FormField } from '@angular/forms/signals';
import { Contacts } from '../../services/contacts';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  imports: [FormField],
  selector: 'app-create-edit-contact',
  styleUrl: './crear-editar-contacto.scss',
  templateUrl: './crear-editar-contacto.html',
})
export class CreateEditContact implements OnInit {

  contactsService = inject(Contacts);
  router = inject(Router);
  route = inject(ActivatedRoute);

  idContacto = signal<string | null>(null);

  newContactModel = signal<Contact>({
    id: '',
    nombre: '',
    apellido: '',
    numeroTelefono: ''
  });

  formCreateContact = form(this.newContactModel);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.idContacto.set(id);
      const contactToEdit = this.contactsService.getContactById(id);
      if (contactToEdit) {
        this.newContactModel.set({ ...contactToEdit });
      }
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.idContacto()) {
      this.contactsService.editarContacto(this.newContactModel());
      
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
        title: "Contacto actualizado"
      });

      this.router.navigate(['/contacts', this.idContacto()]);
    } else {
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
}