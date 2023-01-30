import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  
  @Input() datos: string[] = [];
  datoIntroducir = "";


  nuevoDato() {
    this.datos.push(this.datoIntroducir);
    this.datoIntroducir = "";
  }

  // nuevoDato(){
  //   this.listaDePersonas.push(this.datoIntroducir);
  //   this.datoIntroducir = "";
  // }
}
