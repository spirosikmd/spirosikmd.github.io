import {Component} from 'angular2/core';
import {HeadlineComponent} from './components/headline.component';
import {AboutComponent} from './components/about.component';

@Component({
    selector: 'profile-app',
    directives: [HeadlineComponent, AboutComponent],
    templateUrl: 'app/profile.html'
})
export class ProfileComponent {
}
