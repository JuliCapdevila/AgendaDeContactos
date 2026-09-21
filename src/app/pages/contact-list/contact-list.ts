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

  // Dejamos el nombre como contactsService para que coincida exactamente con el HTML
  contactsService = inject(Contacts);

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
        
        this.contactsService.deleteContact(id);
        
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
    });
  }

}