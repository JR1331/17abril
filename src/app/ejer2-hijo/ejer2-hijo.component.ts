import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejer2-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejer2-hijo.component.html',
  styleUrl: './ejer2-hijo.component.css'
})
export class Ejer2HijoComponent {
  elementos:string[]=["leche","cafe","azucar","huevos","platanos"];

  @Output()
  llamadaPadre:EventEmitter<string> = new EventEmitter();
  nombre:string='';
  metodo(elemento:string){
    this.nombre=elemento
    this.llamadaPadre.emit(this.nombre);
  }
  ;
}
