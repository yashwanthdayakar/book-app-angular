import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  projectName!:string;

  @Input()
  isLoggedIn!:boolean;

  @Output('logoutEvent') outputEvent = new EventEmitter<string>(); 

  logout(){
    alert("Successfully Logged Out");
    localStorage.clear();

    //From the Child, send the data to the parent
    this.outputEvent.emit("logout123");
    window.location.href="/auth/login";
  }
}