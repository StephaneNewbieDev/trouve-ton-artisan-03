import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../models/artisan';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-artisan-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule], // ✅
  providers: [ArtisanService],
  templateUrl: './artisan-list.component.html',
  styleUrls: ['./artisan-list.component.scss']
})
export class ArtisanListComponent implements OnInit {
  artisans: Artisan[] = [];
  searchTerm: string = '';

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(data => {
      this.artisans = data;
    });
  }

  get filteredArtisans(): Artisan[] {
    return this.artisans.filter(artisan =>
      artisan.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      artisan.specialite.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      artisan.ville.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
