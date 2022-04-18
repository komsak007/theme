import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { FaqComponent } from './page/faq/faq.component';
import { ThemeCuteComponent } from './theme-cute.component';

const appRoute: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(appRoute)],
  exports: [RouterModule],
})
export class ThemeCuteModule {}
