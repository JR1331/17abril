import { Component } from '@angular/core';
import { Ejer2HijoComponent } from '../ejer2-hijo/ejer2-hijo.component';

@Component({
  selector: 'app-ejer2-padre',
  standalone: true,
  imports: [Ejer2HijoComponent],
  templateUrl: './ejer2-padre.component.html',
  styleUrl: './ejer2-padre.component.css'
})
export class Ejer2PadreComponent {
  listapadre:string[]=[];
  recibirDato(nombre:string) {
    alert(`El dato recibido es ${nombre}`)
    this.listapadre.push(nombre)
    }
}
