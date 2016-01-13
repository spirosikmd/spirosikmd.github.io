import {Component} from 'angular2/core';
import {ExperienceComponent} from './experience/experience.component';
import {ContactComponent} from './contact.component';
import {SkillsComponent} from './skills.component';
import {LanguagesComponent} from './languages.component';
import {HobbiesComponent} from './hobbies.component';
import {EducationComponent} from './education.component';

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
