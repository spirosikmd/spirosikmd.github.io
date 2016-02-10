System.register(['angular2/core', './experience/experience.component', './contact/contact.component', './skills/skills.component', './languages.component', './hobbies.component', './education/education.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, experience_component_1, contact_component_1, skills_component_1, languages_component_1, hobbies_component_1, education_component_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (experience_component_1_1) {
                experience_component_1 = experience_component_1_1;
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
            function (education_component_1_1) {
                education_component_1 = education_component_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent() {
                }
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: 'about',
                        directives: [
                            experience_component_1.ExperienceComponent,
                            education_component_1.EducationComponent,
                            contact_component_1.ContactComponent,
                            skills_component_1.SkillsComponent,
                            languages_component_1.LanguagesComponent,
                            hobbies_component_1.HobbiesComponent
                        ],
                        templateUrl: 'app/components/about.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutComponent);
                return AboutComponent;
            })();
            exports_1("AboutComponent", AboutComponent);
        }
    }
});
//# sourceMappingURL=about.component.js.map