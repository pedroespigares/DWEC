import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  
  @Input() datos: any;
  nombreMoneda = "";
  categoria = "";

  // nuevoDato(){
  //   this.listaDePersonas.push(this.datoIntroducir);
  //   this.datoIntroducir = "";
  // }

  //  -------------------------------------
  // PRUEBA DE PETICIONES AJAX
  
  constructor(private http: HttpClient) {}

  lanzaPeticionAjax(){
    this.http.get("https://api.coingecko.com/api/v3/coins/bitcoin")
    .subscribe((data:any) => {
      this.nombreMoneda = data.name;
      this.categoria = data.categories[0];
    })
  };
  // Poner el tipo any para que no de error

}
