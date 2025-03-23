import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { SymbolService } from '../../services/symbol/symbol.service';
import { CompanyProfile } from '../../models/company-profile';
import { SymbolQuote } from '../../models/symbol-quote';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SymbolNewsComponent } from '../symbol-news/symbol-news.component';

@Component({
  selector: 'app-symbol-details',
  imports: [MatCardModule, MatIconModule, MatTabsModule, CommonModule, MatListModule, NgxSkeletonLoaderModule, SymbolNewsComponent],
  templateUrl: './symbol-details.component.html',
  styleUrl: './symbol-details.component.scss'
})
export class SymbolDetailsComponent implements OnInit {
  companyProfile = {} as CompanyProfile;
  symbolQuote = {} as SymbolQuote;
  selectedSymbol = '';
  isCompanyProfileLoaded = true;
  isQuotesLoaded = true;

  constructor(private symbolService: SymbolService, private router: Router, activatedRoute: ActivatedRoute) {
    this.selectedSymbol = activatedRoute.snapshot.queryParams['symbol'];
  }

  ngOnInit(): void {
    this.getSymbolQuotes();
    this.getCompanyProfile();

    this.router.events.subscribe(
      data => {
        this.companyProfile = {} as CompanyProfile;
        this.symbolQuote = {} as SymbolQuote;
        if (data instanceof ActivationEnd) {
          this.selectedSymbol = data.snapshot.queryParams['symbol'];
          this.getSymbolQuotes();
          this.getCompanyProfile();
        }
      }
    )
  }

  getCompanyProfile(): void {
    this.isCompanyProfileLoaded = false;
    this.symbolService.getCompanyProfile(this.selectedSymbol).subscribe(
      response => {
        this.companyProfile = response;
        this.isCompanyProfileLoaded = true;
      }
    );
  }

  getSymbolQuotes(): void {
    this.isQuotesLoaded = false;
    this.symbolService.getSymbolQuote(this.selectedSymbol).subscribe(
      (response) => {
        this.symbolQuote = response;
        this.isQuotesLoaded = true;
      }
    );
  }
}
