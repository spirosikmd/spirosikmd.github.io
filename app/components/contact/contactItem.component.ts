import {Component, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'contact-item',
    directives: [NgClass],
    templateUrl: 'app/components/contact/contactItem.html'
})
export class ContactItemComponent {
    @Input() title;
    @Input() icon;
    @Input() titleOnly = false;

    iconClass = {};

    ngOnInit () {
        if (!!this.icon) {
            this.iconClass[this.icon] = true;
        }
    }
}
