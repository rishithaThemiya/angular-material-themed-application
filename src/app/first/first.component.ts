import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  stage = "SAVE"
  id:FormControl = new FormControl ('');
  name:FormControl = new FormControl('');



  constructor() { }

  ngOnInit(): void {
  }

}
