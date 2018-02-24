import {User} from '../model/user.model.client';
import {Injectable} from '@angular/core';
import {Website} from '../model/website.model.client';


@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice', 'alice', 'alice@mail.com', 'Alice', 'Wonder'),
    new User('234', 'bob', 'bob', 'alice@mail.com', 'Bob', 'Marley'),
    new User('345', 'charly', 'charly', 'alice@mail.com', 'Charly', 'Garcia'),
    new User('456', 'jannunzi', 'jannunzi', 'alice@mail.com', 'Jose', 'Annunzi')
  ];

  // createUser(user: User) {
  //   this.users.push(new User(user._id , user.username, user.password, user.email, user.firstName, user.lastName));
  // }

  createUser(user: User) {

    const new_user = {
      _id: (new Date()).getTime() + '',
      username: user.username,
      password: user.password,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    };

    this.users.push(new_user);
  }

  findUserByCredential(username: String, password: String) {
    return this.users.find(function (user) {
      return user.username === username && user.password === password;
    });
  }

  findUserById(userId: String) {
    return this.users.find(function (user) {
      return user._id === userId;
    });
  }

  findUserByUsername(username: String) {
    return this.users.find(function (user) {
      return user.username === username;
    });
  }

  updateUser(userId: String, user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
        return this.users[i];
      }
    }
  }

}
