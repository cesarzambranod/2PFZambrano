import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../../model/student";
import {last} from "rxjs";
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrls: ['./student-edit-form.component.css']
})
export class StudentEditFormComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private service: StudentsService,
              private router: Router) {
  }

  form!: FormGroup;
  cursos: string[] = [
    'Angular', 'ReactJS', 'Java', 'C#', 'Golang'
  ]

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      let emailRegex: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
      this.form = this.formBuilder.group({
        nombre: [params.get('nombre'), Validators.required],
        apellido: [params.get('apellido'), Validators.required],
        correo: [params.get('correo'), [Validators.required, Validators.pattern(emailRegex)]],
        curso: [params.get('curso'), Validators.required],
        inicio: [new Date(params.get('inicio') || '')]
      })
    })
  }

  editStudent() {
    let student: Student = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      correo: this.form.value.correo,
      curso: this.form.value.curso,
      inicio: this.form.value.inicio
    }
    this.service.editStudent(student);
    this.router.navigate(['students/management']);

  }
}
