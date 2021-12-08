import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { MenuComponent } from './misc/menu/menu/menu.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { E404Component } from './misc/e404/e404.component';
import { MenuitemComponent } from './misc/menu/menuitem/menuitem.component';
import { ReviewPipe } from './user/review.pipe';
import { AdminPipe } from './user/admin.pipe';
import { SearchPipe } from './misc/search.pipe';
import { HelpComponent } from './misc/help/help.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { NullPipe } from './vendor/null.pipe';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { VendorSearchPipe } from './vendor/vendor-search.pipe';
import { ProdSearchPipe } from './product/prod-search.pipe';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestReviewLinesComponent } from './request/request-review-lines/request-review-lines.component';
import { ReqSearchPipe } from './request/req-search.pipe';
import { UsernamePipe } from './request/username.pipe';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestLineComponent } from './request/request-line/request-line.component';
import { ReviewItemComponent } from './request/review-item/review-item.component';
import { StatusPipe } from './request/status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    UserLoginComponent,
    E404Component,
    MenuitemComponent,
    ReviewPipe,
    AdminPipe,
    SearchPipe,
    HelpComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    NullPipe,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    VendorSearchPipe,
    ProdSearchPipe,
    RequestListComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestCreateComponent,
    RequestReviewLinesComponent,
    ReqSearchPipe,
    UsernamePipe,
    RequestlineEditComponent,
    RequestlineCreateComponent,
    RequestLineComponent,
    ReviewItemComponent,
    StatusPipe
  
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
