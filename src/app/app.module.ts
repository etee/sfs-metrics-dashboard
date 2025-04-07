import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './core/services/config.service';
import { CommonModule } from '@angular/common';
import { EnvironmentBadgeComponent } from './shared/environment-badge/environment-badge.component';
import { FormatEnvNamePipe } from './shared/pipes/formatEnvName.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EnvironmentBadgeComponent,
    FormatEnvNamePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NgbModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
