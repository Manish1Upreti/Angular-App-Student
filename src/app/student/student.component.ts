import { Component, OnInit } from '@angular/core';
// 1.import { Student } from '../student';
// after using student service we need to comment or delete STUDENTS
// 3.import { STUDENTS } from '../student-list';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { MessageService } from '../message.service';




@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  
  // 1. student = "Manish" if we write like this we can call it in html part by interpollation
  // 2. student  property to be of type Student so we have to import Student from student.ts
  // student: Student = { 
  //   id: 1,
  //   name: 'Manish',
  //   mobileno:'0605512695',
  //   email:'manish123@gmail.com'
  // }

  //3. asign all the value of STUDENTS to students variable for this we have to import STUDENTS from student-list
 // students = STUDENTS;
 //4. for service
 // students is Student[] type data
 students: Student[];

 //  selectedStudent is Student type datatype
 // after list and detail with link it was commented
// selectedStudent: Student; 
 // 4. Add a private studentService parameter of type StudentService to the constructor
constructor(private studentService: StudentService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getStudentsCom();
  }


//student is also Student type datatype
// after list and detail with link it was commented

 //onSelect(student:Student): void {
 //this.selectedStudent = student;
 //this.messageService.add(`StudentService: Selected student name =${student.name}`);
//}

// getStudentsCom is a method use to get data from service
getStudentsCom(): void {
  //cannot return immediately with student data but Observable will eventually use HttpClient.get method to fetch students
  // this.students = this.studentService.getStudents();

  // Reliable and fast for making requests of a remote server.
   this.studentService.getStudents()
        .subscribe(students => this.students = students);
}
 
}
