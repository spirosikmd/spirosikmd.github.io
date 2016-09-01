System.register(['@angular/core', '@angular/platform-browser', './profile.component', './components/headline.component', './components/about.component', './components/experience/experience.component', './components/education/education.component', './components/contact/contact.component', './components/skills/skills.component', './components/languages/languages.component', './components/hobbies/hobbies.component', './components/skills/skillItem.component', './components/languages/languageItem.component', './components/hobbies/hobbyItem.component', './components/contact/contactItem.component', './components/education/educationItem.component', './components/experience/experienceItem.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, profile_component_1, headline_component_1, about_component_1, experience_component_1, education_component_1, contact_component_1, skills_component_1, languages_component_1, hobbies_component_1, skillItem_component_1, languageItem_component_1, hobbyItem_component_1, contactItem_component_1, educationItem_component_1, experienceItem_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (headline_component_1_1) {
                headline_component_1 = headline_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (experience_component_1_1) {
                experience_component_1 = experience_component_1_1;
            },
            function (education_component_1_1) {
                education_component_1 = education_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (skills_component_1_1) {
                skills_component_1 = skills_component_1_1;
            },
            function (languages_component_1_1) {
                languages_component_1 = languages_component_1_1;
            },
            function (hobbies_component_1_1) {
                hobbies_component_1 = hobbies_component_1_1;
            },
            function (skillItem_component_1_1) {
                skillItem_component_1 = skillItem_component_1_1;
            },
            function (languageItem_component_1_1) {
                languageItem_component_1 = languageItem_component_1_1;
            },
            function (hobbyItem_component_1_1) {
                hobbyItem_component_1 = hobbyItem_component_1_1;
            },
            function (contactItem_component_1_1) {
                contactItem_component_1 = contactItem_component_1_1;
            },
            function (educationItem_component_1_1) {
                educationItem_component_1 = educationItem_component_1_1;
            },
            function (experienceItem_component_1_1) {
                experienceItem_component_1 = experienceItem_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule],
                        declarations: [
                            profile_component_1.ProfileComponent,
                            headline_component_1.HeadlineComponent,
                            about_component_1.AboutComponent,
                            experience_component_1.ExperienceComponent,
                            education_component_1.EducationComponent,
                            contact_component_1.ContactComponent,
                            skills_component_1.SkillsComponent,
                            languages_component_1.LanguagesComponent,
                            hobbies_component_1.HobbiesComponent,
                            skillItem_component_1.SkillItemComponent,
                            languageItem_component_1.LanguageItemComponent,
                            hobbyItem_component_1.HobbyItemComponent,
                            contactItem_component_1.ContactItemComponent,
                            educationItem_component_1.EducationItemComponent,
                            experienceItem_component_1.ExperienceItemComponent
                        ],
                        bootstrap: [profile_component_1.ProfileComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map