import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm?: FormGroup;
  loading = false;
  submitted = false;
  returnUrl?: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.userValue) {
      console.log("User is already logged in");
      this.router.navigate(['/dashboard/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.returnUrl = '/dashboard';
  }

  /**
   * Helper method for faster development
   *
   * @returns the form control
   */
  get f(): { [key: string]: AbstractControl } | undefined {
    return this.loginForm?.controls;
  }

  /**
   * Handling the login on submitting the form
   */
  login(): void {
    this.submitted = true;
    this.authenticationService.login(this.f?.username.value, this.f?.password.value)
      .subscribe(
         () => {
          console.log('route back to url');
          this.router.navigate([this.returnUrl]);
        },
        (error: string) => {
          this.error = error;
          this.loading = false;
        }
      );
  }


}
