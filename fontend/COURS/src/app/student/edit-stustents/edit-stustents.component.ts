import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-edit-stustents',
  templateUrl: './edit-stustents.component.html',
  styleUrls: ['./edit-stustents.component.css']
})
export class EditStustentsComponent {
  id_student:any
  student_form:FormGroup
   constructor(private router:Router, private route:ActivatedRoute, private service: StudentService,private fb:FormBuilder ){
    this.student_form = this.fb.group({
     
      "first_name":["",Validators.required],
      "last_name": ["",Validators.required],
      "date_of_birth": ["",Validators.required],
      "email": ["",Validators.compose([Validators.required,Validators.email])],
      "address": ["",Validators.required],
      "phone_number": ["",Validators.required]
    })
    this.id_student=this.route.snapshot.paramMap.get('id')
    this.getStudent()
   }
   getStudent(){
    this.service.getSingleStudent(this.id_student).subscribe({
       next:(response)=>{
           this.student_form.patchValue(response)
        
      },
      error:(error)=> {
        console.log(error)
      },
    })
   }

   updateStdent(){
    this.service.updateStudent(this.id_student,this.student_form.value).subscribe({
      next:(response)=>{
        console.log("modifier")
        this.router.navigateByUrl('/')
      },
      error:(error)=>console.log(error)
    })
   }
}
