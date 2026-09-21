import { Component, inject, input, OnInit } from '@angular/core';
import { Contacts } from '../../services/contacts';
import { Contact } from '../../interfaces/contact';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  imports: [RouterLink],
  selector: 'app-contact-details',
  styleUrl: './contact-details.scss',
  templateUrl: './contact-details.html',
})
export class ContactDetails implements OnInit {

  id = input.required<string>();
  contacto: Contact | undefined;
  contacts = inject(Contacts);
  router = inject(Router);

  ngOnInit(): void {
    this.contacto = this.contacts.getContactById(this.id());
  }

  eliminarContacto(id: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás deshacer esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff4d4d',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
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
        
        this.router.navigate(["/contacts"]);
      }
    });
  }
}