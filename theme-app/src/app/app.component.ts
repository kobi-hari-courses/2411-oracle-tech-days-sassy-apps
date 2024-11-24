import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Theme, ThemeName, THEMES } from './theme';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from "./components/title/title.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  host: {
    '[style.--primary]': 'primary()',
    '[style.--accent]': 'accent()',
    '[style.--dark]': 'darkValue()',
  }
})
export class AppComponent {
  readonly themes = THEMES;

  readonly selectedTheme = signal<ThemeName>('Default');
  readonly theme = computed(() => this.themes.find(([name]) => name === this.selectedTheme())![1]);

  readonly primary = computed(() => this.theme().primary);
  readonly accent = computed(() => this.theme().accent);
  readonly darkValue = computed(() => this.theme().isDark ? 1 : 0);

  constructor() {
    effect(() => {
      console.log('Theme changed:', this.selectedTheme());
      console.log('Theme:', this.theme());  
    })
  }
}
