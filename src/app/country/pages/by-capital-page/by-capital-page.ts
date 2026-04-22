import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { Country } from '../../services/country';
import { CountryInterface } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage {
  Country = inject(Country);
  isLoading = signal(false);
  isError = signal<string|null>(null);
  countries = signal<CountryInterface[]>([]);

  onSearch(query:string){

    if( this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.Country.searchByCapital(query)
    .subscribe( countries => {
      this.isLoading.set(false);
      this.countries.set(countries);
      console.log({ countries });
    })
  }
}
