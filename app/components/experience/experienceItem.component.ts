import {Component, Input} from 'angular2/core';

@Component({
    selector: 'experienceItem',
    templateUrl: 'app/components/experience/experienceItem.html'
})
export class ExperienceItemComponent {
    @Input() model;
}
