import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-toggle-theme',
  standalone: true,
  imports: [CommonModule, NbIconModule, NbButtonModule],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.css'
})

export class ToggleThemeComponent {

  public _theme = inject(ThemeService);

  public iconTheme: string = "moon-outline";

  changeTheme(): void {
    this._theme.changeTheme();
    this.iconTheme = localStorage.getItem('theme') === 'dark' ? 'sun-outline' : 'moon-outline';
  }

}
