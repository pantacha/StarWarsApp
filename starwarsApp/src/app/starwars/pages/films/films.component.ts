import { Component, Input, OnInit } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
import { Film } from '../../interfaces/films.interfaces';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];

  constructor(private starWarsService: StarwarsService) { }

  ngOnInit(): void {
    this.starWarsService.getFilms().subscribe((elems) => {
      this.films = elems.results;
      console.log(this.films);
    })
  }
  
}
