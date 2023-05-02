import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  headerName = "Angular Learn - Home";
  salary = 0.55;
  isDisabled = false;
  colorName = "green";
  fontSize = '40px';

  classname = "blue"
  styleVal ={'font-size': '60px'}

  colors = ['red','green','black','yellow','blue'];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  functionClick(str: string){
    alert(str);
  }

}
