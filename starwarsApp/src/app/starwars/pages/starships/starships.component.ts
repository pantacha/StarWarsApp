import { Component, OnInit } from '@angular/core';
import { StarShips } from '../../interfaces/Starships.interfaces';
import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships: StarShips[] = [];

  constructor(private starWarsService: StarwarsService) { }

  ngOnInit(): void {
    this.starWarsService.getStarShips().subscribe((elems) => {
      this.starships = elems.results;
    })
  }

}
