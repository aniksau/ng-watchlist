import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SymbolResultList } from '../../models/symbol-list';
import { MatIconModule } from '@angular/material/icon';
import { SymbolService } from '../../services/symbol/symbol.service';
import { Store } from '@ngrx/store';
import { addToWatchList } from '../../store/watch-list.action';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-symbol-search',
  imports: [MatInputModule, ReactiveFormsModule, MatAutocompleteModule, MatIconModule],
  templateUrl: './symbol-search.component.html',
  styleUrl: './symbol-search.component.scss'
})
export class SymbolSearchComponent implements OnInit {
  symbolInput = new FormControl('');
  suggestionList: SymbolResultList[] = [];
  constructor(private symbolService: SymbolService, private store: Store) { }

  ngOnInit(): void {
    this.getAutoCompleteList();
  }

  getAutoCompleteList() {
    this.symbolInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) => this.symbolService.getSymbolsByQuery(query as string))
    )
      .subscribe((response) => {
        this.suggestionList = response.result;
      });
  }

  getOptionText(option: SymbolResultList) {
    return option?.symbol || '';
  }

  onOptionSelect(selectedOption: SymbolResultList): void {
    this.store.dispatch(addToWatchList({ itemToAdd: selectedOption }));
    this.symbolInput.setValue('');
  }
}
