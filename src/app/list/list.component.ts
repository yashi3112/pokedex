import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  activeHeading: string;
  headings: string[] = [
    'Find Pokemons',
    'Explore Pokemons',
    'Catch Pokemons'
  ];

  pokemons: any[] = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe(response => {
      console.log(response);
      this.pokemons = response.results;
    });

    this.startHeadingChange();
  }

  startHeadingChange() {
    let activeIndex = 0;
    this.activeHeading = this.headings[activeIndex];
    // RxJS Ability.
    interval(7000).subscribe(resp => {
      this.headings.length > activeIndex ? activeIndex++ : activeIndex = 0;
      this.activeHeading = this.headings[activeIndex];
    });
  }

}
