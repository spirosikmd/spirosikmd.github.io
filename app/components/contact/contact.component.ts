import {Component} from 'angular2/core';
import {ContactItemComponent} from './contactItem.component';

@Component({
    selector: 'contact',
    directives: [ContactItemComponent],
    templateUrl: 'app/components/contact/contact.html'
})
export class ContactComponent {
    title = 'Contact';
}
