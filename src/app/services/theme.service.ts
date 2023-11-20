import { Injectable, inject } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {

  public themeService = inject(NbThemeService);

  public userTheme: boolean = false;

  constructor() { }

  changeTheme(): void {
    this.userTheme = !this.userTheme;
    const browserTheme = this.userTheme ? 'dark' : 'default';
    localStorage.setItem('theme', browserTheme!);
    this.themeService.changeTheme(browserTheme!);
  }

}
