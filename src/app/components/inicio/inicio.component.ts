import { Component } from '@angular/core';
import jsonData from '/Cursos/GitHub Projects/Portfolio 2024 Ignacio/portfolio_2024/src/assets/data/data.json';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  data: any = jsonData;
  title: string = "";
  profile_img: string = "";
  descripcion: string = "";
  about: string  = "";
  cv_link: string = "";
  git_link: string = "";

  ngOnInit(): void {
      this.title = this.data.title;
      this.profile_img = this.data.profile_img;
      this.descripcion = this.data.descripcion;
      this.about = this.data.about;
      this.cv_link = this.data.cv_link;
      this.git_link = this.data.git_link;
  }
}
