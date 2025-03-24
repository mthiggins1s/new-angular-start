// A service is another class; the idea is that it performs some operation and/or manages data that might be needed by ONE or MORE components.

import { Injectable } from "@angular/core";
import { NewTaskData } from "../user/user.model";

// we then add the tasks array and make is PRIVATE so it can only be used within this service.

// Angular is now aware of this service and can create an instance when you need it! It will only create and reuse ONE instance so that different component operate on the same data.

@Injectable( {providedIn: 'root'} )
export class TasksService {
    private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ];

      // we keep the dummy tasks if no tasks are found, but IF tasks are found, we use this instead:
      constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
          this.tasks = JSON.parse(tasks);
        }
      }

    // add a method to get ahold of tasks to add/delete them. This will then return all the tasks that belong to the user with the id.
    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    // method for adding a task; using the type from user.model.ts
    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
          });
          this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    // this stores my tasks in localStorage
    private saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}