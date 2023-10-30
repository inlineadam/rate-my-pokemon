import { Component } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { PokemonRateItem } from 'src/app/shared/models/pokemons.model';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss'],
})
export class TopRatedComponent {
  topRatedPokemons: PokemonRateItem[] = [];

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.topRatedPokemons = this.pokemonsService.getTopRatedPokemons();
  }
}
