import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HorseData } from '../shared/horse.model';

@Component({
  selector: 'app-race-horse-list',
  templateUrl: './race-horse-list.component.html',
  styleUrls: ['./race-horse-list.component.css']
})
export class RaceHorseListComponent implements OnInit {
  private raceId: number;
  public horseData: HorseData[];
  public money: number;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => {
        this.raceId = params.id;
      });
  }

  ngOnInit() {
    this.horseData = [];
    this.horseData.push({ "id": "1", "name": "Itallion Stallion", "jockeyName": "sharath", "raceWon": 3, "image": "image" });
    this.horseData.push({ "id": "2", "name": "Itallion Stallion", "jockeyName": "sharath", "raceWon": 3, "image": "image" });
    this.horseData.push({ "id": "3", "name": "Itallion Stallion", "jockeyName": "sharath", "raceWon": 3, "image": "image" });
    this.horseData.push({ "id": "4", "name": "Itallion Stallion", "jockeyName": "sharath", "raceWon": 3, "image": "image" });
  }

}
