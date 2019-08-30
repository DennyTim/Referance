import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { JsonapiService } from './services/jsonapi.service';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [JsonapiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
