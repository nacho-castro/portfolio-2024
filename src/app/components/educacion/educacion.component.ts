import { Component } from '@angular/core';
import jsonData from '/Cursos/GitHub Projects/Portfolio 2024 Ignacio/portfolio_2024/src/assets/data/data.json';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [NgFor],
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent {
  profileData: any = jsonData;

  ngOnInit(): void {
    this.profileData = this.profileData.educacion;
}
}
