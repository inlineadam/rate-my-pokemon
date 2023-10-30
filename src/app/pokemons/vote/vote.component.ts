import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import {
  PokemonNamedAPIResource,
  PokemonResults,
} from 'src/app/shared/models/pokemons.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {
  readonly pageSize = 50;

  isLoading = false;
  pokemons: PokemonNamedAPIResource[] = [];

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${this.pageSize}&offset=0`;
    this.fetchPokemons(url);
  }

  fetchPokemons(url: string) {
    this.isLoading = true;
    this.pokemonsService.fetchPokemon(url).subscribe((data) => {
      this.isLoading = false;
      this.processResult(data);
    });
  }

  processResult(data: PokemonResults) {
    this.pokemons = data.results;
  }
}
