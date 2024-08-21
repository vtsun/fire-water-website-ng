import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('scrollContainer', { static: true }) scrollContainer?: ElementRef;

  scrollRight() {
    const container = this.scrollContainer?.nativeElement;
    const cardWidth = container.querySelector('app-home-page-card').offsetWidth;
    container.scrollBy({ left: cardWidth + 48, behavior: 'smooth' });
  }

}
