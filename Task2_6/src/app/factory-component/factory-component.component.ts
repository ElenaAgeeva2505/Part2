import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factory-component',
  templateUrl: './factory-component.component.html',
  styleUrls: ['./factory-component.component.css']
})
export class FactoryComponentComponent implements OnInit {
  books = [
    {
      name:'Cinderella',
      price:'2.50',
      count:'3'
    },
    {
      name:'Snow White',
      price:'3.00',
      count:'4'
    },
    {
      name: 'Flint',
      price:'5.00',
      count:'5'
    },
    {
      name:'Mermaid',
      price:'8.00',
      count:'1'
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
