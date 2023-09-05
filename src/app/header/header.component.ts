import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../services/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  constructor(
    private headerservice: HeaderService
  ) { }

  name: string = ""
  titulos: string = ""
  mision: string = " "
  fotoUrl: string = "";
  email: string = ""
  cel: string = ""
  ubicacion: string = ""
  red_x: string = ""
  red_github: string = ""

  ngOnInit(): void {
    this.headerservice.getHeader().subscribe((data: any) => {
      this.name = data.name
      this.titulos = data.titulos
      this.mision = data.mision
      this.fotoUrl = data.foto
      this.email = data.email
      this.cel = data.cel
      this.ubicacion = data.ubicacion
      this.red_x = data.red_social.x
      this.red_github = data.red_social.github
      console.log(data);
      //alert(data);
    })
  }
}
