import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Dashboard } from './dashboard/dashboard';
import { FicheRenseignement } from './fiche-renseignement/fiche-renseignement';
import { CreerDossier } from './dossier-administratif/creer-dossier/creer-dossier';
import { ListeFiches } from './liste-fiches/liste-fiches';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },

  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: 'fiche-renseignement', component: FicheRenseignement },
      { path: 'creer-dossier', component: CreerDossier },
      { path: 'liste-fiches', component: ListeFiches },
      { path: 'fiches/nouvelle', component: FicheRenseignement }
    ]
  }
];
