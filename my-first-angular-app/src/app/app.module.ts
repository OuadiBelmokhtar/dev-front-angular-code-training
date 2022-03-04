import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../services/about.service';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { ImgDetailsComponent } from './img-details/img-details.component';
import { ImageService } from '../services/image.service';

const appRoutes: Routes =
  [
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'gallery', component: GalleryComponent },
    {path:'imgdetails', component:ImgDetailsComponent},
    { path: '', redirectTo: '/contacts', pathMatch: 'full' }
  ]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent,
    ImgDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [AboutService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
