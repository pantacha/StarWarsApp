import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../starwars/services/starwars.service';
import { Film } from '../../starwars/interfaces/films.interfaces';
import { People } from '../../starwars/interfaces/people.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  txtItem: string = '';
  items: any[] = [];

  constructor(private starwarsService: StarwarsService) {
    if (localStorage.getItem('historial')) {
      this.items = JSON.parse(localStorage.getItem('historial')!);
    }
  }

  ngOnInit(): void {
  }

  findItems() {
    console.log(this.txtItem);
    this.starwarsService.searchFilms(this.txtItem).subscribe((items) => this.items = items.results);
    this.starwarsService.searchPeople(this.txtItem).subscribe((items) => this.items = items.results);

    this.txtItem = this.txtItem.trim();
    if (!this.items.includes(this.txtItem)) {
      this.items.unshift(this.txtItem);
      this.items = this.items.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this.items));
    }
  }

}
