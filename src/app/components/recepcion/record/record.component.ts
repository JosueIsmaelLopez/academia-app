import { Component, OnInit } from '@angular/core';
import { RecordProduccion } from './RecordProduccion';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  record: RecordProduccion[];
  constructor() { }
  
  selectedLevel;
  data:Array<Object> = [
      {id: 0, name: "Grechis Rodriguez"},
      {id: 1, name: "Jader Perez"},
      {id: 2, name: "Stewart Valerio"},
      {id: 3, name: "Juniet Lopez"},
      {id: 4, name: "Joel Castro"},
      {id: 5, name: "Andrea Useda"},
  ];

  selectedPlan;
  plan:Array<Object> = [
      {id: 0, name: 4},
      {id: 1, name: 6},
      {id: 2, name: 8},
      {id: 3, name: 10},
      {id: 4, name: 12},
      {id: 5, name: 13},
      {id: 6, name: 15},
  ];

  selectedEstrategia;
  estrategia:Array<Object> = [
      {id: 0, name: "Facebook"},
      {id: 1, name: "Canal 13"},
      {id: 2, name: "Radio Ya"},
      {id: 3, name: "Radio Restauracion"},
  ];

  selectedForma;
  forma:Array<Object> = [
      {id: 0, name: "Tarjeta Banpro"},
      {id: 1, name: "Tarjeta Bac"},
      {id: 2, name: "Tarjeta Bancentro"},
      {id: 3, name: "Tarjeta Visa"},
      {id: 4, name: "Tarjeta Mastercard"},
      {id: 5, name: "Efectivo"},
      {id: 6, name: "Cheque"},
  ];
  
  //asesor: String[] = ["Grechis Rodr.","Jader Perez","Stewart Vale.","Juniet Lop","Joel Cas","Andrea Useda"];
  ngOnInit() {
  }
  valor: boolean = false
  selected(){
    console.log(this.selectedLevel.name);
  }
}
