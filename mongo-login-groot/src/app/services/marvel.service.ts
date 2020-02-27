import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/Character';
import { Groot } from '../models/Groot';
import { Greeting } from '../models/Greeting';
import { environment } from '../../environments/environment';

// @Injectable is a decorator that marks a class as a target for
// dependency injection. The class needs to have the HttpClient
// object injected into it. This class is a candidate for dependency
// injection because it is declared inside the AppModule's providers array.
@Injectable({
  providedIn: 'root'
})

export class MarvelService {

  baseUrl: string;
  public_key: string;
  hash: string;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {

    this.baseUrl = environment.baseUrl;
    this.public_key = environment.marvelKey;
    this.hash = environment.marvelHash;
  }

  // addCharacter(char :Character) :Observable<Character> {
  //   return this.http.post<Character>("http://localhost:8080/GrootApp/addCharacters.do", char, {headers: this.headers});
  // }

  // getGroot= function() {
  //   console.log(this.title);
  // }
  ts: any = Math.floor(Date.now() / 1000);
  // new Date().getTime() 
  // new Date().valueOf()
  // NASA
  //   let url = "https://api.nasa.gov/planetary/apod?api_key=mF6DQEqY3WtCubgab5P2otQQ6bP1b8nY24VmiJw0";
  // STAR WARS 
  //  xhttp.open("GET", "https://swapi.co/api/people/" + randomNum + "/?format=json", true);
  /*  char.name;   char.height;   char.eye_color; */

  getCharacters = function () {
    return this.http.get(`http://gateway.marvel.com/v1/public/characters?apikey=${this.public_key}&ts=${this.ts}&hash=${this.hash}`);
  }

  getPhotos(albumId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    // return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);

  }

  getAlbums = function () {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
    // return this.http.get('https://swapi.co/api/people');
  }

  getStarWars = function () {
    return this.http.get('https://swapi.co/api/people/1/?format=json');
  }

  ///GrootApp/getGroot.do
  getAllGroot(): Observable<Groot[]> {
    // return this.http.get<Groot[]>("http://localhost:8080/GrootApp/getAllGroot.do");
    return this.http.get<Groot[]>(`http://${this.baseUrl}/api/groot`);
  }

  addGroot(g: Groot): Observable<Groot> {
    // return this.http.post<Groot>("http://localhost:8080/GrootApp/addGroot.do", poke, {headers: this.headers}); 
    return this.http.post<Groot>(`http://${this.baseUrl}/api/groot`, g, { headers: this.headers });
    // return this.http.post<Groot>("http://localhost:8080/api/groot", g, {headers: this.headers});
  }
}
