import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basicAuthentication.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private router: Router, private basicAuth: BasicAuthenticationService)
  {
  }
  username: any;
  password: any;
  message=true;

  basicLogInn(username: string, password: string)
  {
    this.basicAuth.executeJWTAuthentication(username,password).subscribe(
      data => {
        this.router.navigate(['hospitalService'])
        this.message = true;
      },
      error => {
        console.log(error)
        this.message = false;
      }
    )
  }
}
