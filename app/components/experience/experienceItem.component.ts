import {Component, Input} from 'angular2/core';

@Component({
    selector: 'experience-item',
    templateUrl: 'app/components/experience/experienceItem.html'
})
export class ExperienceItemComponent {
    @Input() where;
    @Input() from;
    @Input() to;
    @Input() who;
}
