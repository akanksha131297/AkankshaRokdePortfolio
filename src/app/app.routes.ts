import { Routes } from '@angular/router';    
import { Home } from '../pages/home/home';
import { About } from '../pages/about/about';

import { Experience } from '../pages/experience/experience';
import { Contact } from '../pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home ,data: { animation: 'HomePage' }},
  { path: 'about', component: About ,data: { animation: 'AboutPage' }},
   { path: 'experience', component: Experience ,data: { animation: 'ExperiencePage' } },
  { path: 'contact', component: Contact ,data: { animation: '/ContactPage' } },

];