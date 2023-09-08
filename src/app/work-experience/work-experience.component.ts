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


  }

}
