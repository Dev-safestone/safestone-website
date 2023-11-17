import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PrivacyComponent } from './privacy/privacy.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TermsComponent } from './terms/terms.component';
import { PrivacyMobileComponent } from './privacy-mobile/privacy-mobile.component';
import { TermsMobileComponent } from './terms-mobile/terms-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DialogComponentComponent,
    PrivacyComponent,
    TermsComponent,
    PrivacyMobileComponent,
    TermsMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
