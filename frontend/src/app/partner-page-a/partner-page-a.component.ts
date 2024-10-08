import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-page-a',
  templateUrl: './partner-page-a.component.html',
  styleUrls: ['./partner-page-a.component.css']
})
export class PartnerPageAComponent {
  constructor(private router: Router) { }

  openLink(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.warn('No link available');
    }
  }

}
