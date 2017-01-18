import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProximiProviders} from '../../providers/proximi';
declare const proximiio:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    
    public PROXIMIIO_TOKEN: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6Ijc5YTc4Y2U0OGVkNjQ5ZTY5MTMxNWY4MDI5NzdmYzZiIiwidHlwZSI6ImFwcGxpY2F0aW9uIiwiYXBwbGljYXRpb25faWQiOiI1NzJiNGRmYS00MzBmLTQ2MjctYjIxZS1kMGRjYWE3ZjViNGMifQ.ooQkGecz-t6phn-Q-MjJQDdRiNgGXgo7ZhwyBRm9heQ";

    ionViewDidEnter() {
        proximiio.setToken(this.PROXIMIIO_TOKEN);
        proximiio.setDebugOutput(true, null, null);
        proximiio.setGeofenceTriggerCallback((enter, geofence) =>this.setGeofenceTriggerCallback(enter, geofence) );
        proximiio.setPositionChangeCallback((coords) =>this.setPositionChangeCallback(coords) );
    }
    setGeofenceTriggerCallback(enter, geofence) {
        console.log(enter,geofence);
    }
    setPositionChangeCallback(coords) {
        alert(coords)
    }
}
