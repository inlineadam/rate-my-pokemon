import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  PokemonDetails,
  PokemonNamedAPIResource,
} from 'src/app/shared/models/pokemons.model';
import { PokemonsService } from '../../pokemons.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-vote-card',
  templateUrl: './vote-card.component.html',
  styleUrls: ['./vote-card.component.scss'],
})
export class VoteCardComponent {
  @Input() pokemon: PokemonNamedAPIResource | undefined;
  @Output() vote = new EventEmitter<void>();

  pokemonDetails$: Observable<PokemonDetails> | undefined;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnChanges(): void {
    this.pokemonDetails$ = this.pokemonsService
      .fetchPokemonDetails(this.pokemon!.url)
      .pipe(take(1));
  }

  onVote() {
    if (this.pokemon) {
      this.pokemonsService.voteForPokemon(this.pokemon);
      this.vote.emit();
    }
  }
}
