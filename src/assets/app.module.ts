import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app/app.component';
import { SettingsComponent } from '../app/settings/settings.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { NotfoundComponent } from '../app/notfound/notfound.component';
import { NavComponent } from '../app/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    DashboardComponent,
    NotfoundComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {path: '', component: DashboardComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '**', component: NotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
