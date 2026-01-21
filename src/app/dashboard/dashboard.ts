import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {

  role: string = 'RECRUTEMENT';
  secteurMilitaire: string | null = null;

  constructor(private router: Router) {
    const navigation = history.state;

    this.role = navigation?.role ?? 'RECRUTEMENT';
    this.secteurMilitaire = navigation?.secteurMilitaire ?? null;
  }

  logout() {
    this.router.navigate(['/login']);
  }
  isDashboardHome(): boolean {
    return this.router.url === '/dashboard';
  }

}
