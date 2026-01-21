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
    { value: 'RECRUTEMENT', label: 'Bureau Recrutement' },
    { value: 'COMPAGNIE', label: 'Compagnie / Unité administrative' },
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

  onLogin() {
    // Validation de base
    if (!this.username || !this.password || !this.role) {
      this.errorMessage = 'Veuillez renseigner tous les champs obligatoires.';
      return;
    }

    // Validation spécifique COMPAGNIE
    if (this.role === 'COMPAGNIE' && !this.secteurMilitaire) {
      this.errorMessage = 'Veuillez sélectionner le secteur militaire.';
      return;
    }

    // Connexion simulée réussie
    this.errorMessage = '';

    // Redirection vers Dashboard avec contexte
    this.router.navigate(['/dashboard'], {
      state: {
        role: this.role,
        secteurMilitaire: this.secteurMilitaire
      }
    });
  }
}
