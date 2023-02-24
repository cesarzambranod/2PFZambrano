import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../../model/student";
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private service: StudentsService) {
  }

  form!: FormGroup;
  cursos: string[] = [
    'Angular', 'ReactJS', 'Java', 'C#', 'Golang'
  ]

  ngOnInit(): void {
    let emailRegex: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern(emailRegex)]],
      curso: ['', Validators.required],
      inicio: ['']
    })

  }


  addStudent() {
    let student: Student = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      correo: this.form.value.correo,
      curso: this.form.value.curso,
      inicio: this.form.value.inicio
    }
    this.service.addStudent(student);
    this.router.navigate(['students/management']);
  }
}
