import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { DashboardCommandantUnite } from './commandant-unite/dashboard/dashboard';
import { Modules } from './commandant-unite/dossier-administratif/modules/modules';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },

  {
    path: 'commandant-unite/dashboard',
    component: DashboardCommandantUnite
  },
  {
    path: 'commandant-unite/dashboard',
    component: DashboardCommandantUnite,
    children: [
      {
        path: 'dossier-administratif',
        component: Modules
      }
    ]
  },

  {
    path: 'commandant-unite/dashboard',
    component: DashboardCommandantUnite,
    children: [
      {
        path: 'pieces-etat-civil',
        loadComponent: () =>
          import('./commandant-unite/dossier-administratif/pieces-etat-civil/pieces-etat-civil')
            .then(m => m.PiecesEtatCivil)
      }
    ]
  }

];
