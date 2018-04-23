import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FoodTruckService} from '../../../../services/foodtruck.service.client';
import {ProjectUserService} from '../../../../services/projectuser.service.client';
import {ReviewService} from '../../../../services/review.service.client';

@Component({
  selector: 'app-food-truck-profile',
  templateUrl: './food-truck-profile.component.html',
  styleUrls: ['./food-truck-profile.component.css']
})
export class FoodTruckProfileComponent implements OnInit {

  uid: String;
  user: any;
  tid: String;
  truck: any;
  review: any;
  lat: Number = 47.62762804436545;
  lng: Number = -122.33695328235626;

  constructor(private router: Router, private foodtruckservice: FoodTruckService,
              private projectuserservice: ProjectUserService, private route: ActivatedRoute,
              private reviewservice: ReviewService) {
  }

  SignOut() {
    this.router.navigate(['/project']);
  }


  editTruck() {
    this.router.navigate(['/owner', this.uid, 'trucks', this.tid, 'edit']);
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

    this.route.params.subscribe(params => {
      this.tid = params['truckid'];
      return this.reviewservice.getReviewFortruk(this.tid).subscribe(
        (review) => {
          this.review = review;
          console.log(review);
        }
      );
    });
  }

}
