import { Component, OnInit } from '@angular/core';

import { PartnerService } from '../services/partner.service';
import { Partner } from '../models/partner';

@Component({
  selector: 'app-project-partners',
  // standalone: true,
  // imports: [],
  templateUrl: './project-partners.component.html',
  styleUrl: './project-partners.component.css'
})

export class ProjectPartnersComponent implements OnInit {
  partnersList: Partner[] = [];

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
      this.loadPartnersList();
  }

  loadPartnersList(): void {
    this.partnerService.getPartners().subscribe(
      (data: Partner[]) => {
        this.partnersList = data;
      },
      (error) => {
        console.error('Error fetching partners:', error);
      }
    );
  }



}
