import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RicknmortyService } from '../../services/ricknmorty.service';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})

export class CharacterCardComponent {
  @Input() character: any;
  @Input() isFavorite: boolean = false;

  constructor(private ricknmortyService: RicknmortyService) { }

  toggleFavorite(): void {
    this.ricknmortyService.toggleFavorite(this.character.id).subscribe();
    this.isFavorite = !this.isFavorite;
  }
}
