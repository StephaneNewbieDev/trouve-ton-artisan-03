import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  nom = '';
  email = '';
  message = '';

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Contact – Trouve Ton Artisan');
    this.meta.updateTag({
      name: 'description',
      content: 'Contactez-nous via ce formulaire. Nous répondrons dans les meilleurs délais.'
    });
  }

  envoyer() {
    alert(`Message envoyé par ${this.nom} (${this.email}) ✅`);
    this.nom = '';
    this.email = '';
    this.message = '';
  }
}
