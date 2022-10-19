import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film, RESTStarWarsFilmsResponse } from '../interfaces/films.interfaces';
import { RESTStarWarsPeopleResponse } from '../interfaces/people.interfaces';
import { RESTStarWarsStarShipsResponse } from '../interfaces/Starships.interfaces';
import { Vehicle } from '../interfaces/Vehicles.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private baseURl: string = 'https://swapi.dev/api';
  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
  }

  searchFilms(item: string): Observable<RESTStarWarsFilmsResponse> {

    item = item.trim();
    if(!this._historial.includes(item)){
      this._historial.unshift(item);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const url = `${this.baseURl}/films/?search=${item}`
    return this.http.get<RESTStarWarsFilmsResponse>(url);

  }

  searchPeople(item: string): Observable<RESTStarWarsPeopleResponse> {

    const url = `${this.baseURl}/people/?search=${item}`
    return this.http.get<RESTStarWarsPeopleResponse>(url);

  }

  searchPlanets(item: string): Observable<any> {

    const url = `${this.baseURl}/planets/?search=${item}`
    return this.http.get(url);

  }

  searchSpecies(item: string): Observable<any> {

    const url = `${this.baseURl}/species/?search=${item}`
    return this.http.get(url);

  }

  searchStarships(item: string): Observable<any> {

    const url = `${this.baseURl}/starships/?search=${item}`
    return this.http.get(url);

  }

  searchVehicles(item: string): Observable<Vehicle[]> {

    const url = `${this.baseURl}/vehicles/?search=${item}`
    return this.http.get<Vehicle[]>(url);

  }

  getFilms(): Observable<RESTStarWarsFilmsResponse> {
    return this.http.get<RESTStarWarsFilmsResponse>(`${this.baseURl}/films/`);
  }

  getFilmByCode(id: string): Observable<Film> {
    return this.http.get<Film>(`${this.baseURl}/films/${id}`);
  }

  getPeople(): Observable<RESTStarWarsPeopleResponse> {
    return this.http.get<RESTStarWarsPeopleResponse>(`${this.baseURl}/people/?count=10`);
  }

  getStarShips(): Observable<RESTStarWarsStarShipsResponse> {
    return this.http.get<RESTStarWarsStarShipsResponse>(`${this.baseURl}/starships/?count=10`);
  }

}
