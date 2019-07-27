import { Component, Input } from '@angular/core';
import { ExchangeService } from './exchangeService'

@Component({
    selector: 'currency-select',
    template: `<select [ngModel]="selected">
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

}