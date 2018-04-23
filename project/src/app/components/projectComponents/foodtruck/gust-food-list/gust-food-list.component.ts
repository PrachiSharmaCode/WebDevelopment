import {Component, OnInit} from '@angular/core';
import {FoodTruckService} from '../../../../services/foodtruck.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectUserService} from '../../../../services/projectuser.service.client';

@Component({
  selector: 'app-gust-food-list',
  templateUrl: './gust-food-list.component.html',
  styleUrls: ['./gust-food-list.component.css']
})
export class GustFoodListComponent implements OnInit {

  name: String;
  trucks: any[] = [];

  constructor(private router: Router, private foodtruckservice: FoodTruckService,
              private projectuserservice: ProjectUserService, private route: ActivatedRoute) {
  }

  notaUser(){
    alert('Please logIn or Register to view Food Truck');
  }

  signIn() {
    this.router.navigate(['/signIn']);
  }

  ngOnInit() {
    document.body.style.backgroundImage = 'url(\'../../../../../assets/foodbgimg.png\')';
    this.route.params.subscribe(params => {
      this.name = params['name'];
      return this.foodtruckservice.findTruckByName(this.name).subscribe(
        (truck) => {
          this.trucks.push(truck);
          console.log(this.trucks);
        }
      );
    });
  }

}
