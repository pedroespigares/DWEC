import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  @Input() titulo = "";

  

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
