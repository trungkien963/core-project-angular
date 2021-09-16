import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private router: Router
  ) {
    console.log('voo nef')
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((val) => {
        console.log('val:', val)
        // Hide loading indicator
      });

    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((val) => {
        // Show loading indicator
        console.log('val:', val)
      });

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationError))
      .subscribe((val) => {
        // Hide loading indicator

        // Present error to user
        console.log('err:', val)
      });
  }
}
