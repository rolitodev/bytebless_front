import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NbEvaIconsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    const validateStorageTheme = localStorage.getItem('theme') ? true : false;
    if (!validateStorageTheme) {
      localStorage.setItem('theme', 'default');
    }
  }

}