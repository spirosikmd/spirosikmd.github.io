import {Component} from 'angular2/core';
import {ExperienceComponent} from './experience/experience.component';
import {ContactComponent} from './contact/contact.component';
import {SkillsComponent} from './skills/skills.component';
import {LanguagesComponent} from './languages/languages.component';
import {HobbiesComponent} from './hobbies/hobbies.component';
import {EducationComponent} from './education/education.component';

@Component({
    selector: 'about',
    directives: [
        ExperienceComponent,
        EducationComponent,
        ContactComponent,
        SkillsComponent,
        LanguagesComponent,
        HobbiesComponent
    ],
    templateUrl: 'app/components/about.html'
})
export class AboutComponent {
}
