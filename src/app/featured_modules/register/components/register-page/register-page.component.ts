import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor() {
    console.log("RegisterPageComponent loaded")
  }

  ngOnInit() {
  }

}
