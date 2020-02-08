import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwService {
  apiKey1 = '3019f52001baa34a5261c2095dadce76';
  apiKey2 = '86c2089fc31e56afacfc8ecd5e851152';
  url1: string;
  url2: string;


  constructor(private http: HttpClient) {
    this.url1 = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.url2 = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }
  getWeather(location: string) {
    return this.http.get(this.url1 + location  + '&APPID=' + this.apiKey1 + '&units=imperial');
  }

  getWeatherForecast(location: string) {
    return this.http.get(this.url2 + location + '&APPID=' + this.apiKey2 + '&units=imperial');
  }
}

export interface WeatherRequest {
  City: string;
}
