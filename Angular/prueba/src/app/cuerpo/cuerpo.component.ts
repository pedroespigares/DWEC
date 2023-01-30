import { Component } from '@angular/core';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  listaDePersonas = ["Pedro", "Juan", "Luis", "Ana", "Maria"];
  datoIntroducir = "";

  nuevoDato(){
    this.listaDePersonas.push(this.datoIntroducir);
    this.datoIntroducir = "";
  }
}
