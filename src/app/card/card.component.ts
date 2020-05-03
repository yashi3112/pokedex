import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pokemon:any;
  image:string;
  id:number;
  abitlitiesList:any[]=[];

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonDetail(this.pokemon.url).subscribe(response => {
      console.log(response);
      this.image=response.sprites.front_default;
     // this.abitlitiesList=response.abilities.ability.name;
     this.id=response.id;
    });
  }

}
