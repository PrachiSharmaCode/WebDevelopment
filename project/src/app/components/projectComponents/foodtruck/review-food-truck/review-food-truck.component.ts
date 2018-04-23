import {Component, OnInit} from '@angular/core';
import {FoodTruckService} from '../../../../services/foodtruck.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectUserService} from '../../../../services/projectuser.service.client';
import {ReviewService} from '../../../../services/review.service.client';

@Component({
  selector: 'app-review-food-truck',
  templateUrl: './review-food-truck.component.html',
  styleUrls: ['./review-food-truck.component.css']
})
export class ReviewFoodTruckComponent implements OnInit {

  uid: String;
  user: any;
  tid: String;
  truck: any;
  review: String;

  constructor(private router: Router, private foodtruckservice: FoodTruckService,
              private projectuserservice: ProjectUserService, private route: ActivatedRoute,
              private reviewservice: ReviewService) {
  }

  SignOut() {
    this.router.navigate(['/project']);
  }

  addReview() {

    const newReview = {
      userId: this.uid,
      truckId: this.tid,
      review: this.review
    };

    return this.reviewservice.createReviewForTrcuk(this.tid, this.uid, newReview).subscribe(
      (review) => {
        this.review = review;
        if (review) {
          this.router.navigate(['/search', this.uid, 'trucks', this.tid]);
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
