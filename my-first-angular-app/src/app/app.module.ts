import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../services/about.service';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes =
  [
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '', redirectTo: '/contacts', pathMatch: 'full' }
  ]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
