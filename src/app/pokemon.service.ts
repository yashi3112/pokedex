import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpService : HttpClient ) { }

  getAllPokemon():Observable<any>
  {
   return this.httpService.get('https://pokeapi.co/api/v2/pokemon?limit=20');
  }

  getPokemonDetail(url:string):Observable<any>
  {
    return this.httpService.get(url);
  }
}
