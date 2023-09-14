import { Component, OnInit } from '@angular/core';
import { InterestsService } from "../services/interests.service";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  intereses: Array<any> = [];
  constructor(
    private interestService: InterestsService

  ) { }

  ngOnInit(): void {
    this.interestService.getHeader().subscribe((data: any) => {
      this.intereses = data
    })
  }

}
