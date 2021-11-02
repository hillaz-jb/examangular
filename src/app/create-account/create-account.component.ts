import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../models/user";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  userFormGroup!: FormGroup;
  user: IUser = {
    name: '',
    email: '',
    nickname: '',
    wallet: 0,
  };
  constructor() { }

  ngOnInit(): void {
    this.userFormGroup = new FormGroup(
      {
        _email: new FormControl(
          this.user.email, [
            Validators.required
          ]
        ),
        _nickname: new FormControl(
          this.user.nickname, [
            Validators.required, Validators.minLength(4)
          ]
        ),
      }
    );
  }

  get nickname(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_nickname');
  }

  get email(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_email');
  }

  onSubmit(): void {
      this.user.nickname = this.nickname.value;
      this.user.email = this.email.value;
      console.log(this.user)
  }

}
