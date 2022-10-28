import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { ProductsComponent } from './products/products.component';
import { SecteurActiviteComponent } from './secteur-activite/secteur-activite.component';
import { ReglementComponent } from './reglement/reglement.component';
import { FactureComponent } from './facture/facture.component';
import { OperateurComponent } from './operateur/operateur.component';

const routes: Routes =[
  { path: 'stock', component: StockComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'secteurActivite', component: SecteurActiviteComponent },
  { path: 'reglement',  component: ReglementComponent },
  { path: 'facture',  component: FactureComponent },
  { path: 'operateur',  component: OperateurComponent },
  {path: '', redirectTo: 'product', pathMatch: 'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
