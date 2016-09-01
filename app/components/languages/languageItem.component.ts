import {Component, Input} from '@angular/core';

@Component({
    selector: 'language-item',
    templateUrl: 'app/components/languages/languageItem.html'
})
export class LanguageItemComponent {
    @Input() value;
}
