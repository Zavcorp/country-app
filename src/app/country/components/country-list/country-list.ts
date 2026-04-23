import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CountryInterface } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryList {

   countries = input.required<CountryInterface[]>();
 }
