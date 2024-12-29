import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basicAuthentication.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hospital-services',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './hospital-services.component.html',
  styleUrl: './hospital-services.component.css'
})

export class HospitalServicesComponent implements OnInit{
  constructor(private access: BasicAuthenticationService){
  }
  ngOnInit(): void {
    this.patientNumber = sessionStorage.getItem("PatientNumber");
  }
  patientNumber: any;
  assignPatientNumber(number: any)
  {
    if(sessionStorage.getItem("PatientNumber")==null)
    {
      sessionStorage.setItem("PatientNumber",number);
      this.patientNumber = sessionStorage.getItem("PatientNumber");
    }else{
      sessionStorage.removeItem("PatientNumber");
      sessionStorage.setItem("PatientNumber",number);
      this.patientNumber = sessionStorage.getItem("PatientNumber");
    }
  }

  checkThePatientData()
  {
    if(sessionStorage.getItem("PatientNumber")==null)
    {
      return true;
    }else
    {
      return false;
    }
  }

  checkTheLoggin()
  {
    return this.access.isUserLoggedIn();
  }

}
