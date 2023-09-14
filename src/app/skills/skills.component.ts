import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  experienciaLaboral: Array<any> = [];

  constructor(
    private skillsService: SkillsService
  ) { }

  ngOnInit(): void {
    this.skillsService.getHeader().subscribe((data: any) => {
      this.experienciaLaboral = data
    })

  }
}
