import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Artisan } from '../../models/artisan';
import { ArtisanService } from '../../services/artisan.service';

@Component({
  selector: 'app-artisan-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './artisan-list.component.html',
  styleUrls: ['./artisan-list.component.scss'],
})
export class ArtisanListComponent implements OnInit {
  artisans: Artisan[] = [];
  filteredArtisans: Artisan[] = [];
  searchTerm = '';
  selectedCategory = 'Tous';

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe((data: Artisan[]) => {
      this.artisans = data;
      this.filteredArtisans = data;
    });
  }

  filterArtisans(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredArtisans = this.artisans.filter((artisan) => {
      const matchTerm =
        artisan.name.toLowerCase().includes(term) ||
        artisan.specialty.toLowerCase().includes(term) ||
        artisan.location.toLowerCase().includes(term);

      const matchCategory =
        this.selectedCategory === 'Tous' ||
        artisan.category === this.selectedCategory;

      return matchTerm && matchCategory;
    });
  }
}
