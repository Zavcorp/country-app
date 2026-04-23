import { CountryInterface } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-countries.interface';

export class CountryMapper {

// static RestCountry ==> Country

static mapRestCountryToCountry( restCountry: RESTCountry) : CountryInterface {
   return{
      capital: restCountry.capital.join(','),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No spanish name',
      population: restCountry.population
   }
}

static mapRestCountryArraytoCountryArray(
  restCountries: RESTCountry[]
): CountryInterface []{
   return restCountries.map(this.mapRestCountryToCountry)
}
}
