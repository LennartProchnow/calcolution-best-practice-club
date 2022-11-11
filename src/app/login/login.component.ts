import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';
//import {ValidateLatin1} from '@validators/latin1.validator.directive';


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
      console.log("der User ist schon eingeloggt");
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.returnUrl =
      //this.route.snapshot.queryParams.redirect_uri ||
      '/detail-view';
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

    //if (this.loginForm?.invalid) {
    //  return;
    //}

    //this.progressSpinnerService.showSpinner();
    //this.loading = true;
    console.log(this.f?.username.value);
    console.log(this.f?.password.value);
    this.authenticationService.login(this.f?.username.value, this.f?.password.value)
      //.pipe(first())
      .subscribe(
         () => {
          console.log("zurück routen");
          this.router.navigate([this.returnUrl]);
        },
        (error: string) => {
          this.error = error;
          this.loading = false;
        }
      );
  }


}
