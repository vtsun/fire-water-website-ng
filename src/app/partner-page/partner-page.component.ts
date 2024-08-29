import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partner-page',
  // standalone: true,
  // imports: [],
  templateUrl: './partner-page.component.html',
  styleUrl: './partner-page.component.css'
})
export class PartnerPageComponent {
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() roleDesc: string = '';
  @Input() bio: string = '';
  @Input() pub1: string = '';
  @Input() pub2: string = '';
  @Input() pub3: string = '';
  @Input() addInfo: string = '';

  @Input() webLink: string = '/';
  @Input() linkedInLink: string = '/';
  @Input() xLink: string = '/';
  @Input() googleScholar: string = '/';

  @Input() imageSrc: string = '';

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
