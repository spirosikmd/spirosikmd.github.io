import {Component} from 'angular2/core';
import {ExperienceItemComponent} from './experienceItem.component';

@Component({
    selector: 'experience',
    directives: [ExperienceItemComponent],
    templateUrl: 'app/components/experience/experience.html'
})
export class ExperienceComponent {
    title = 'Experience';
    now = new Date();
}
