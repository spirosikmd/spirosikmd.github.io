import {Component, Input} from 'angular2/core';

@Component({
    selector: 'skill-item',
    templateUrl: 'app/components/skills/skillItem.html'
})
export class SkillItemComponent {
    @Input() value;
}
