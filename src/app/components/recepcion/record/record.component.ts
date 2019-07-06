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

  ngOnInit() {
  }

}
