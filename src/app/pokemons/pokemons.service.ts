import { Injectable } from '@angular/core';
import {
  PokemonDetails,
  PokemonNamedAPIResource,
  PokemonRateItem,
  PokemonResults,
} from '../shared/models/pokemons.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private topRatedPokemons: PokemonRateItem[] = [];

  constructor(private http: HttpClient) {}

  fetchPokemon(url: string): Observable<PokemonResults> {
    return this.http.get<PokemonResults>(url);
  }

  fetchPokemonDetails(url: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(url);
  }

  getTopRatedPokemons() {
    return this.topRatedPokemons.sort((a, b) => b.score - a.score);
  }

  voteForPokemon(pokemon: PokemonNamedAPIResource) {
    const pokemonIndex = this.topRatedPokemons.findIndex(
      (item) => item.pokemon.name === pokemon.name
    );

    if (pokemonIndex === -1) {
      this.topRatedPokemons.push({
        pokemon,
        score: 1,
      });
    } else {
      this.topRatedPokemons[pokemonIndex].score++;
    }
  }
}
