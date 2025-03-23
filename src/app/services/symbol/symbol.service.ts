import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS, API_URL, } from '../../constants/apiEndpoints';
import { Observable } from 'rxjs';
import { SymbolList } from '../../models/symbol-list';
import { CompanyProfile } from '../../models/company-profile';
import { SymbolQuote } from '../../models/symbol-quote';
import { CompanyNewsList } from '../../models/company-news';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SymbolService {

  constructor(private http: HttpClient) { }

  getSymbolsByQuery(query: string): Observable<SymbolList> {
    return this.http.get<SymbolList>(this.getEndpoint(API_ENDPOINTS.SYMBOL_LOOKUP)?.replace('{QUERY}', query));
  }

  getSymbolQuote(symbol: string) {
    return this.http.get<SymbolQuote>(this.getEndpoint(API_ENDPOINTS.SYMBOL_QUOTE)?.replace('{SYMBOL}', symbol));
  }

  getCompanyProfile(symbol: string) {
    return this.http.get<CompanyProfile>(this.getEndpoint(API_ENDPOINTS.COMPANY_PROFILE)?.replace('{SYMBOL}', symbol));
  }

  getCompanyNews(symbol: string) {
    const date = new DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd') || '';
    return this.http.get<CompanyNewsList>(this.getEndpoint(API_ENDPOINTS.COMPANY_NEWS)?.replace('{SYMBOL}', symbol)
      .replace('{FROM_DATE}', '2024-01-01')
      .replace('{TO_DATE}', date)
    );
  }

  getEndpoint(endpoint: string): string {
    return `${API_URL}${endpoint}`;
  }

}
