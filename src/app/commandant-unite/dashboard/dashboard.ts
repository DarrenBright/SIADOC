import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-dashboard-commandant-unite',
  standalone: true,
  imports: [CommonModule,  RouterOutlet, RouterLink],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardCommandantUnite implements OnInit {

  role: string = '';
  secteurMilitaire: string = '';

  ngOnInit(): void {
    const navigation = history.state;

    this.role = navigation?.role || 'COMMANDANT_UNITE';
    this.secteurMilitaire = navigation?.secteurMilitaire || '—';

    console.log('🟢 ROLE REÇU :', this.role);
    console.log('🟢 SECTEUR :', this.secteurMilitaire);
  }
}
