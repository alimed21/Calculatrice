import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';
import{ CalculatriceService} from '../calculatrice.service';
@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {
  textEcran;
  nombre1 = 0;
  nombre2 = 0;
  operation = "";
  result = 0;

  
  
  constructor() { }

  ngOnInit() {

  }

  ecrireNombre(nombre:any){
    if(this.operation == ""){
      this.nombre1 += nombre.target.value;
      this.textEcran = this.nombre1;
    }
    else{
      this.nombre2 += nombre.target.value;
      this.textEcran = this.nombre2;
    }
    
  }
  operations(oper:any){
    this.operation = oper.target.value;
    this.textEcran = "";
  }
  calculer(){
    var result;
    if(this.operation === "+"){
      result = Number(this.nombre1) + Number(this.nombre2);
      this.textEcran = result;
      this.nombre1 = 0;
      this.nombre2 = 0;
      this.operation = "";
    }
    else if(this.operation === "-"){
      result = (this.nombre1) - (this.nombre2);
      this.textEcran = result;
      this.nombre1 = 0;
      this.nombre2 = 0;
      this.operation = "";
    }
    else if(this.operation === "x"){
      result = (this.nombre1) * (this.nombre2);
      this.textEcran = result;
      this.nombre1 = 0;
      this.nombre2 = 0;
      this.operation = "";
    }
    else{
      if(this.nombre1 > 0){
        result = (this.nombre1) / (this.nombre2);
        this.textEcran = result;
        this.nombre1 = 0;
        this.nombre2 = 0;
        this.operation = "";
      }
      else{
        this.textEcran = "Erreur 404";
      }
    }
  }

  effacer(){
    this.nombre1 = 0;
    this.nombre2 = 0;
    this.operation = "";
    this.textEcran = "";
  }

}
