import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FoodTruckService} from '../../../../services/foodtruck.service.client';
import {ProjectUserService} from '../../../../services/projectuser.service.client';
import {Website} from '../../../../model/website.model.client';
import {Widget} from '../../../../model/widget.model.client';

@Component({
  selector: 'app-food-truck-result',
  templateUrl: './food-truck-result.component.html',
  styleUrls: ['./food-truck-result.component.css']
})
export class FoodTruckResultComponent implements OnInit {

  user: any;
  uid: any;
  name: String;
  location: String;
  city: String;
  pincode: String;
  cusineType: String;
  trucks: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private projectuserservice: ProjectUserService,
              private foodtruckservice: FoodTruckService) {
  }

  SignOut() {
    this.router.navigate(['/project']);
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

    this.route.params.subscribe(params => {
      this.name = params['name'];
      return this.foodtruckservice.findTruckByName(this.name).subscribe(
        (truck) => {
          this.trucks.push(truck);
          console.log(this.trucks);
        }
      );
    });

    this.route.params.subscribe(params => {
      this.city = params['city'];
      return this.foodtruckservice.findTruckByCity(this.city).subscribe(
        (truck) => {
          this.trucks.push(truck);
          console.log(this.trucks);
        }
      );
    });

    this.route.params.subscribe(params => {
      this.pincode = params['pincode'];
      return this.foodtruckservice.findTruckByPincode(this.pincode).subscribe(
        (truck) => {
          this.trucks.push(truck);
          console.log(this.trucks);
        }
      );
    });

    this.route.params.subscribe(params => {
      this.location = params['location'];
      return this.foodtruckservice.findTruckByLocation(this.location).subscribe(
        (truck) => {
          this.trucks.push(truck);
          console.log(this.trucks);
        }
      );
    });

    this.route.params.subscribe(params => {
      this.cusineType = params['cusineType'];
      return this.foodtruckservice.findTruckByCusineType(this.cusineType).subscribe(
        (truck) => {
          this.trucks.push(truck);
          console.log(this.trucks);
        }
      );
    });
  }


}

