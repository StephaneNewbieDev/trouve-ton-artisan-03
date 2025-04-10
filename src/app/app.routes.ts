import { Routes } from '@angular/router';
import { ArtisanListComponent } from './pages/artisan-list/artisan-list.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component')
      .then(c => c.HomeComponent),
  },
  {
    path: 'artisans',
    loadComponent: () => import('./pages/artisans/artisans.component')
      .then(m => m.ArtisansComponent)
  },
  {
    path: 'artisan/:id',
    loadComponent: () => import('./pages/fiche-artisan/fiche-artisan.component')
      .then(m => m.FicheArtisanComponent),
  },
  {
  path: './trouve-ton-artisan-03/artisans',
component: ArtisanListComponent,
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component')
      .then(c => c.ContactComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component')
      .then(c => c.AboutComponent)
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./pages/mentions-legales/mentions-legales.component')
      .then(c => c.MentionsLegalesComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/page-not-found/page-not-found.component')
      .then(c => c.PageNotFoundComponent)
  }
];

