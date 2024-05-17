import { Component, OnInit } from '@angular/core';
import { FetchUserDataService } from './fetch-user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private fetchuserdata:FetchUserDataService) { }

  formFields:any[] = [];

  title = 'demo';
  ngOnInit(): void {
      this.fetchuserdata.getData().subscribe(data => { this.formFields = data})
  }
}
