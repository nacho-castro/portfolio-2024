import { Component } from '@angular/core';
import { SkcardComponent } from '../skcard/skcard.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkcardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  selectedSkill: string = 'front'; //Por Default

  changeSkill(skillType: string): void {
    this.selectedSkill = skillType;
  }
}
