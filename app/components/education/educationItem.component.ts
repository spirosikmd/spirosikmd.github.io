import {Component, Input} from '@angular/core';

@Component({
    selector: 'education-item',
    templateUrl: 'app/components/education/educationItem.html'
})
export class EducationItemComponent {
    @Input() when;
    @Input() what;
    @Input() where;
}
