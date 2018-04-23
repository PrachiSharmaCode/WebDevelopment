import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FoodTruckService} from '../../../../services/foodtruck.service.client';
import {ProjectUserService} from '../../../../services/projectuser.service.client';

@Component({
  selector: 'app-food-truck-list',
  templateUrl: './food-truck-list.component.html',
  styleUrls: ['./food-truck-list.component.css']
})
export class FoodTruckListComponent implements OnInit {

  user: any;
  uid: String;
  trucks: any[] = [];

  constructor(private router: Router, private foodtruckservice: FoodTruckService,
              private projectuserservice: ProjectUserService, private route: ActivatedRoute) {
  }

  addTruck() {
    this.router.navigate(['/owner', this.user._id, 'newTruck']);
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

    return this.foodtruckservice.findTruckForOwner(this.uid).subscribe(
      (trucks) => {
        this.trucks = trucks;
        console.log(this.trucks);
      }
    );
  }

}
