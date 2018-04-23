import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  constructor(private router: Router) {
  }

  signIn() {
    this.router.navigate(['/signIn']);
  }

  goToAdminRegistration() {
    this.router.navigate(['/signUp/owner']);
  }


  goToUserRegistration() {
    this.router.navigate(['/signUp']);
  }

  ngOnInit() {
    document.body.style.backgroundImage = 'url(\'../../../../../assets/foodbgimg.png\')';
  }

}
