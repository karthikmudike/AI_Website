import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/DataService/data-service.service';
import { FormsModule } from '@angular/forms';
import { todos } from '../todo/todo.component';
import { BasicAuthenticationService } from '../service/basicAuthentication.service';


@Component({
  selector: 'app-todo-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-update.component.html',
  styleUrl: './todo-update.component.css'
})
export class TodoUpdateComponent implements OnInit {


  constructor(private router: ActivatedRoute, private access: DataService, private http: Router, private auth: BasicAuthenticationService)
  {
  }
  obj!: todos; 
  id: any;
  finalObj!: todos;
  ngOnInit(): void {
    this.obj = new todos(0,"Enter Name",new Date(), false);
      this.id = this.router.snapshot.params['id'];
      if(this.id!=0)
      {
        this.access.updateTodoFromtheList(this.id).subscribe(response=>this.assigningObject(response));
      }else
      {
        this.obj.id = null;
        this.obj.done = null;
        this.obj.username = null;
      }
  }
  x!: string;
  assigningObject(response: any)
  {
    this.obj = response;
    this.x = new Date(this.obj.targetDate).toISOString().split('T')[0];
  }

   generateTodo(){
    if(this.id==0)
    {
      this.obj.targetDate = new Date(`${this.x}T00:00:00`);
      this.access.newTodoFromtheList(this.obj).subscribe(response=>this.access.executeHelloWorldBeanServicePath(this.auth.getUsername()).subscribe());
      this.http.navigate([`todo/${this.auth.getUsername()}`]);
    }else
    {
      this.obj.targetDate = new Date(`${this.x}T00:00:00`);
      this.access.updateTheTodoFromtheList(this.obj, this.id).subscribe(response=>this.access.executeHelloWorldBeanServicePath(this.auth.getUsername()).subscribe());
      this.http.navigate([`todo/${this.auth.getUsername()}`]);
    }
  }

  goBack()
  {
    this.http.navigate([`todo/${this.auth.getUsername()}`]);
  }

}
