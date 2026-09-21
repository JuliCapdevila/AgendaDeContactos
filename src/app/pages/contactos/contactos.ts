import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Contacts } from '../../services/contacts'; 
import Swal from 'sweetalert2';

@Component({
  imports: [RouterLink],
  selector: 'app-contactos',
  styleUrl: './contactos.scss',
  templateUrl: './contactos.html',
})
export class Contactos {

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
          theme: 'dark'
        }).fire({
          icon: "success",
          title: "Contacto eliminado"
        });
      }
    });
  }
}