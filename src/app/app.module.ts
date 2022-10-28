import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './products/products.component';
import { SecteurActiviteComponent } from './secteur-activite/secteur-activite.component';
import { AppRoutingModule } from './app-routing.module';
import { FactureComponent } from './facture/facture.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OperateurComponent } from './operateur/operateur.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StockComponent } from './stock/stock.component';
import { ReglementComponent } from './reglement/reglement.component';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    ProductsComponent,
    SecteurActiviteComponent,
    ReglementComponent,
    FactureComponent,
    OperateurComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
