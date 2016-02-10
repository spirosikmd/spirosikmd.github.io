import {Component} from 'angular2/core';
import {SkillItemComponent} from "./skillItem.component";

@Component({
    selector: 'skills',
    directives: [SkillItemComponent],
    templateUrl: 'app/components/skills/skills.html'
})
export class SkillsComponent {
    title = 'Skills';
}
