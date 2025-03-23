import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { loadWatchList, removeFromWatchList } from '../../store/watch-list.action';
import { getWatchList } from '../../store/watch-list.selector';
import { SymbolResultList } from '../../models/symbol-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { getRandomColor } from '../../utils/functions';

@Component({
  selector: 'app-watch-list',
  imports: [MatListModule, MatDividerModule, MatChipsModule, MatIconModule, MatButtonModule, NgxSkeletonLoaderModule],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss'
})
export class WatchListComponent implements OnInit {
  watchListItems: SymbolResultList[] = [];

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(loadWatchList());
    this.store.select(getWatchList).subscribe(
      (response: any) => {
        this.watchListItems = response?.list || [];
      }
    );
  }

  onSymbolClick(item: SymbolResultList): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { symbol: item.symbol }
    })
  }

  onDeleteSymbol(item: SymbolResultList): void {
    this.store.dispatch(removeFromWatchList({ targetItem: item }));
  }

  get getColor() {
    return getRandomColor();
  }
}
