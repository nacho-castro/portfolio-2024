import { NgFor } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import jsonData from '/Cursos/GitHub Projects/Portfolio 2024 Ignacio/portfolio_2024/src/assets/data/data.json';

@Component({
  selector: 'app-skcard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skcard.component.html',
  styleUrl: './skcard.component.css'
})
export class SkcardComponent {
  @Input() selectedSkill!: string;
  profileData: any = jsonData;
  filteredSkills: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedSkill']) {
      this.filterSkills();
    }
  }

  private filterSkills(): void {
    if (this.profileData.skills) {
      this.filteredSkills = this.profileData.skills.filter((skill: { type: string }) => skill.type === this.selectedSkill);
    }
  }
}