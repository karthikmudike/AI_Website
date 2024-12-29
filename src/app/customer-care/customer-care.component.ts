import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-care',
  standalone: true,
  imports: [NgIf],
  templateUrl: './customer-care.component.html',
  styleUrl: './customer-care.component.css'
})
export class CustomerCareComponent implements OnInit {

  constructor(private service: ActivatedRoute){}

  serviceType: any = false;
  ngOnInit(): void {
    if(this.service.snapshot.params['id']==1)
    {
        this.serviceType = true;
    }
  }

}
