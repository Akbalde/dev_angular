import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interface/studente';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-stustents-list',
  templateUrl: './stustents-list.component.html',
  styleUrls: ['./stustents-list.component.css']
})
export class StustentsListComponent implements OnInit{
  students:Student[]=[]
  dropdownOpen = false;
  constructor(private service:StudentService, private route: Router){}
  ngOnInit(): void {
    this.getStudents();
  }
  
  getStudents(){
    this.service.getStudent().subscribe({
      next:(response)=>{
        console.log(response)
        this.students= response
      },
      error:(error)=>console.log(error)
    })
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  handleEdit() {
    alert('Éditer button clicked!');
    this.dropdownOpen = false;
  }

  handleModify(id_student:number) {
    this.route.navigateByUrl(`edit_student/${id_student}`)
    this.dropdownOpen = false;
  }

  handleDelete(id_student:number) {
    const dialog = confirm("voulez-vous supprimer cet étudiant");
    if(dialog){
      this.service.deleteStudent(id_student).subscribe({
        next:(response)=>{
             console.log("etudiant supprimer")
             this.getStudents()
        },
        error:(e)=>console.log(e)
      })
    }
    alert('Supprimer button clicked!');
    this.dropdownOpen = false;
  }

}
