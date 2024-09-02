import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    title: 'Remindev | Dashboard',
    component: DashboardComponent
  },
  {
    path: 'projects',
    title: 'Remindev | Dashboard',
    component: ProjectsComponent
  },
  {
    path: 'teams',
    title: 'Remindev | Teams',
    component: TeamsComponent
  },
  {
    path: 'tasks',
    title: 'Remindev | Tasks',
    component: TasksComponent
  },
  {
    path: 'profile',
    title: 'Remindev | Profile',
    component: ProfileComponent
  },
  {
    path: 'settings',
    title: 'Remindev | Settings',
    component: SettingsComponent
  }
];
