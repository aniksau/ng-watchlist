import { Component, Input, OnInit } from '@angular/core';
import { SymbolService } from '../../services/symbol/symbol.service';
import { CompanyNewsList } from '../../models/company-news';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-symbol-news',
  imports: [MatListModule, MatButtonModule],
  templateUrl: './symbol-news.component.html',
  styleUrl: './symbol-news.component.scss'
})
export class SymbolNewsComponent implements OnInit {

  @Input() symbol = '';

  companyNewsList: CompanyNewsList = [];

  constructor(private symbolService: SymbolService) { }

  ngOnInit(): void {
    this.symbolService.getCompanyNews(this.symbol).subscribe(
      (response) => this.companyNewsList = response
    );
  }

}
