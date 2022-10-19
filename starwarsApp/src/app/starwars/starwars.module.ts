import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FilmsComponent } from './pages/films/films.component';
import { PeopleComponent } from './pages/people/people.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { SpeciesComponent } from './pages/species/species.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { SharedModule } from '../shared/shared.module';
import { FilmComponent } from './pages/film/film.component';

@NgModule({
    declarations: [
    FilmsComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    FilmComponent
  ],
    imports: [ 
      CommonModule,
      RouterModule,
      SharedModule
    ],
    exports: [],
    providers: [],
})
export class StarwarsModule {}