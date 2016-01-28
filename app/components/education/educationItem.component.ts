import {Component, Input} from 'angular2/core';

@Component({
    selector: 'education-item',
    templateUrl: 'app/components/education/educationItem.html'
})
export class EducationItemComponent {
    @Input() when;
    @Input() what;
    @Input() where;
}
