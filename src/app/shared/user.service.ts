import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {UserModel} from "./user-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedin = false;
  private _user: UserModel;

  constructor(private _router: Router) {

  }

  login(email: string, password: string): boolean {
    if (email === 'angular' && password === 'angular') {
      this._user = new UserModel(UserModel.exampleUser);
      this.isLoggedin = true;
      this._router.navigate(['/user']);
    }
    console.log('Be vagyunke logolva:' ,this.isLoggedin);
    return false;
  }

  register(param?: UserModel){
    if (param){
      this._user = new UserModel(param);
    }else{
      this._user = new UserModel(UserModel.exampleUser)
    }
    this.isLoggedin = true;
    this._router.navigate(['/user']);
    console.log('registralunk  ',this.isLoggedin);
  }


  logout() {
    this._user = new UserModel();
    this.isLoggedin = false;
    this
      ._router
      .navigate(['/home']);
    console.log('Be vagyunke logolva:' , this.isLoggedin);
  }
}

