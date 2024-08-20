import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  @Input() link: string = '/';
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() imageSrc: string = '';
  @Input() content: string = '';
  @Input() webLink: string = '/';

  constructor(private router: Router) {}

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  navigateToPage(url: string) {
    this.router.navigate([url]);
  }

}
