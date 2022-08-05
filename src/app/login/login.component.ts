import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("Successfully Loggedin");
    localStorage.setItem("IS_LOGGED_IN", "true");
    localStorage.setItem("ROLE","USER");
  }
}
