import {Component} from 'angular2/core';
import {ExperienceItemComponent} from './experienceItem.component';

@Component({
    selector: 'experience',
    directives: [ExperienceItemComponent],
    templateUrl: 'app/components/experience/experience.html'
})
export class ExperienceComponent {
    title = 'Experience';
    items = [{
        where: 'Usabilla',
        year: 'February 2015 - Present',
        profession: 'Full-stack Software Engineer',
        description: `
            Development on the full <a href="http://usabilla.com" target="_blank">Usabilla</a> stack.
        `
    }];
}
