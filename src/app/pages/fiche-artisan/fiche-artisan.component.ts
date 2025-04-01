import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../models/artisan';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fiche-artisan',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './fiche-artisan.component.html',
  styleUrls: ['./fiche-artisan.component.scss']
})
export class FicheArtisanComponent {
  artisan!: Artisan;
  contact = {
    name: '',
    subject: '',
    message: ''
  };

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artisanService.getArtisanById(id).subscribe((data) => {
      if (data) {
        this.artisan = data;
      }
    });
  }

  onSubmit(): void {
    console.log('Formulaire de contact envoyé :', this.contact);
    alert(`Message envoyé à ${this.artisan.name} !`);
    this.contact = { name: '', subject: '', message: '' };
  }
}
