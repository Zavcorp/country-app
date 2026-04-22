import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { CountryInterface } from '../../interfaces/country.interface';

@Component({
  selector: 'by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage {

 countries = input.required<CountryInterface[]>();

}
