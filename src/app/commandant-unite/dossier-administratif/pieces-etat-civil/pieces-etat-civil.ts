import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pieces-etat-civil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pieces-etat-civil.html',
  styleUrls: ['./pieces-etat-civil.scss']
})
export class PiecesEtatCivil {

  constructor(private sanitizer: DomSanitizer) {}

  afficherFormulaire = false;
  afficherApercu = false;             

  pieces: any[] = [];
  pieceSelectionnee: any = null;

  pieceForm = this.initForm();

  /* ============================= */
  /* INITIALISATION FORMULAIRE */
  /* ============================= */
  initForm() {
    return {
      nom: '',
      prenom: '',
      type: '',
      dateEnregistrement: new Date().toISOString().substring(0, 10),
      dateEtablissement: '',
      dateDelivrance: '',
      dateExpiration: '',
      observation: '',
      fichier: null as File | null,
      fichierUrl: null as SafeResourceUrl | null
    };
  }

  ouvrirFormulaire() {
    this.afficherFormulaire = true;
  }

  fermerFormulaire() {
    this.afficherFormulaire = false;
    this.pieceForm = this.initForm();   
  }

  /* ============================= */
  /* FICHIER */
  /* ============================= */
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const objectUrl = URL.createObjectURL(file);

    this.pieceForm.fichier = file;
    this.pieceForm.fichierUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(objectUrl);

    console.log('📎 FICHIER:', file.name);
  }

  /* ============================= */
  /* CRUD */
  /* ============================= */
  enregistrerPiece() {
    if (!this.pieceForm.nom || !this.pieceForm.prenom || !this.pieceForm.type) {
      alert('Nom, prénom et type de pièce sont obligatoires');
      return;
    }

    if (
      this.pieceForm.type === 'CNI' &&
      (!this.pieceForm.dateDelivrance || !this.pieceForm.dateExpiration)
    ) {
      alert('Dates CNI obligatoires');
      return;
    }

    if (!this.pieceForm.fichier) {
      alert('Veuillez joindre le document');
      return;
    }

    this.pieces.push({ ...this.pieceForm });
    this.fermerFormulaire();
  }

  voirPiece(piece: any) {
    this.pieceSelectionnee = piece;
    this.afficherApercu = true;
  }

  fermerApercu() {
    this.afficherApercu = false;
    this.pieceSelectionnee = null;
  }

  modifierPiece(piece: any) {
    this.pieceForm = { ...piece };
    this.afficherFormulaire = true;
  }

  supprimerPiece(piece: any) {
    if (confirm('Supprimer cette pièce ?')) {
      this.pieces = this.pieces.filter(p => p !== piece);
    }
  }

  /* ============================= */
  /* HELPERS */
  /* ============================= */
  isPdf(file: File | null): boolean {
    return !!file && file.type === 'application/pdf';
  }

  isImage(file: File | null): boolean {
    return !!file && file.type.startsWith('image/');
  }
}
