import { Component, OnInit, DoCheck, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../models/artisan';
import { HttpClientModule } from '@angular/common/http';
import { ArtisanCardComponent } from '../../components/artisan-card/artisan-card.component';
import { Title, Meta } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ArtisanCardComponent],
  providers: [ArtisanService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {
  artisans: Artisan[] = [];
  filteredArtisans: Artisan[] = [];

  private appComponent = inject(AppComponent);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Accueil – Trouve Ton Artisan');
    this.metaService.updateTag({
      name: 'description',
      content: 'Trouvez facilement un artisan qualifié en Auvergne-Rhône-Alpes selon votre besoin.'
    });

    this.artisanService.getArtisans().subscribe({
      next: (data: Artisan[]) => {
        this.artisans = data.slice(0, 3);

        this.filteredArtisans = this.artisans;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des artisans ❌', error);
      }
    });
  }

  ngDoCheck(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    const term = this.appComponent.searchTerm.toLowerCase();
    this.filteredArtisans = this.artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(term) ||
      artisan.specialty.toLowerCase().includes(term) ||
      artisan.location.toLowerCase().includes(term)
    );
  }

  steps = [
    { number: 1, title: 'Choisir une catégorie', text: 'Sélectionnez un type d’artisanat dans le menu.' },
    { number: 2, title: 'Parcourir les artisans', text: 'Choisissez un artisan et consultez sa fiche.' },
    { number: 3, title: 'Le contacter', text: 'Utilisez le formulaire de contact de la fiche.' },
    { number: 4, title: 'Recevoir une réponse', text: 'L’artisan vous répond sous 48h.' }
  ];
  
}
