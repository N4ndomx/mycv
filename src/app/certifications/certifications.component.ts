import { Component, OnInit } from '@angular/core';
import { CertificationsService } from "../services/certifications.service"

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certificados: Array<any> = [];

  constructor(
    private certifiService: CertificationsService
  ) { }

  ngOnInit(): void {
    this.certifiService.getHeader().subscribe((data: any) => {
      this.certificados = data
    })

  }
}
