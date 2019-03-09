import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from './shared/firebase-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Demo';
  constructor() {

  }
  ngOnInit() {
  }
  // initializeApp(config);
}
