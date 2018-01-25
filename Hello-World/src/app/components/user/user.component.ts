import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;

  constructor() {
    console.log('const. run');
  }

  ngOnInit() {
    console.log('ngOnInit run..');
    this.name = 'john';
  }

}
