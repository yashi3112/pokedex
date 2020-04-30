import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokemons:any[]=[];
  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe(response => {
      console.log(response);
      this.pokemons=response.results;
      
    });
  }

}
