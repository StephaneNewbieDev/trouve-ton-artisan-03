import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanService } from '../../services/artisan.service';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-artisans',
  standalone: true,
  imports: [CommonModule, RouterModule, NgFor, FormsModule],
  providers: [ArtisanService],
  templateUrl: './artisans.component.html',
  styleUrl: './artisans.component.scss',
})
export class ArtisansComponent implements OnInit {
  artisans: any[] = [];
  filteredArtisans: any[] = [];
  searchText: string = '';
  selectedCategory: string = '';

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(data => {
      this.artisans = data;
      this.filteredArtisans = data;
    });
  }

  filterArtisans() {
    const search = this.searchText.toLowerCase();
    this.filteredArtisans = this.artisans.filter(artisan => {
      const matchesCategory = !this.selectedCategory || artisan.category === this.selectedCategory;
      const matchesSearch =
        artisan.name.toLowerCase().includes(search) ||
        artisan.specialty.toLowerCase().includes(search) ||
        artisan.location.toLowerCase().includes(search);
      return matchesCategory && matchesSearch;
    });
  }
}
