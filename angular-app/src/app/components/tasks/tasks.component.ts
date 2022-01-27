import { Component, OnInit } from '@angular/core';
import { TasksService } from './../../services/tasks.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  message;
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }
  callHello1(){
    this.tasksService.callHello1().subscribe(
      results =>{
        this.message = results.message;
      },
      error =>{
        this.message = "un authorized -- 403";
        console.log(error);        
      }
    )
  }

  callHello2(){
    this.tasksService.callHello2().subscribe(
      results =>{
        this.message = results.message;
      },
      error =>{
        this.message = "un authorized -- 403";
        console.log(error);        
      }
    )  
  }

  callHello3(){
    this.tasksService.callHello3().subscribe(
      results =>{
        this.message = results.message;
      },
      error =>{
        this.message = "un authorized -- 403";
        console.log(error);        
      }
    )  
  }
  callHello4(){
    this.tasksService.callHello4().subscribe(
      results =>{
        this.message = results.message;
      },
      error =>{
        this.message = "un authorized -- 403";
        console.log(error);        
      }
    )  

  }
  callTest1(){
    this.tasksService.callTest1().subscribe(
      results =>{
        this.message = results.message;
      },
      error =>{
        this.message = "un authorized -- 403";
        console.log(error);        
      }
    )  

  }

}
