import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ important

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ RouterModule ici !
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
