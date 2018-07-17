import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { DataPage } from '../data/data';
import Arr from '../../app/Array'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Name;
  Surname;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
LogIn(){
  if (this.Name !=undefined && this.Surname !=undefined ) {
    Arr[0] = this.Name;
    Arr[1] = this.Surname;
    this.navCtrl.push(DataPage);
    
  }
  else{ 
     let alert = this.alertCtrl.create({
    title: 'Alert ',
    message: 'please enter Name, Surname and Password to LogIn',
    buttons: [
      {
        text: 'Ok',
        role: '0k',
        handler: () => {
          console.log('Cancel clicked');
        }
      }, 
    ]
  });
  alert.present();
  
}
}

  


}

