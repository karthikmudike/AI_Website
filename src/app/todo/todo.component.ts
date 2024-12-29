import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Route, Router } from '@angular/router';
import { DataService } from '../service/DataService/data-service.service';
import { BasicAuthenticationService } from '../service/basicAuthentication.service';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements  OnInit{
  todos: any = [];
  message: any = false;
  constructor(private acess: BasicAuthenticationService, private router: Router, private data: DataService)
  {

  }
  ngOnInit(): void {
    this.data.executeHelloWorldBeanServicePath(this.acess.getUsername()).subscribe(response => this.addDataIntoArray(response));
  }

  deleteMethod(id: any)
  {
      this.message=true;
      this.data.deleteTodoFromtheList(id).subscribe(response =>  this.data.executeHelloWorldBeanServicePath(this.acess.getUsername()).subscribe(response => this.addDataIntoArray(response)));
  }

  addDataIntoArray(response: any)
  {
      this.todos=response;
  }

  updateMethod(id: any)
  {
    this.router.navigate([`todoUpdate/${id}`]);
  }

  updateNewMethod()
  {
     this.router.navigate([`todoUpdate/${0}`]);
  }

}

export class todos
{
  id: any;
	username: any;
	targetDate: Date;
	done: any;

   constructor(id: any, username: any, targetDate: Date, done: any)
   {
      this.id = id;
      this.username = username;
      this.targetDate = targetDate;
      this.done = done;
   }

}
