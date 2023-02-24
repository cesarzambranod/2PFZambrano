import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./core/components/not-found/not-found.component";
import {MainComponent} from "./core/components/main/main.component";

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
