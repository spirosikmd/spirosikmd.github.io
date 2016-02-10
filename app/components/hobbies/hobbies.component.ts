import {Component} from 'angular2/core';
import {HobbyItemComponent} from "./hobbyItem.component";

@Component({
    selector: 'hobbies',
    directives: [HobbyItemComponent],
    templateUrl: 'app/components/hobbies/hobbies.html'
})
export class HobbiesComponent {
    title = 'Hobbies';
}
