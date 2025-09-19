import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string = '';

  constructor(private searchService: SearchService) { }

  onSearch(event: Event) {
    event.preventDefault();
    console.log('Buscando:', this.searchTerm);
    this.searchService.updateSearchTerm(this.searchTerm);
  }

  clearSearch() {
    this.searchTerm = '';
    this.searchService.updateSearchTerm('');
  }
}
