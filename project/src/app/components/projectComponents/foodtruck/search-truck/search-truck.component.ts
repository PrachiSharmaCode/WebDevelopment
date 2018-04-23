import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, CanActivate} from '@angular/router';
import {ProjectUserService} from '../../../../services/projectuser.service.client';
import {FoodTruckService} from '../../../../services/foodtruck.service.client';

@Component({
  selector: 'app-search-truck',
  templateUrl: './search-truck.component.html',
  styleUrls: ['./search-truck.component.css']
})
export class SearchTruckComponent implements OnInit {

  user: any;
  uid: any;
  name: String;
  location: String;
  city: String;
  pincode: String;
  cusineType: String;

  constructor(private router: Router, private route: ActivatedRoute, private projectuserservice: ProjectUserService,
              private foodtruckservice: FoodTruckService) {
  }

  SignOut() {
    this.router.navigate(['/project']);
  }

  searchTruck() {
    if (this.name == null || this.name === ' ') {
      this.name = 'none';
    }
    if (this.location == null || this.location === ' ') {
      this.location = 'none';
    }
    if (this.city == null || this.city === ' ') {
      this.city = 'none';
    }
    if (this.cusineType == null || this.cusineType === ' ') {
      this.cusineType = 'none';
    }
    if (this.pincode == null || this.pincode === ' ') {
      this.pincode = 'none';
    }
    this.router.navigate(['/search', this.uid, 'result', this.name,
      this.location, this.city, this.cusineType, this.pincode]);
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
