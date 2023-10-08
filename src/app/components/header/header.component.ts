import { Component, OnInit } from '@angular/core';
import { ImageAssets } from '../../../shared/app-managers/assets-manager';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  logoImg: string = new ImageAssets().logoImg;

  // manager

}
