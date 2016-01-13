System.register(['angular2/core', './experienceItem.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, experienceItem_component_1;
    var ExperienceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (experienceItem_component_1_1) {
                experienceItem_component_1 = experienceItem_component_1_1;
            }],
        execute: function() {
            ExperienceComponent = (function () {
                function ExperienceComponent() {
                    this.title = 'Experience';
                    this.items = [{
                            where: 'Usabilla',
                            year: 'February 2015 - Present',
                            profession: 'Full-stack Software Engineer',
                            description: "\n            Development on the full <a href=\"http://usabilla.com\" target=\"_blank\">Usabilla</a> stack.\n        "
                        }];
                }
                ExperienceComponent = __decorate([
                    core_1.Component({
                        selector: 'experience',
                        directives: [experienceItem_component_1.ExperienceItemComponent],
                        templateUrl: 'app/components/experience/experience.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExperienceComponent);
                return ExperienceComponent;
            })();
            exports_1("ExperienceComponent", ExperienceComponent);
        }
    }
});
//# sourceMappingURL=experience.component.js.map