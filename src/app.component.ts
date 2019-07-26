import { Component } from '@angular/core';
import {ExchangeService} from './exchangeService'

@Component({
  selector: 'converter',
  providers: [ExchangeService],
  template: `<input type="number" [(ngModel)]="baseAmount" [ngClass]="{error:isValid(baseAmount), warning:baseAmount<0}"> {{baseCurrency}} =
              <strong>{{targetAmount}}</strong> {{targetCurrency}}`,
  styles: [
    `input[type=number] {
      width: 10ex;
      text-align: right;
    }
      .error {
        background-color: #ff5555;
      }
      .warning {
        background-color: yellow;
      }
    `
  ]
})
export class AppComponent {
  baseCurrency = 'GBP';
  targetCurrency = 'EUR';
  baseAmount: number = 1;
  private exchangeService;

  constructor(exchangeService: ExchangeService) {
    this.exchangeService = exchangeService;
  }

  update(baseAmount): void {
    this.baseAmount = baseAmount;
  }

  get targetAmount() {
    const exchangeRate = this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency);
    return this.baseAmount * exchangeRate;
  }

  isValid(value) {
    return !Number.isFinite(value);
  }
}
