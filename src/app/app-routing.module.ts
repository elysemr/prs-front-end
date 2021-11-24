import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './misc/about/about.component';
import { HomeComponent } from './misc/home/home.component';
import { MenuComponent } from './misc/menu/menu/menu.component';

const routes: Routes = [
{path: "", redirectTo: "", pathMatch: "full"},
{path: "home", component: HomeComponent},
{path: "about", component: AboutComponent},
{path: "menu", component: MenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
