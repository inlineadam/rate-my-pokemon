import { Injectable } from '@angular/core';
import {
  PokemonDetails,
  PokemonResults,
} from '../shared/models/pokemons.model';
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

  fetchPokemonDetails(url: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(url);
  }
}
