import { Component, Input, OnInit } from '@angular/core';

import { PartnerService } from '../services/partner.service';
import { Partner } from '../models/partner';

@Component({
  selector: 'app-partner-page-dbver',
  // standalone: true,
  // imports: [],
  templateUrl: './partner-page-dbver.component.html',
  styleUrl: './partner-page-dbver.component.css'
})
export class PartnerPageDbverComponent implements OnInit {
  partner: Partner | null = null;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.getPartnerDetails();
  }

  getPartnerDetails(): void {
    const partnerId = 1; // Replace with dynamic id later
    this.partnerService.getPartnerById(partnerId).subscribe(
      (data: Partner) => {
        this.partner = data;
      },
      (error: any) => {
        console.error('Error fetching partner details:', error);
      }
    );

  }

  openLink(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
