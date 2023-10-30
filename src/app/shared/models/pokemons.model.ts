export interface PokemonResults {
  count: number;
  next: string;
  previous: string;
  results: PokemonNamedAPIResource[];
}

export interface PokemonNamedAPIResource {
  name: string;
  url: string;
}
