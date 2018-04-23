import {Component, OnInit} from '@angular/core';
import {FoodTruckService} from '../../../../services/foodtruck.service.client';
import {ProjectUserService} from '../../../../services/projectuser.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {ReviewService} from '../../../../services/review.service.client';

@Component({
  selector: 'app-food-truck-detail',
  templateUrl: './food-truck-detail.component.html',
  styleUrls: ['./food-truck-detail.component.css']
})
export class FoodTruckDetailComponent implements OnInit {

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

  reviewTruck() {
    this.router.navigate(['/search', this.uid, 'trucks', this.tid, 'review']);
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
