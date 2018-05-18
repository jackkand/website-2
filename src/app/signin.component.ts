import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'my-sign',
  templateUrl: `app/signin.component.html`,
  styles: [`
    input.ng-invalid {border-left: 8px solid orangered;}
    input.ng-valid{border-left: 8px solid greenyellow;}
  `]
})
export class SigninComponent {
  userForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    sex: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phone: new FormControl(null, Validators.pattern('^[1-9][0-9]{9}$')),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{5}$'))
    })
  });
  onSubmit() {
    console.log(this.userForm.value);
  }
}
