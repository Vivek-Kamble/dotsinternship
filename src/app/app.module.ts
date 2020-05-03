import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms'
import {TagInputModule} from 'ngx-chips';
import { InvoiceComponent } from './invoice/invoice.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,TagInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:"home",component:HomeComponent},
      {path:"invoice",component:InvoiceComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
