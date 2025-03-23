import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'watchlist', pathMatch: 'full'
    },
    {
        path: 'watchlist', component: ContainerComponent
    }
];
