import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import {
  PokemonNamedAPIResource,
  PokemonResults,
} from 'src/app/shared/models/pokemons.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {
  readonly pageSize = 50;

  paginatorLength = 0;
  pageIndex = 0;

  isLoading = false;
  pokemons: PokemonNamedAPIResource[] = [];
  fetchNextUrl: string | null = null;
  fetchPreviousUrl: string | null = null;

  firstPokemon: PokemonNamedAPIResource | null = null;
  secondPokemon: PokemonNamedAPIResource | null = null;

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
    this.paginatorLength = data.count;
    this.fetchNextUrl = data.next;
    this.fetchPreviousUrl = data.previous;

    this.getTwoRandomPokemons();
  }

  getTwoRandomPokemons() {
    this.firstPokemon = null;
    this.secondPokemon = null;

    const firstPokemonIndex = Math.floor(Math.random() * this.pokemons.length);
    let secondPokemonIndex = Math.floor(Math.random() * this.pokemons.length);
    while (secondPokemonIndex === firstPokemonIndex) {
      secondPokemonIndex = Math.floor(Math.random() * this.pokemons.length);
    }

    this.firstPokemon = this.pokemons[firstPokemonIndex];
    this.secondPokemon = this.pokemons[secondPokemonIndex];
  }

  handlePageEvent(e: PageEvent) {
    if (this.pageIndex < e.pageIndex) {
      this.fetchPokemons(this.fetchNextUrl!);
    }
    if (this.pageIndex > e.pageIndex) {
      this.fetchPokemons(this.fetchPreviousUrl!);
    }
    this.pageIndex = e.pageIndex;
  }
}
