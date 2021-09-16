import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/core/services/language.service';
import { RouterService } from 'src/core/services/router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'core-project';

  constructor(
    public language: LanguageService,
    private router: Router,
    private routerService: RouterService
  ) { }

  switchLang(lang: string) {
    this.language.switchLang(lang);
  }

  gotoPage() {
    this.router.navigate(['/dashboard/contct'])
  }

}
