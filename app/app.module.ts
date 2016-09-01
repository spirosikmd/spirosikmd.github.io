import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ProfileComponent} from './profile.component';
import {HeadlineComponent} from './components/headline.component';
import {AboutComponent} from './components/about.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {EducationComponent} from './components/education/education.component';
import {ContactComponent} from './components/contact/contact.component';
import {SkillsComponent} from './components/skills/skills.component';
import {LanguagesComponent} from './components/languages/languages.component';
import {HobbiesComponent} from './components/hobbies/hobbies.component';
import {SkillItemComponent} from './components/skills/skillItem.component';
import {LanguageItemComponent} from './components/languages/languageItem.component';
import {HobbyItemComponent} from './components/hobbies/hobbyItem.component';
import {ContactItemComponent} from './components/contact/contactItem.component';
import {EducationItemComponent} from './components/education/educationItem.component';
import {ExperienceItemComponent} from './components/experience/experienceItem.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    ProfileComponent,
    HeadlineComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    SkillsComponent,
    LanguagesComponent,
    HobbiesComponent,
    SkillItemComponent,
    LanguageItemComponent,
    HobbyItemComponent,
    ContactItemComponent,
    EducationItemComponent,
    ExperienceItemComponent
  ],
  bootstrap: [ProfileComponent]
})
export class AppModule {
}
