import {Component} from 'angular2/core';

@Component({
    selector: 'headline',
    template: '<h1>Hello,<br> my name is <span>{{ name }}</span> and this is my resume</h1>'
})
export class AppComponent {
    name = 'Spyros Ioakeimidis';
}
