import {Component, OnInit} from '@angular/core';
import {ProjectUserService} from '../../../../services/projectuser.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {FoodTruckService} from '../../../../services/foodtruck.service.client';
import {AgmCoreModule} from '@agm/core';

@Component({
  selector: 'app-new-food-truck',
  templateUrl: './new-food-truck.component.html',
  styleUrls: ['./new-food-truck.component.css']
})
export class NewFoodTruckComponent implements OnInit {

  user: any;
  uid: String;
  truck: any;
  name: String;
  location: String;
  from: String;
  to: String;
  city: String;
  pincode: String;
  cusineType: String;
  lat: Number = 47.62762804436545;
  lng: Number = -122.33695328235626;
  locationChoosen = false;


  constructor(private router: Router, private foodtruckservice: FoodTruckService,
              private projectuserservice: ProjectUserService, private route: ActivatedRoute) {
  }

  SignOut() {
    this.router.navigate(['/project']);
  }


  ChooseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    console.log(this.lat);
    console.log(this.lng);
    this.locationChoosen = true;
  }

  registerFoodTruck() {

    const newTruck = {
      name: this.name,
      location: this.location,
      to: this.to,
      from: this.from,
      city: this.city,
      pincode: this.pincode,
      cusineType: this.cusineType,
      lat: this.lat,
      lng: this.lng
    };

    return this.foodtruckservice.createTruckForOwner(newTruck, this.uid).subscribe(
      (truck) => {
        this.truck = truck;
        if (truck) {
          console.log(truck);
          this.router.navigate(['/owner', this.uid, 'trucks']);
        }
      }
    );
  }

  ngOnInit() {
    document.body.style.backgroundImage = 'url(\'../../../../../assets/foodbgimg.png\')';

    this.route.params.subscribe(params => {
      this.uid = params['userId'];
      return this.projectuserservice.findUserById(this.uid).subscribe(
        (user) => {
          this.user = user;
        }
      );
    });
  }
}


