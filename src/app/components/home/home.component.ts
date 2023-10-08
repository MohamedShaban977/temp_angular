import { Component } from '@angular/core';
import { StoreData } from 'src/app/View-Models/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  storInfo: StoreData;
  isShowImage: boolean = true;

  constructor() {
    this.storInfo = new StoreData('ITI Store', 'https://picsum.photos/seed/picsum/350/200', ['cairo', 'Alex', 'Qena']);
  }

  toggleImage() {
    this.isShowImage = !this.isShowImage;
  }
}
