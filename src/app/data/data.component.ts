import { Component, OnInit } from '@angular/core';
// import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';

// import * as L from 'leaflet';
// declare const ee: any;

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  // private map: any;
  // private user: SocialUser | null = null;
  // private loggedIn: boolean = false;

  // constructor(private authService: SocialAuthService) { }

  // ngOnInit(): void {
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.loggedIn = (user != null);
  //     console.log('Authentication successful: ', user);
  //     this.initEarthEngine();
  //   });
  // }

  // private initEarthEngine() {
  //   if (!this.loggedIn) {
  //     console.log('User not logged in, attempting to authenticate with Google...');
  //     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   } else {
  //     console.log('Initializing Google Earth Engine with authenticated user');
  //     ee.initialize(null, null, () => {
  //       console.log('Google Earth Engine initialized');
  //       this.initMap();
  //     }, (err : Error) => {
  //       console.error('Failed to initialize Google Earth Engine', err);
  //     });

  //   }
  // }

  // private initMap() {
  //   // Initialize the map
  //   this.map = L.map('map').setView([36.002333, -78.945806], 10);
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '© OpenStreetMap contributors'
  //   }).addTo(this.map);

  //   this.addEarthEngineLayer();
  // }

  // private addEarthEngineLayer() {
  //   const dataset = ee.ImageCollection('USFS/GTAC/MTBS/annual_burn_severity_mosaics/v1')
  //     .filterDate('2001-01-01', '2001-12-31');
  //   const visualization = {
  //     bands: ['Severity'],
  //     min: 0,
  //     max: 6,
  //     palette: ['000000', '006400', '7fffd4', 'ffff00', 'ff0000', '7fff00', 'ffffff']
  //   };

  //   const eeLayer = (eeObject: any, visParams: any, name: string) => {
  //     eeObject.getMap(visParams, (mapInfo: any) => {
  //       const tileUrl = mapInfo.tile_fetcher.url_format;
  //       L.tileLayer(tileUrl, {attribution: 'Google Earth Engine'}).addTo(this.map);
  //     });
  //   };

  //   eeLayer(dataset, visualization, 'Burn Severity 2001');
  // }


}