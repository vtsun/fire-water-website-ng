import { Component } from '@angular/core';

@Component({
  selector: 'app-project-participants',
  templateUrl: './project-participants.component.html',
  styleUrls: ['./project-participants.component.css']
})

export class ProjectParticipantsComponent {
  openLink(url: string): void {
    window.open(url, '_blank');
  }
}

