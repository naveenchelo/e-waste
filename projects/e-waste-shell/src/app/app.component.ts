import { Component } from '@angular/core';
import { SharedStylesService } from '../../../shared-styles/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'e-waste-shell';
  isDarkMode = false;

  constructor(private stylesService: SharedStylesService) {}

  ngOnInit(): void {
    this.isDarkMode = this.stylesService.getCurrentTheme() === 'dark';
  }

  toggleTheme(): void {
    this.stylesService.toggleTheme();
    this.isDarkMode = this.stylesService.getCurrentTheme() === 'dark';

    // Show toast notification
    this.stylesService.showToast(
      `Switched to ${this.isDarkMode ? 'dark' : 'light'} mode`,
      'success'
    );
  }
}
