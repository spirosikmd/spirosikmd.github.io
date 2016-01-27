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
                            when: {
                                from: new Date(2015, 2),
                                to: new Date()
                            },
                            who: 'Full-stack Software Engineer',
                            what: "\n            Development on the full <a href=\"http://usabilla.com\" target=\"_blank\">Usabilla</a> stack.\n        "
                        }, {
                            where: 'Paylogic',
                            when: {
                                from: new Date(2013, 8),
                                to: new Date(2015, 1)
                            },
                            who: 'Full-stack Software Engineer',
                            what: "\n            <ul class=\"list-unstyled\">\n                <li><a target=\"_blank\" href=\"http://paylogic.com\">Paylogic International</a> specializes in Ticketing SaaS.</li>\n                <li>Design and development of projects for the core component and ticketing APIs. Python; Flask; Django; MySQL; SQLAlchemy; pytest</li>\n                <li>Software engineering best practices (e.g. functional and unit testing, code reviews, design and code documentation).</li>\n            </ul>\n        "
                        }, {
                            where: 'SEARCH group',
                            when: {
                                from: new Date(2013, 2),
                                to: new Date(2013, 8)
                            },
                            who: 'Software Engineer',
                            what: "\n            Design and implementation of tool support (based on previous research of <a target=\"_blank\" href=\"http://www.cs.rug.nl/search/\">SEARCH</a> group) for the documentation of architectural decisions and traceability to other design elements. C#\n        "
                        }, {
                            where: 'SEARCH group',
                            when: {
                                from: new Date(2012, 4),
                                to: new Date(2012, 6)
                            },
                            who: 'Software Engineer',
                            what: "\n            Design, implementation, and testing of tool support for decision making, based on the Repertory Grid Technique. Python; Django; MySQL\n        "
                        }, {
                            where: 'Lafarge Greece',
                            when: {
                                from: new Date(2010, 3),
                                to: new Date(2010, 12)
                            },
                            who: 'Engineer of Automation',
                            what: "Development and maintenance of SCADA, PLC, and .NET apps."
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