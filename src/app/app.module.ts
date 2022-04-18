import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './theme/theme-cute/page/about/about.component';
import { FaqComponent } from './theme/theme-cute/page/faq/faq.component';
import { HomeComponent } from './theme/theme-cute/page/home/home.component';
import { ThemeCuteComponent } from './theme/theme-cute/theme-cute.component';

const appRoute: Routes = [ 
  { path: 'theme', loadChildren: () => import('./theme/theme-cute/theme-cute.module').then((m) => m.ThemeCuteModule), },
  { path: '',   redirectTo: '/theme/home', pathMatch: 'full' },
  { path: '**',   redirectTo: '/theme/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FaqComponent,
    HomeComponent,
    ThemeCuteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
