import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  // for declare all components and pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    OverviewComponent,
  ],

  // All modules
  imports: [BrowserModule],

  // Only and only all main component
  bootstrap: [AppComponent],

  // All services
  providers: [],
})
export class AppModule {}
