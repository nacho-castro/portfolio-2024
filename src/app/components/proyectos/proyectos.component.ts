import { Component } from '@angular/core';
import jsonData from '/Cursos/GitHub Projects/Portfolio 2024 Ignacio/portfolio_2024/src/assets/data/data.json';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  profileData: any = jsonData;

  ngOnInit(): void {
      this.profileData = this.profileData.proyectos;
  }
}
