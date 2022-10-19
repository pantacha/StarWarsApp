import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Film } from '../../interfaces/films.interfaces';
import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film!: Film;

  constructor(private activatedRoute: ActivatedRoute, 
              private starWarsService: StarwarsService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
                              .pipe(
                                switchMap(({id}) => this.starWarsService.getFilmByCode(id)),
                                tap((resp) => console.log(resp))
                              )
                              .subscribe((item) => {
                                this.film = item;
                              });
  }

  goBack(){
    this.router.navigate(['/films']);
  }

}
