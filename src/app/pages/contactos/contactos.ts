import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  imports: [RouterLink],
  selector: 'app-contactos',
  styleUrl: './contactos.scss',
  templateUrl: './contactos.html',
})
export class Contactos {
  
  contactos = [
  {
    "nombre": "Lucas",
    "apellido": "Benítez",
    "numero": "+54 9 341 456-7890"
  },
  {
    "nombre": "Martina",
    "apellido": "Rossi",
    "numero": "+54 9 341 512-3456"
  },
  {
    "nombre": "Joaquín",
    "apellido": "Morales",
    "numero": "+54 9 11 6234-8901"
  },
  {
    "nombre": "Valentina",
    "apellido": "Gómez",
    "numero": "+54 9 341 398-7654"
  }
]

}

interface Contacto{
  nombre: string;
  apellido: string;
  numero: string;
}

function contactovacio():Contacto{
  return{nombre:"",apellido:"",numero:""}
}

