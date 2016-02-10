import {Component, Input} from 'angular2/core';

@Component({
    selector: 'hobby-item',
    templateUrl: 'app/components/hobbies/hobbyItem.html'
})
export class HobbyItemComponent {
    @Input() value;
}
