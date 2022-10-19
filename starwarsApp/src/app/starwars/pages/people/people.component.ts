import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
import { People } from '../../interfaces/people.interfaces';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: People[] = [];

  constructor(private starWarsService: StarwarsService) { }

  ngOnInit(): void {
    this.starWarsService.getPeople().subscribe((elems) => {
      this.people = elems.results;
    })
  }

}
