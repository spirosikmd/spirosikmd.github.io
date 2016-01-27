import {Component} from 'angular2/core';
import {ExperienceItemComponent} from './experienceItem.component';

@Component({
    selector: 'experience',
    directives: [ExperienceItemComponent],
    templateUrl: 'app/components/experience/experience.html'
})
export class ExperienceComponent {
    title = 'Experience';
    items = [{
        where: 'Usabilla',
        when: {
            from: new Date(2015, 2),
            to: new Date()
        },
        who: 'Full-stack Software Engineer',
        what: `
            Development on the full <a href="http://usabilla.com" target="_blank">Usabilla</a> stack.
        `
    }, {
        where: 'Paylogic',
        when: {
            from: new Date(2013, 8),
            to: new Date(2015, 1)
        },
        who: 'Full-stack Software Engineer',
        what: `
            <ul class="list-unstyled">
                <li><a target="_blank" href="http://paylogic.com">Paylogic International</a> specializes in Ticketing SaaS.</li>
                <li>Design and development of projects for the core component and ticketing APIs. Python; Flask; Django; MySQL; SQLAlchemy; pytest</li>
                <li>Software engineering best practices (e.g. functional and unit testing, code reviews, design and code documentation).</li>
            </ul>
        `
    }, {
        where: 'SEARCH group',
        when: {
            from: new Date(2013, 2),
            to: new Date(2013, 8)
        },
        who: 'Software Engineer',
        what: `
            Design and implementation of tool support (based on previous research of <a target="_blank" href="http://www.cs.rug.nl/search/">SEARCH</a> group) for the documentation of architectural decisions and traceability to other design elements. C#
        `
    }, {
        where: 'SEARCH group',
        when: {
            from: new Date(2012, 4),
            to: new Date(2012, 6)
        },
        who: 'Software Engineer',
        what: `
            Design, implementation, and testing of tool support for decision making, based on the Repertory Grid Technique. Python; Django; MySQL
        `
    }, {
        where: 'Lafarge Greece',
        when: {
            from: new Date(2010, 3),
            to: new Date(2010, 12)
        },
        who: 'Engineer of Automation',
        what: `Development and maintenance of SCADA, PLC, and .NET apps.`
    }];
}
