//Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//client 
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { ProductCrudComponent } from './pages/product-crud/product-crud..component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';


//Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from '@angular/material/paginator';


// directicves
import { RedDirective } from './shared/directives/red.directive'
import { ForDirective } from './shared/directives/for.directive'
import { ValidationsDirective } from './shared/directives/validations.directive'
//services
import { ProductService } from './services/product.service';
import { HeaderService } from './services/header.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    //diretivas
    RedDirective,
    ForDirective,
    ValidationsDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    //material
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
  ],
  providers: [
    ProductService,
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }