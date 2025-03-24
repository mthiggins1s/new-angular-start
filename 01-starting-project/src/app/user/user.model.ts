export interface User { // interface; another TS feature that allows you to define an object type.
  id: string;
  avatar: string;
  name: string;
}

export interface Task {
    id: string;
    userId: string;
    title: string;
    dueDate: string;
    summary: string;
  }

export interface NewTaskData {
    title: string;
    summary: string; 
    date: string;
}