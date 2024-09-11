import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-page-card',
  templateUrl: './home-page-card.component.html',
  styleUrl: './home-page-card.component.css'
})
export class HomePageCardComponent {
  @Input() imageSrc: string = '';
  @Input() buttonText: string = '';
  @Input() link: string = '/'

}
