import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';
import { HomeComponent } from './misc/home/home.component';
import { MenuComponent } from './misc/menu/menu/menu.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routes: Routes = [
{path: "", redirectTo: "", pathMatch: "full"},
{path: "home", component: HomeComponent},
{path: "about", component: AboutComponent},
{path: "menu", component: MenuComponent},
{path: "e404", component: E404Component},

{path: "user-list", component: UserListComponent},
{path: "user-detail", component: UserDetailComponent},
{path: "user-edit", component: UserEditComponent},
{path: "user-create", component: UserCreateComponent},
{path: "user-login", component: UserLoginComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
