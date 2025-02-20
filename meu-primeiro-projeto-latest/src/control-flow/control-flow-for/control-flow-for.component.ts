import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-control-flow-for',
  standalone: true,
  imports: [],
  templateUrl: './control-flow-for.component.html',
  styleUrls: ['./control-flow-for.component.css']
})
export class ControlFlowForComponent implements OnInit {

  loadingData: any;

  constructor() { }

  ngOnInit() {
    this.loadingData = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];
  }
}
