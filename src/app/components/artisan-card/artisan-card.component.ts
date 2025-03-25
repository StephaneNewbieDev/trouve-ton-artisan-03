import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artisan-card',                  // Balise personnalisée pour utiliser ce composant
  standalone: true,                              // Composant autonome (sans NgModule)
  imports: [CommonModule],                       // Importe les directives communes d’Angular (ngIf, ngFor, etc.)
  templateUrl: './artisan-card.component.html',  // Lien vers le fichier HTML associé
  styleUrls: ['./artisan-card.component.scss']   // Lien vers les styles SCSS associés
})
export class ArtisanCardComponent {
  @Input() artisan: any;                         // Permet de passer les données d'un artisan depuis un composant parent
}
