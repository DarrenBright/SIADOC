import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FicheRenseignementService } from '../services/fiche-renseignement.service';

@Component({
  selector: 'app-liste-fiches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-fiches.html',
  styleUrls: ['./liste-fiches.scss']
})
export class ListeFiches implements OnInit {

  fiches: any[] = [];

  constructor(
    private router: Router,
    private ficheService: FicheRenseignementService
  ) {}

  ngOnInit(): void {
    this.chargerFiches();
  }

  chargerFiches(): void {
    this.ficheService.getToutesLesFiches().subscribe({
      next: (data) => {
        console.log('📋 Fiches reçues depuis le backend :', data);
        this.fiches = data;
      },
      error: (err) => {
        console.error('❌ Erreur chargement fiches', err);
      }
    });
  }

  voirFiche(fiche: any): void {
    this.router.navigate(
      ['/dashboard/fiche-renseignement'],
      {
        state: {
          mode: 'consultation',
          ficheId: fiche.id,
          section: 'apercu'
        }
      }
    );
  }
}
