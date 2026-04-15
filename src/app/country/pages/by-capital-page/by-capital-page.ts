import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { Country } from '../../services/country';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage {
  Country = inject(Country);


  onSearch(query:string){

    this.Country.searchByCapital(query)
    .subscribe( resp => {
      console.log({ resp });
    })
  }
}
