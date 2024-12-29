import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todos } from '../../todo/todo.component';
import { BasicAuthenticationService } from '../basicAuthentication.service';
import { API_URL } from '../../app.constant';
import { appointment } from '../../appointment/appointment.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Request: HttpClient, private basicAuth: BasicAuthenticationService) { }


  executeHelloWorldBeanServicePath(name: any)
  {
    return this.Request.get(`${API_URL}/users/${this.basicAuth.getUsername()}/todos`);
  }

  deleteTodoFromtheList(id: any)
  {

    return this.Request.delete(`${API_URL}/users/${this.basicAuth.getUsername()}/todos/${id}`);
  }

  updateTodoFromtheList(id: any)
  {

    return this.Request.get<todos>(`${API_URL}/jpa/users/${this.basicAuth.getUsername()}/todosupdate/${id}`);
  }

  newTodoFromtheList(todo: todos)
  {
    return this.Request.post<todos>(`${API_URL}/users/${this.basicAuth.getUsername()}/newtodosupdate`, todo);
  }

  updateTheTodoFromtheList(todo: todos, id: any)
  {
    return this.Request.put<todos>(`${API_URL}/users/${this.basicAuth.getUsername()}/todosupdate/${id}`, todo);
  }

  getPatientData(id: any)
  {
    return this.Request.get(`${API_URL}/PatientList/${id}`);
  }

  getPatientRecord(id: any)
  {
    return this.Request.get(`${API_URL}/MedicalHistory/${id}`);
  }

  getDoctorById(id: any)
  {
    return this.Request.get(`${API_URL}/DoctorsList/${id}`);
  }

  getAllDoctor()
  {
    return this.Request.get(`${API_URL}/DoctorsListAll`);
  }

  getDoctorByName(name: string)
  {
      return this.Request.get(`${API_URL}/DoctorRecordByName/${name}`);
  }

  getBillByPatientId(Id: any)
  {
    return this.Request.get(`${API_URL}/BillPaymentOfPatient/${Id}`);
  }

  getAllAppointments(Id: any)
  {
    return this.Request.get(`${API_URL}/AllAppointment/${Id}`);
  }

  getAppointmentsDetails(Id: any)
  {
    return this.Request.get(`${API_URL}/AppointmentDetails/${Id}`);
  }

  deleteAppointmentRecord(Id: any)
  {
    return this.Request.delete(`${API_URL}/DeleteTheReocrd/${Id}`);
  }

  
  updateTheAppointment(Appointment: appointment, id: any)
  {
    return this.Request.put<todos>(`${API_URL}/AppointmentUpdate/${id}`, Appointment);
  }

  deleteBillPayment(Id: any)
  {
    return this.Request.delete(`${API_URL}/DeleteTheRecord/${Id}`)
  }

}
