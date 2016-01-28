import {Component} from 'angular2/core';
import {EducationItemComponent} from './educationItem.component';

@Component({
    selector: 'education',
    directives: [EducationItemComponent],
    templateUrl: 'app/components/education/education.html'
})
export class EducationComponent {
    title = 'Education';
}
