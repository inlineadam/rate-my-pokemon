import { Injectable } from '@angular/core';
import { PokemonResults } from '../shared/models/pokemons.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  fetchPokemon(url: string): Observable<PokemonResults> {
    return this.http.get<PokemonResults>(url);
  }
}
