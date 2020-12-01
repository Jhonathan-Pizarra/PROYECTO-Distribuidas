import { Component } from '@angular/core';
import { SpotyService } from '../services/spoty.service';
import { MenuController } from '@ionic/angular';
import * as firebase from 'firebase';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nuevascaniconiones:any[]=[];
  constructor(private spotify: SpotyService,private menu: MenuController) {
    this.menu.enable(true, 'first');
    this.menu.enable(false, 'custom');
    this.spotify.getNewRelease().subscribe((data:any)=>{
      console.log(data);
      this.nuevascaniconiones=data;
    });
  
  
   }


}
