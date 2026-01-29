import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-commandant-unite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardCommandantUnite {

  unite = '1er Bataillon';
  compagnie = 'Compagnie Alpha';
  secteur = 'Secteur Centre';

  constructor(private router: Router) {}

  allerListeDossiers() {
    this.router.navigate(['/commandant-unite/dossiers']);
  }

  creerDossier() {
    this.router.navigate(['/commandant-unite/creer-dossier']);
  }
}
