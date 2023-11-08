import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbThemeService, NbToggleModule } from '@nebular/theme';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, NbLayoutModule, NbToggleModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  public themeService = inject(NbThemeService);

  public browserTheme: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false;
  public userTheme: boolean = Boolean(localStorage.getItem('theme'));

  ngOnInit(): void {
    if (this.browserTheme != Boolean(localStorage.getItem('theme'))) {
      alert('Actualmente tienes configurado el modo oscuro en tu navegador, ¿aquí también lo quieres cambiar?');
      return;
    }
    const validateStorageTheme = localStorage.getItem('theme') ? true : false;
    if (!validateStorageTheme) {
      localStorage.setItem('theme', 'default');
    }
    this.changeTheme();
  }

  clickChangeTheme(): void {
    this.userTheme = !this.userTheme;
    this.changeTheme();
  }

  changeTheme(): void {
    const browserTheme = this.userTheme ? 'dark' : 'default';
    localStorage.setItem('theme', browserTheme);
    this.themeService.changeTheme(browserTheme);
  }


}
