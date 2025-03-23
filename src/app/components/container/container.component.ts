import { Component } from '@angular/core';
import { WatchListComponent } from '../watch-list/watch-list.component';
import { SymbolDetailsComponent } from '../symbol-details/symbol-details.component';

@Component({
  selector: 'app-container',
  imports: [WatchListComponent, SymbolDetailsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

}
