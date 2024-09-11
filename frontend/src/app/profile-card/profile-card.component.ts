import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  @Input() link!: string;
  @Input() name!: string;
  @Input() role!: string;
  @Input() imageSrc?: string;
  @Input() content!: string;

  @Input() webLink?: string;
  @Input() linkedInLink: string = '/';
  @Input() xLink: string = '/';
  @Input() googleScholar: string = '/'


  constructor(private router: Router) { }

  openLink(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.warn('No link available')
    }
  }

  navigateToPage(url: string) {
    this.router.navigate([url]);
  }

}
