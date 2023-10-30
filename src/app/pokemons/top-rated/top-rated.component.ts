import { Component } from '@angular/core';
import { PokemonsService } from '../pokemons.service';

export interface TopRatedElement {
  position: number;
  name: string;
  score: number;
}

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss'],
})
export class TopRatedComponent {
  displayedColumns: string[] = ['position', 'name', 'score'];
  dataSource: TopRatedElement[] = [];

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.dataSource = this.pokemonsService
      .getTopRatedPokemons()
      .map((item, index) => {
        return {
          position: index + 1,
          name: item.pokemon.name,
          score: item.score,
        };
      })
      .slice(0, 10);
  }
}
