import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { PanierComponent } from './component/panier/panier.component';
import { ProduiitComponent } from './component/produiit/produiit.component';
import { CommandesComponent } from './component/commandes/commandes.component';


@NgModule({
  declarations: [
    AppComponent,
    PanierComponent,
    CommandesComponent,
    ProduiitComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
