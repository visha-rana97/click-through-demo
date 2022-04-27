import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit {

  valCheck: string[] = ['remember'];

  password: string;

  constructor(private router:Router){ }

  ngOnInit(): void {
   
  }

  login = () => {
    this.router.navigate(['/dashboard'])
  }

}
