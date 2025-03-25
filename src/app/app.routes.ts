import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisanListComponent } from './pages/artisan-list/artisan-list.component';
import { ArtisanDetailComponent } from './pages/artisan-detail/artisan-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent) },
    { path: '**', redirectTo: '' },
    { path: 'artisans', component: ArtisanListComponent },
    { path: 'artisan/:id', component: ArtisanDetailComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent },
    {
        path: 'artisan/:id',
        loadComponent: () =>
            import('./pages/artisan-detail/artisan-detail.component').then(m => m.ArtisanDetailComponent)
    },
    {
        path: 'artisan/:id',
        loadComponent: () => import('./pages/artisan-detail/artisan-detail.component').then(m => m.ArtisanDetailComponent)
    }
];
