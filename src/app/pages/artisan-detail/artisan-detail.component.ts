import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../models/artisan';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artisan-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './artisan-detail.component.html',
  styleUrls: ['./artisan-detail.component.scss']
})
export class ArtisanDetailComponent implements OnInit {
  artisan?: Artisan;

  // Champs du formulaire
  nom = '';
  sujet = '';
  message = '';

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artisanService.getArtisans().subscribe(data => {
      this.artisan = data.find(a => a.id === id);
    });
  }

  envoyerMessage(): void {
    console.log('Message envoyé !', {
      nom: this.nom,
      sujet: this.sujet,
      message: this.message,
      destinataire: this.artisan?.nom
    });

    alert('Message envoyé à ' + this.artisan?.nom + ' ✅');

    // Réinitialisation du formulaire
    this.nom = '';
    this.sujet = '';
    this.message = '';
  }
}
