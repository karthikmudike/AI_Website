import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { BasicAuthenticationService } from '../service/basicAuthentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  constructor(public basicAuth: BasicAuthenticationService, private route: Router)
  {
  }

  logInn()
  {
      this.route.navigate([`/login`]);
  }
}
