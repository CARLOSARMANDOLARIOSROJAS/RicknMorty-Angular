import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RicknmortyService } from '../../services/ricknmorty.service';
import { SearchService } from '../../services/search.service';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit, OnDestroy {

  characters: any[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';
  private searchSubscription: Subscription = new Subscription();

  constructor(
    private characterService: RicknmortyService,
    private searchService: SearchService
  ) { }


  ngOnInit(): void {
    // Cargar todos los personajes inicialmente
    this.loadAllCharacters();

    // Suscribirse a los cambios de búsqueda
    this.searchSubscription = this.searchService.searchTerm$.subscribe(searchTerm => {
      if (searchTerm.trim()) {
        this.searchCharacters(searchTerm);
      } else {
        this.loadAllCharacters();
      }
    });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  private loadAllCharacters(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.characterService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.results;
        this.isLoading = false;
        console.log('Personajes cargados:', this.characters);
      },
      error: (error: any) => {
        console.error('Error fetching characters:', error);
        this.errorMessage = 'Error al cargar los personajes';
        this.isLoading = false;
      }
    });
  }

  private searchCharacters(searchTerm: string): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.characterService.searchCharacters(searchTerm).subscribe({
      next: (data) => {
        this.characters = data.results || [];
        this.isLoading = false;
        console.log('Búsqueda completada:', this.characters);
      },
      error: (error: any) => {
        console.error('Error searching characters:', error);
        this.characters = [];
        this.errorMessage = `No se encontraron personajes con el nombre "${searchTerm}"`;
        this.isLoading = false;
      }
    });
  }
}
