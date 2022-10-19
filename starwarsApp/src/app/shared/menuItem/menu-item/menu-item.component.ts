import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../../starwars/services/starwars.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  constructor(private starWarsService: StarwarsService) { }

  ngOnInit(): void {
  }

}
