import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';
import { Ejer2HijoComponent } from './ejer2-hijo/ejer2-hijo.component';
import { Ejer2PadreComponent } from './ejer2-padre/ejer2-padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PadreComponent,Ejer2PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '17abril';
}
