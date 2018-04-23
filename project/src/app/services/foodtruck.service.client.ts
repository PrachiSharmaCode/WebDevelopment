import {User} from '../model/user.model.client';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Page} from '../model/page.model.client';
import {environment} from '../../environments/environment';
import {Website} from '../model/website.model.client';

@Injectable()
export class FoodTruckService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  createTruckForOwner(truck, userId: String) {
    const url = this.baseUrl + '/foodapi/foodtruck/' + userId;
    return this.http.post(url, truck).map((response: Response) => {
      return response.json();
    });
  }

  deleteTruck(userId: String, truckId: String) {
    const url = this.baseUrl + '/foodapi/foodtruck/' + userId + '/trucks/' + truckId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }

  updateTruck(newTruck) {
    const url = this.baseUrl + '/foodapi/foodtruck/' + newTruck._id;
    return this.http.put(url, newTruck).map((response: Response) => {
      return response.json();
    });
  }


  findTruckForOwner(userId: String) {
    console.log('Inside client service');
    const url = this.baseUrl + '/foodapi/foodtruck/' + userId + '/trucks';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findTruckByName(name: String) {
    console.log('Inside client service');
    const url = this.baseUrl + '/foodapi/foodtruck/name/' + name;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }


  findTruckByCity(city: String) {
    const url = this.baseUrl + '/foodapi/foodtruck/city/' + city;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findTruckByPincode(pincode: String) {
    const url = this.baseUrl + '/foodapi/foodtruck/pin/' + pincode;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findTruckByLocation(location: String) {
    const url = this.baseUrl + '/foodapi/foodtruck/location/' + location;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findTruckByCusineType(ct: String) {
    const url = this.baseUrl + '/foodapi/foodtruck/ct/' + ct;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findTruckById(id: String) {
    const url = this.baseUrl + '/foodapi/foodtruck/' + id;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }
}

//
// findUserByCredentials(username, password) {
//   return this.http.get(this.baseUrl + '/projectapi/projectuser?username=' + username + '&password=' + password)
//     .map((response: Response) => {
//       return response.json();
//     });
// }
//
// findUserById(userId) {
//   return this.http.get(this.baseUrl + '/projectapi/projectuser/' + userId)
//     .map((response: Response) => {
//       return response.json();
//     });
// }
//
// updateUser(user) {
//   const url = this.baseUrl + '/projectapi/projectuser/' + user._id;
//   return this.http.put(url, user).map((response: Response) => {
//     return response.json();
//   });
// }

