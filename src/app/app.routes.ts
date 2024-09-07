import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProjectComponent } from './pages/projects/project/project.component';
import { AreaComponent } from './pages/projects/project/area/area.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    title: 'Remindev | Dashboard',
    component: DashboardComponent
  },
  {
    path: 'projects',
    title: 'Remindev | Projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/:id',
    title: 'Remindev | ',
    component: ProjectComponent
  },
  {
    path: 'projects/:id/:id',
    title: 'Remindev | ',
    component: AreaComponent
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
