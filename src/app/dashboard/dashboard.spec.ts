import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {

  role: string | null = null;
  secteurMilitaire: string | null = null;

  constructor(private router: Router) {
    const navigation = history.state;

    if (!navigation || !navigation.role) {
      this.router.navigate(['/login']);
      return;
    }

    this.role = navigation.role;
    this.secteurMilitaire = navigation.secteurMilitaire || null;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
