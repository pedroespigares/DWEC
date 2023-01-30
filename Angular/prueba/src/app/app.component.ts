import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'TITULO';
  // nombre = 'pedro';

  // capturaEvento(evento: string) {
  //   console.log("He capturado el evento con datos: " + evento);
  //   this.title = evento;
  // }
  // ngOnInit() {
  //   this.nombre = 'juan';
  // }

  listaDePersonas = ["Pedro", "Juan", "Luis", "Ana", "Maria"];
}
