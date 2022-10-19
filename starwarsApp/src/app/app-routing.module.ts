import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmsComponent } from './starwars/pages/films/films.component';
import { PeopleComponent } from './starwars/pages/people/people.component';
import { PlanetsComponent } from './starwars/pages/planets/planets.component';
import { SpeciesComponent } from './starwars/pages/species/species.component';
import { StarshipsComponent } from './starwars/pages/starships/starships.component';
import { VehiclesComponent } from './starwars/pages/vehicles/vehicles.component';
import { FilmComponent } from './starwars/pages/film/film.component';

const routes: Routes = [
    {
        path: '',
        component: FilmsComponent,
        pathMatch: 'full'
    },
    {
        path: 'films/:id',
        component: FilmComponent,
    },
    {
        path: 'people',
        component: PeopleComponent
    },
    {
        path: 'planets',
        component: PlanetsComponent
    },
    {
        path: 'species',
        component: SpeciesComponent
    },
    {
        path: 'starships',
        component: StarshipsComponent
    },
    {
        path: 'vehicles',
        component: VehiclesComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}