import {Component} from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: 'app/components/experience/experience.html'
})
export class ExperienceComponent {
  title = 'Experience';
  now = new Date();
}
