import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OwService } from '../ow.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup = this.formBuilder.group({
  city: [''], countryCd: ['']
});
  public weatherData: any;
  public weatherForecastData: any;

  constructor(private formBuilder: FormBuilder, private owService: OwService) {
  }

  ngOnInit() {
  }

  onClick() {
    this.owService
      .getWeather(this.weatherSearchForm.controls.city.value)
      .subscribe(data => this.weatherData = data);

    this.owService
      .getWeatherForecast(this.weatherSearchForm.controls.city.value + ',' +  this.weatherSearchForm.controls.countryCd.value)
      .subscribe(data => this.weatherForecastData = data);
    console.log(this.weatherForecastData);

  }
}

