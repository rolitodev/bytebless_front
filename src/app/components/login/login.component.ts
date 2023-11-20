import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/modules/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToggleThemeComponent } from "../shared/toggle-theme/toggle-theme.component";
import { ThemeService } from '../../services/theme.service';
import { NotificationsService } from '../../services/notifications.service';

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
  public _notifications = inject(NotificationsService);

  public isLoading: boolean = false;
  public isSubmit: boolean = false;
  public showPassword: boolean = false;

  public loginForm: FormGroup;

  constructor() {
    this.loginForm = this._form.group({
      email: [null, [Validators.required, Validators.minLength(1), Validators.email]],
      password: [null, [Validators.required, Validators.minLength(1)]],
    });
  }

  // Función para cambiar el tema al hacer clic en algún botón.
  clickChangeTheme(): void {
    this._theme.changeTheme();
  }

  // Función para obtener el tipo de entrada del formulario (ya sea 'text' o 'password') dependiendo de si se quiere mostrar la contraseña o no.
  getInputType(): string {
    return this.showPassword ? 'text' : 'password';
  }

  // Función para alternar la visibilidad de la contraseña.
  toggleShowPassword() {
    this.showPassword = !this.showPassword;  // Cambia el valor de showPassword a su opuesto (true a false o viceversa).
    return;  // La función no devuelve nada explícitamente.
  }

  // Getter para obtener el formulario de inicio de sesión.
  get form() {
    return this.loginForm;
  }

  // Función para validar la entrada del formulario y devolver el estado ('danger', 'success' o 'basic').
  validateInput(item: string): string {
    if (this.isSubmit) {
      return this.form.controls[item].errors ? 'danger' : 'success';
    }
    return 'basic';
  }

  // Función que se ejecuta al enviar el formulario.
  onSubmit(): void {
    this.isSubmit = !this.isSubmit;  // Cambia el estado de envío del formulario.
    this.isLoading = true;  // Establece isLoading a true para mostrar algún indicador de carga.

    // Verifica si el formulario de inicio de sesión es inválido.
    if (this.loginForm.invalid) {
      this.isLoading = false;  // Establece isLoading a false ya que hubo un error y no se está cargando.
      this._notifications.show('warning', '¡Hey!', 'El formulario tiene campos sin llenar.');  // Muestra una notificación de advertencia.
      return;  // Sale de la función ya que no se puede proceder con un formulario inválido.
    }
  }

}