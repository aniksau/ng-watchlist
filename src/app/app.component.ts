import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { SymbolSearchComponent } from "./components/symbol-search/symbol-search.component";
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './components/about/about.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatToolbarModule, SymbolSearchComponent, MatMenuModule, MatButtonModule, AboutComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-watchList';
}
