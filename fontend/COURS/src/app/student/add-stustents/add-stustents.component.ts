import { Component } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';


@Component({
  selector: 'app-add-stustents',
  templateUrl: './add-stustents.component.html',
  styleUrls: ['./add-stustents.component.css']
})
export class AddStustentsComponent {
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

}

addStudent(){
  this.service.addStudent(this.student_form.value).subscribe({
    next:(response)=>{
      this.router.navigateByUrl('/'

      )
    },
    error:(err)=> {
      console.log(err)
    },
  })
}
}
