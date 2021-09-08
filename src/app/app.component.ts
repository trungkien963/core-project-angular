import { Component } from '@angular/core';
import { LanguageService } from 'src/core/services/language.service';
import { ThemeService } from 'src/core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'core-project';

  constructor(public language: LanguageService, private themeService: ThemeService) {
  }

  switchLang(lang: string) {
    this.language.switchLang(lang);
  }
}
