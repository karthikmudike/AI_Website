import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorComponent } from './error/error.component';
import { TodoComponent } from './todo/todo.component';
import { LogoutComponent } from './logout/logout.component';
import { RoutGaurdService } from './service/route-gaurd.service';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HospitalServicesComponent } from './hospital-services/hospital-services.component';
import { PatientRecordComponent } from './patient-record/patient-record.component';
import { FindaDoctorComponent } from './finda-doctor/finda-doctor.component';
import { BillPaymentComponent } from './bill-payment/bill-payment.component';
import { EmergencyCareComponent } from './emergency-care/emergency-care.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { MedicalChatAIComponent } from './medical-chat-ai/medical-chat-ai.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "appointments", component: AppointmentComponent, canActivate: [RoutGaurdService] },
    { path: "appointment/:id", component: AppointmentComponent, canActivate: [RoutGaurdService] },
    { path: "hospitalService", component: HospitalServicesComponent },
    { path: "login", component: LoginPageComponent },
    { path: "logout", component: LogoutComponent },
    { path: "appointmentList", component: AppointmentListComponent, canActivate: [RoutGaurdService] },
    { path: "patientRecord", component: PatientRecordComponent, canActivate: [RoutGaurdService] },
    { path: "findadoctor", component: FindaDoctorComponent, canActivate: [RoutGaurdService] },
    { path: "BillPayment", component: BillPaymentComponent, canActivate: [RoutGaurdService] },
    { path: "EmergencyCare", component: EmergencyCareComponent },
    { path: "CustomerSupport/:id", component: CustomerCareComponent },
    { path: "ChatAI", component: MedicalChatAIComponent, canActivate: [RoutGaurdService] },
    { path: 'todo', component: TodoComponent, canActivate: [RoutGaurdService] },
    { path: 'todo/:name', component: TodoComponent, canActivate: [RoutGaurdService] },
    { path: "todoUpdate/:id", component: TodoUpdateComponent, canActivate: [RoutGaurdService] },
    { path: '**', component: ErrorComponent }
];
