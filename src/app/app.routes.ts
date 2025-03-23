import { Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'watchlist', pathMatch: 'full'
    },
    {
        path: 'watchlist', component: ContainerComponent
    }
];
