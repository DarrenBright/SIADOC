import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fiche-renseignement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fiche-renseignement.html',
  styleUrls: ['./fiche-renseignement.scss']
})
export class FicheRenseignement {

  activeSection: string = 'controle';

  setSection(section: string): void {
    this.activeSection = section;
  }

  fiche = {
    // SECTION 1 — CONTRÔLE
    photo: null as File | null,
    numeroFiche: '',
    agentControle: '',
    gradeAgent: '',
    uniteService: '',
    dateControle: '',

    // SECTION 2 — IDENTITÉ DU CANDIDAT
    nom: '',
    prenoms: '',
    sexe: '',
    dateNaissance: '',
    lieuNaissance: '',
    arrondissementNaissance: '',
    departementNaissance: '',
    regionNaissance: '',
    nationalite: '',

    // DESCRIPTION PHYSIQUE
    taille: '',
    poids: '',
    teint: '',
    couleurYeux: '',
    couleurCheveux: '',
    signesParticuliers: '',

    // SECTION 3 — FILIATION
    nomPere: '',
    professionPere: '',
    domicilePere: '',

    nomMere: '',
    professionMere: '',
    domicileMere: '',

    // SECTION 6 — PIÈCES D’IDENTITÉ
    numeroPiece: '',
    dateDelivrancePiece: '',
    dateExpirationPiece: '',
    lieuDelivrancePiece: '',
    typePieceIdentite: '',
    scanPieceIdentite: null as File | null,

    // SECTION 7 — ADRESSE & CONTACTS
    adresseComplete: '',
    quartier: '',
    commune: '',
    ville: '',
    departementResidence: '',
    regionResidence: '',

    telephonePrincipal: '',
    telephoneSecondaire: '',
    email: '',
    personneContactUrgence: '',
    telephoneUrgence: '',

    // SECTION — RENSEIGNEMENTS COMPLÉMENTAIRES
    specialiteRecrutement: '',

    diplomePresente: '',
    serieDiplomePresente: '',
    sessionDiplomePresente: '',

    niveauInstruction: '',

    diplomePlusEleve: '',
    serieDiplomePlusEleve: '',
    optionDiplomePlusEleve: '',
    dateDiplomePlusEleve: '',

    formationsComplementaires: '',

    lieuDeclaration: '',
    dateDeclaration: '',
    signatureCandidat: ''
  };

  enregistrerFiche() {
    if (!this.validerFiche()) {
      return;
    }

    console.log('Fiche validée et enregistrée', this.fiche);
    alert('Fiche enregistrée avec succès ✅');
  }


  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.fiche.photo = input.files[0];
    }
  }

  onPieceIdentiteSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.fiche.scanPieceIdentite = input.files[0];
  }
}


  imprimerFiche(): void {

    window.print();
  }

  ficheValide(): boolean {
    return (
      this.fiche.agentControle.trim() !== '' &&
      this.fiche.dateControle.trim() !== '' &&

      this.fiche.nom.trim() !== '' &&
      this.fiche.prenoms.trim() !== '' &&
      this.fiche.sexe.trim() !== '' &&
      this.fiche.dateNaissance.trim() !== '' &&

      this.fiche.numeroPiece.trim() !== ''
    );
  }

  sauvegarderFiche() {
    localStorage.setItem('ficheRenseignement', JSON.stringify(this.fiche));
    alert('Fiche sauvegardée avec succès');
  }

  ngOnInit() {
    const data = localStorage.getItem('ficheRenseignement');
    if (data) {
      this.fiche = JSON.parse(data);
    }
  }

  validerFiche(): boolean {
  // SECTION CONTRÔLE
    if (!this.fiche.agentControle) {
      alert('Veuillez renseigner le nom de l’agent contrôleur');
      this.activeSection = 'controle';
      return false;
    }

    if (!this.fiche.dateControle) {
      alert('Veuillez renseigner la date du contrôle');
      this.activeSection = 'controle';
      return false;
    }

    // SECTION IDENTITÉ
    if (!this.fiche.nom) {
      alert('Veuillez renseigner le nom du candidat');
      this.activeSection = 'identite';
      return false;
    }

    if (!this.fiche.prenoms) {
      alert('Veuillez renseigner les prénoms du candidat');
      this.activeSection = 'identite';
      return false;
    }

    if (!this.fiche.sexe) {
      alert('Veuillez sélectionner le sexe');
      this.activeSection = 'identite';
      return false;
    }

    if (!this.fiche.dateNaissance) {
      alert('Veuillez renseigner la date de naissance');
      this.activeSection = 'identite';
      return false;
    }

    // SECTION PIÈCE D’IDENTITÉ
    if (!this.fiche.typePieceIdentite) {
      alert('Veuillez sélectionner le type de pièce d’identité');
      this.activeSection = 'identite-piece';
      return false;
    }

    if (!this.fiche.numeroPiece) {
      alert('Veuillez renseigner le numéro de la pièce d’identité');
      this.activeSection = 'identite-piece';
      return false;
    }

    if (!this.fiche.dateDelivrancePiece) {
      alert('Veuillez renseigner la date de délivrance de la pièce');
      this.activeSection = 'identite-piece';
      return false;
    }


    return true;
  }


}
