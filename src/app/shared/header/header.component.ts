import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() search = new EventEmitter<string>();

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.search.emit(target.value);
  }
  

  onSearchChange(value: string | null): void {
    this.search.emit(value?.toLowerCase() || '');
  }
}
