import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit{
  tasks!: Task[];
  globalId: number =1;
  inputTask:string="";

  ngOnInit():void{
    this.tasks=[];
    // this.tasks=[
    //   {
    //     status: false,
    //     id: this.globalId++,
    //     text: "new task",
    //     timeStart: new Date(),
    //     timeEnd: new Date()
    //   },

    //   {
    //     status: true,
    //     id: this.globalId++,
    //     text: "new task",
    //     timeStart: new Date(),
    //     timeEnd: new Date()
    //   },

    //]
  }

  addTask(){
    this.tasks.push({
        status: false,
        id: this.globalId++,
        text: this.inputTask,
        timeStart: new Date(),
        timeEnd: new Date()
    });
  }

  toggleStatus(task:Task){
    task.status=!task.status;
  }


}
