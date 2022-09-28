import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'joinUs', 'email', 'phoneNumber', 'transportationMethod', 'haveCar', 'pickupOthers', 'howMany',];
  dataSource: any[];
  numberOf: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(
      'https://lozan-farm-default-rtdb.firebaseio.com/users.json').subscribe(r => {
        this.dataSource = Object.values(r)
        this.numberOf = {
          declined: Object.values(r)?.filter((i) => i?.joinUs == 'false').length,
          accepted: Object.values(r)?.filter((i) => i?.joinUs == 'true').length
        }
        console.log('submittedRequest', this.dataSource?.filter((i) => i?.joinUs == 'true'))
      }
      )

  }

}
