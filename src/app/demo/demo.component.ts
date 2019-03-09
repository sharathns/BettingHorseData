import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from 'src/app/shared/firebase-service.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private firebaseService: FirebaseServiceService) {

  }
  ngOnInit() {
    console.log("init called");
    this.firebaseService.eventListeners();
  }

}
