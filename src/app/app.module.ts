import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FusionComponent } from './fusion/fusion.component';
import { FusionDataService } from './fusion/fusion-data.service';
import { ChampionComponent } from './fusion/champion/champion.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FusionComponent, ChampionComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FusionDataService]
})
export class AppModule { 
}
