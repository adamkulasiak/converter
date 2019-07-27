import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ExchangeService } from './exchangeService'

@Component({
    selector: 'currency-select',
    template: `<select [ngModel]="selected" (ngModelChange)="onSelectedChange($event)">
                <option *ngFor="let currency of supportedCurrencies" [value]="currency">
                    {{currency}}
                </option>
              </select> `
})
export class CurrencySelectComponent {
    supportedCurrencies: string[];
    constructor(exchangeService: ExchangeService) {
        this.supportedCurrencies = exchangeService.supportedCurrencies;
    }
    @Input() selected: string;
    @Output() selectedChange = new EventEmitter<string>();

    onSelectedChange(selected: string) {
        this.selected = selected;
        this.selectedChange.emit(selected);
    }

}