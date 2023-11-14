import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/modules/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToggleThemeComponent } from "../shared/toggle-theme/toggle-theme.component";
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [CommonModule, SharedModule, ToggleThemeComponent]
})

export class LoginComponent {

  public _form = inject(FormBuilder);
  public _theme = inject(ThemeService);

  public isLoading: boolean = false;
  public showPassword: boolean = false;

  public loginForm: FormGroup;

  constructor() {
    this.loginForm = this._form.group({
      email: [null, [Validators.required, Validators.minLength(1), Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  clickChangeTheme(): void {
    this._theme.changeTheme();
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    return;
  }


}
