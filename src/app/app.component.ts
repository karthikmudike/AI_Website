import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf} from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { PatientRecordComponent } from './patient-record/patient-record.component';
import { HospitalServicesComponent } from './hospital-services/hospital-services.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HeaderComponent, FooterComponent,CommonModule, FormsModule, PatientRecordComponent, HospitalServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
