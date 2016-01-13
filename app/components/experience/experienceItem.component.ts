import {Component, Input} from 'angular2/core';

@Component({
    selector: 'experienceItem',
    template: '<div>{{model}}</div>'
})
export class ExperienceItemComponent {
    @Input() model;
}
