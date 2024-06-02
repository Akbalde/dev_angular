import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Student } from './interface/studente';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudent():Observable<Student[]>{
    return this.http.get<Student[]>("http://127.0.0.1:8000/api/students/") 
  }
  addStudent(data: Student):Observable<Student>{
    return this.http.post<Student>("http://127.0.0.1:8000/api/students/",data);

  }
  updateStudent(data:Student, id_student:number):Observable<Student>{
  return this.http.put<Student>(` http://127.0.0.1:8000/api/students/${id_student}`,data);

  
  }
  deleteStudent(id_student:number):Observable<Student>{
    
    return this.http.delete<Student>(`http://127.0.0.1:8000/api/students/${id_student}`);

  }
  getSingleStudent(id_student:number):Observable<Student> {
    return this.http.delete<Student>(`http://127.0.0.1:8000/api/students/${id_student}`);
 
  }


}
