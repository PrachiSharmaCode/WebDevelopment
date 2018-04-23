import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-home-page',
  templateUrl: './project-home-page.component.html',
  styleUrls: ['./project-home-page.component.css']
})
export class ProjectHomePageComponent implements OnInit {

  uid: '00000';
  name: String;

  searchTruck() {
    this.router.navigate(['/search', this.name, 'guest']);
  }

  constructor(private router: Router) {
  }

  signUp() {
    this.router.navigate(['/select']);
  }

  signIn() {
    this.router.navigate(['/signIn']);
  }


  ngOnInit() {
  }

}
