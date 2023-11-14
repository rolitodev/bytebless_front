import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { ToggleThemeComponent } from "../shared/toggle-theme/toggle-theme.component";
@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: '../login/login.component.scss',
    imports: [CommonModule, SharedModule, ToggleThemeComponent]
})

export class RegisterComponent {

  public _form = inject(FormBuilder);

  public registerForm: FormGroup;

  public isLoading: boolean = false;

  public strengthLabels = ['Inútil', 'Débil', 'Normal', 'Fuerte', 'Segura'];

  constructor() {
    this.registerForm = this._form.group({
      name: [null, [Validators.required, Validators.minLength(1)]],
      last_name: [null, [Validators.required, Validators.minLength(1)]],
      email: [null, [Validators.required, Validators.minLength(1), Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      terms: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit(): void {

  }

}
