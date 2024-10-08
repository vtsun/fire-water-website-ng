import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-participants',
  templateUrl: './project-participants.component.html',
  styleUrls: ['./project-participants.component.css']
})

export class ProjectParticipantsComponent {
  constructor(private router: Router) {}

  openLink(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.warn('No link available');
    }
  }

  navigateToPage(url: string) {
    this.router.navigate([url]);
  }
}

