import { Injectable } from '@angular/core';

import { Student } from './student';
import { STUDENTS } from './student-list';

// Observable is one of the key classes in the RxJS library

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

//import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // Add getStudents method to return the student-list
  // getStudents is a method of Student[](array)
  
  getStudents(): Observable<Student[]> {
    // TODO: send the message _after_ fetching the students
    this.messageService.add('StudentService: Fetched Students list');
    return of (STUDENTS);
  }

  getStudent(id: number): Observable<Student> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`StudentService: fetched Student id=${id}`);
    return of(STUDENTS.find(student => student.id === id));
  }
  
  constructor(
    // private http: HttpClient,
    private messageService: MessageService) { }
}
