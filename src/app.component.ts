import { Component } from '@angular/core';

@Component({
  selector: 'converter',
  template: `<input type="number" [(ngModel)]="baseAmount" [ngClass]="{error:isValid(baseAmount), warning:baseAmount<0}"> USD =
              <strong>{{targetAmount}}</strong> GBP`,
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
  exchangeRate: number = 0.70;
  baseAmount: number = 1;

  update(baseAmount): void {
    this.baseAmount = baseAmount;
  }

  get targetAmount() {
    return this.baseAmount * this.exchangeRate;
  }

  isValid(value) {
    return !Number.isFinite(value);
  }
}
