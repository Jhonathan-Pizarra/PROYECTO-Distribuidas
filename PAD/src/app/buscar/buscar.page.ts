import { Component, OnInit } from '@angular/core';
import { SpotyService } from '../services/spoty.service';
import * as firebase from 'firebase';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  artistas: any[] = [];
  iduser:any;

  // Readable Address
  address: string;
  // Location coordinates
  latitude: number;
  longitude: number;
  accuracy: number;
  pais:string;

  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  
  constructor(private spotify: SpotyService,private geolocation: Geolocation,private nativeGeocoder: NativeGeocoder,private menu: MenuController) { 
    var user = firebase.auth().currentUser.uid;
    this.iduser=user;
    console.log(user);
    this.getGeolocation();
    this.menu.enable(true, 'first');
    this.menu.enable(false, 'custom');
  }

  ngOnInit() {
  }

  buscar(termino){
    console.log(termino);
    this.spotify.getArtista( termino.value,this.iduser ,this.latitude,this.longitude,this.address,this.pais)
          .subscribe( (data: any) => {
            console.log(data);
            this.artistas = data;
           
          });
  }


  //Get current coordinates of device
  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.accuracy = resp.coords.accuracy;

      this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);

    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
    });
  }

  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.address = this.generateAddress(result[0]);
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }

  //Return Comma saperated address
  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    var cont = 1;
    for (let val in obj) {
      cont++;
      if (obj[val].length)
        if(cont==10){
          //alert(obj[val]);
          this.pais=obj[val];
          //this.pais=obj[val];
        }

        
        address += obj[val] + ', ';
    }
    return address.slice(0, -2);
  }


 

  

}
