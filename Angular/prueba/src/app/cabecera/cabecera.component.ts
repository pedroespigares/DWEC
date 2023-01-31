import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  @Input() titulo = "";
  @Output() nuevoDato = new EventEmitter<string>();

  datoIntroducir = "";

  // IntroduceDato lo que hace es emitir el evento nuevoDato con el valor del datoIntroducir
  introduceDato() {
    this.nuevoDato.emit(this.datoIntroducir);
    this.datoIntroducir = "";
  }

  

  // @Input() titulo = "";
  // @Output() miPrimerEvento = new EventEmitter<string>();

  // trataEvento() {
  //   console.log("Salta evento desde el componente hijo (cabecera)")
  //   this.miPrimerEvento.emit("Genera evento desde el componente hijo (cabecera)")
  // }

  // ngOnInit() {
  //   console.log("Salta evento de inicio")
  // }

  // ngOnDestroy() {
  //   // Este evento se lanza cuando se destruye el componente
  //   console.log("Salta evento de destrucción")
  // }
}
