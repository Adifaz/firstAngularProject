import { Component, OnInit } from '@angular/core';
import {appSettings} from '../../models/app-settings';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productData:any = [];
  constructor(
  ) { }

  ngOnInit() {
    this.productData = appSettings.productList;
  }

}
