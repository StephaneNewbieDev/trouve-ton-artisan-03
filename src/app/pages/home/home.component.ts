import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../models/artisan';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ArtisanService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  artisans: Artisan[] = [];

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe({
      next: (data: Artisan[]) => {
        console.log('Artisans chargés ✅', data);
        this.artisans = data.slice(0, 3);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des artisans ❌', error);
      }
    });
  }
}
