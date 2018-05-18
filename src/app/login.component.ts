import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  templateUrl: `app/lofinform.component.html`,
  styles: [`
    input.ng-invalid {border-left: 8px solid orangered;}
    input.ng-valid{border-left: 8px solid greenyellow;}
  `]
})
export class LoginComponent {
  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  onSubmit() {
    console.log(this.userForm.value);
  }
}
