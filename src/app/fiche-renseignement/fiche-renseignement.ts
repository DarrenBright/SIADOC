import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FicheRenseignementService } from '../services/fiche-renseignement.service';


@Component({
  selector: 'app-fiche-renseignement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fiche-renseignement.html',
  styleUrls: ['./fiche-renseignement.scss']
})
export class FicheRenseignement implements OnInit {

  // 🔹 Navigation / affichage
  activeSection: string = 'controle';
  mode: 'edition' | 'consultation' = 'edition';
  ficheId: number | null = null;

  constructor(private ficheService: FicheRenseignementService) {
    const navigation = history.state;

    if (navigation?.mode === 'consultation') {
      this.mode = 'consultation';
      this.ficheId = navigation.ficheId;
      this.activeSection = 'apercu';
      this.chargerFiche();
    }
  }


  ngOnInit(): void {
    const data = localStorage.getItem('ficheRenseignement');
    if (data) {
      this.fiche = JSON.parse(data);
    }
  }

  setSection(section: string): void {
    this.activeSection = section;
  }

  // 🔹 Données fiche
  fiche = {
    photo: null as File | null,
    numeroFiche: '',
    agentControle: '',
    gradeAgent: '',
    uniteService: '',
    dateControle: '',

    nom: '',
    prenoms: '',
    sexe: '',
    dateNaissance: '',
    lieuNaissance: '',
    arrondissementNaissance: '',
    departementNaissance: '',
    regionNaissance: '',
    nationalite: '',

    taille: '',
    poids: '',
    teint: '',
    couleurYeux: '',
    couleurCheveux: '',
    signesParticuliers: '',

    nomPere: '',
    professionPere: '',
    domicilePere: '',

    nomMere: '',
    professionMere: '',
    domicileMere: '',

    numeroPiece: '',
    dateDelivrancePiece: '',
    dateExpirationPiece: '',
    lieuDelivrancePiece: '',
    typePieceIdentite: '',
    scanPieceIdentite: null as File | null,

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

  // 🔹 Actions
  enregistrerFiche() {
    if (this.mode === 'consultation') {
      return; // sécurité
    }

    if (!this.validerFiche()) {
      return;
    }

    this.ficheService.enregistrerFiche(this.fiche).subscribe({
      next: () => {
        alert('Fiche enregistrée avec succès ✅');
      },
      error: () => {
        alert('Erreur lors de l’enregistrement ❌');
      }
    });
  }




  imprimerFiche(): void {
    window.print();
  }

  sauvegarderFiche(): void {
    localStorage.setItem('ficheRenseignement', JSON.stringify(this.fiche));
    alert('Fiche sauvegardée avec succès');
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.fiche.photo = input.files[0];
    }
  }

  onPieceIdentiteSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.fiche.scanPieceIdentite = input.files[0];
    }
  }

  // 🔹 Validation
  validerFiche(): boolean {

    if (!this.fiche.agentControle) {
      alert('Veuillez renseigner l’agent contrôleur');
      this.activeSection = 'controle';
      return false;
    }

    if (!this.fiche.dateControle) {
      alert('Veuillez renseigner la date du contrôle');
      this.activeSection = 'controle';
      return false;
    }

    if (!this.fiche.nom || !this.fiche.prenoms || !this.fiche.sexe || !this.fiche.dateNaissance) {
      alert('Veuillez compléter l’identité du candidat');
      this.activeSection = 'identite';
      return false;
    }

    if (!this.fiche.typePieceIdentite || !this.fiche.numeroPiece) {
      alert('Veuillez compléter la pièce d’identité');
      this.activeSection = 'identite-piece';
      return false;
    }

    return true;
  }

  chargerFiche() {
    if (!this.ficheId) return;

    this.ficheService.getFicheById(this.ficheId).subscribe({
      next: (data: any) => {
      this.fiche = data;
    }
    });
  }

}
