import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '../models/pokemons.model';

@Pipe({
  name: 'joinTypes',
})
export class JoinTypesPipe implements PipeTransform {
  transform(pokemonTypes: Type[]): string {
    if (pokemonTypes.length > 0) {
      return pokemonTypes.map((type) => type.type.name).join(', ');
    }

    return 'No types';
  }
}
