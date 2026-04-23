import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { CountryInterface } from '../interfaces/country.interface';

const API_URL= 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class Country {

  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<CountryInterface[]> {
        query = query.toLowerCase();

        return this.http
        .get<RESTCountry[]>(`${API_URL}/capital/${query}`)
        .pipe(
          map((resp) => CountryMapper.mapRestCountryArraytoCountryArray(resp)),
          catchError( (error) => {
             console.log('Error Fetching', error);

             return throwError (
              ()=>  new Error('No se pudieron obtener paises con ese nombre')
             );
          })
        );
  }
}
