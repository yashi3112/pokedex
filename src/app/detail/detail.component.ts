import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  pokemon: any;
  categories: string;
  constructor(private route: ActivatedRoute,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');

    this.pokemonService.getPokemonDetailById(id).subscribe(response => {
      this.pokemon = response;
      this.categories = response.types.map(type => {
        return type.type.name;
      }).join(", ");
      console.log(this.pokemon);
    });
  }

}
