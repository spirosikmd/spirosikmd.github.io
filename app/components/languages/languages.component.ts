import {Component} from 'angular2/core';
import {LanguageItemComponent} from "./languageItem.component";

@Component({
    selector: 'languages',
    directives: [LanguageItemComponent],
    templateUrl: 'app/components/languages/languages.html'
})
export class LanguagesComponent {
    title = 'Languages';
}
