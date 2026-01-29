import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  username: string = '';
  password: string = '';
  role: string = '';
  secteurMilitaire: string = '';

  errorMessage: string = '';

  roles = [
  { value: 'COMMANDANT_UNITE', label: 'Commandant d’unité' },
  { value: 'COMPAGNIE', label: 'Commandant de compagnie' },
  { value: 'ARCHIVES', label: 'Bureau Fichier / Archives' },
  { value: 'ETAT_MAJOR', label: 'État-major (consultation)' }
];



  secteursMilitaires = [
    '1er Secteur militaire',
    '2e Secteur militaire',
    '3e Secteur militaire',
    '4e Secteur militaire',
    '5e Secteur militaire',
    '6e Secteur militaire',
    '7e Secteur militaire',
    '8e Secteur militaire',
    '9e Secteur militaire',
    '10e Secteur militaire'
  ];

  constructor(private router: Router) {}

  
  seConnecter() {

    if (!this.role) {
      alert('Veuillez choisir un rôle');
      return;
    }

    if (
      (this.role === 'COMMANDANT_UNITE' || this.role === 'COMPAGNIE')
      && !this.secteurMilitaire
    ) {
      alert('Veuillez choisir un secteur militaire');
      return;
    }

    if (this.role === 'COMMANDANT_UNITE') {
      this.router.navigate(
        ['/commandant-unite/dashboard'],
        { state: { role: this.role, secteurMilitaire: this.secteurMilitaire } }
      );
    }

    else if (this.role === 'COMPAGNIE') {
      this.router.navigate(
        ['/commandant-compagnie/dashboard'],
        { state: { role: this.role, secteurMilitaire: this.secteurMilitaire } }
      );
    }

    else if (this.role === 'ETAT_MAJOR') {
      this.router.navigate(
        ['/etat-major/dashboard'],
        { state: { role: this.role } }
      );
    }

  }

  
}
