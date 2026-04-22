import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CountryInterface } from '../../interfaces/country.interface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryList {

   countries = input.required<CountryInterface[]>();
 }
