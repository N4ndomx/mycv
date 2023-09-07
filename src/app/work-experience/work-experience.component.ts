import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience: Array<any> = [];

  constructor(
    private workService: WorkExperienceService
  ) { }

  ngOnInit(): void {
    this.workService.getHeader().subscribe((data: any) => {
      this.workExperience = data
    })

    let work1 = {
      fecha: "2022-2022",
      ubicacion: "Orizaba",
      puesto: "Web Design",
      empresa: "Waves Lab",
      logros: [
        { descripcion: " Contruccion de un ERP en la nube de google" },
        { descripcion: "Creacion de un cluster en hadoop y spark" }

      ]
    };

    let work2 = {
      fecha: "2021-2022",
      ubicacion: "Orizaba",
      puesto: "Artificial Intelligence Developer",
      empresa: "Kubeet",
      logros: [
        { descripcion: "Contruccion de un invernadero hidropoico" },
        { descripcion: "Creacion de un cluster en hadoop" }
      ]
    };

    let work3 = {
      fecha: "2020-2021",
      ubicacion: "Orizaba",
      puesto: "Database Manager",
      empresa: "ADESOFT",
      logros: [
        { descripcion: "Análisis de datos" },
        { descripcion: "Gestión y control de las bases de datos" }
      ]
    };


    this.workExperience.push(work1);
    this.workExperience.push(work2);
    this.workExperience.push(work3);
  }
}
