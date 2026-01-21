import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-dossier',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creer-dossier.html',
  styleUrls: ['./creer-dossier.scss']
})
export class CreerDossier {

  dossier = {
    nom: '',
    prenom: '',
    dateNaissance: '',
    lieuNaissance: '',
    sexe: '',
    nationalite: '',
    situationMatrimoniale: ''
  };

  errorMessage = '';

  constructor(private router: Router) {}

  creerDossier() {
    if (!this.dossier.nom || !this.dossier.prenom || !this.dossier.dateNaissance) {
      this.errorMessage = 'Veuillez remplir les champs obligatoires.';
      return;
    }

    console.log('Dossier créé (simulation)', this.dossier);

    this.router.navigate(['/dashboard']);
  }
}
