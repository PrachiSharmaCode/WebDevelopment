import {Component, OnInit} from '@angular/core';
import {FoodTruckService} from '../../../../services/foodtruck.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectUserService} from '../../../../services/projectuser.service.client';

@Component({
  selector: 'app-edit-foodtruck',
  templateUrl: './edit-foodtruck.component.html',
  styleUrls: ['./edit-foodtruck.component.css']
})
export class EditFoodtruckComponent implements OnInit {

  tid: String;
  truck: any;
  uid: String;
  user: any;

  constructor(private router: Router, private foodtruckservice: FoodTruckService,
              private projectuserservice: ProjectUserService, private route: ActivatedRoute) {
  }

  updateTruck() {
    this.route.params.subscribe(params => {
      return this.foodtruckservice.updateTruck(this.truck).subscribe(
        (truck) => {
          this.truck = truck;
          this.router.navigate(['/owner', this.uid, 'trucks', this.tid]);
        }
      );
    });

    this.route.params.subscribe(params => {
      return this.projectuserservice.updateUser(this.user).subscribe(
        (user) => {
          this.user = user;
          this.router.navigate(['/owner', this.uid, 'trucks', this.tid]);
        }
      );
    });
  }

  deleteTrcuk() {
    this.route.params.subscribe(params => {
      return this.foodtruckservice.deleteTruck(this.uid, this.tid).subscribe(
        (truck) => {
          this.truck = truck;
          this.router.navigate(['/owner', this.uid, 'trucks']);
        }
      );
    });
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
      this.tid = params['truckid'];
      return this.foodtruckservice.findTruckById(this.tid).subscribe(
        (truck) => {
          this.truck = truck;
        }
      );
    });
  }

}
