import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OverviewComponent } from './overview/overview.component';
import { HttpClientModule } from '@angular/common/http';
import { OverviewService } from './services/overviews.service';
import { StatsComponent } from './statistique/stats.component';
import { StructComponent } from './statistique/struct/struct.component';
import { DetailsbiensComponent } from './statistique/detailsbiens/detailsbiens.component';
import { ColorPipe } from './pipes/ColorCustomPipe.pipe';

@NgModule({
  // for declare all components and pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    OverviewComponent,
    StatsComponent,
    StructComponent,
    DetailsbiensComponent,
    ColorPipe,
  ],

  // All modules
  imports: [BrowserModule, HttpClientModule],

  // Only and only all main component
  bootstrap: [AppComponent],

  // All services
  providers: [OverviewService],
})
export class AppModule {}
