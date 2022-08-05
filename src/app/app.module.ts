import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { TitlePipe } from './title.pipe';
import { AuthorPipe } from './author.pipe';
import { PricePipe } from './price.pipe';
import { YearPipe } from './year.pipe';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RatingComponent } from './rating/rating.component';
import { BookStatusComponent } from './book-status/book-status.component';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { OrderModule } from './order/order.module';
import { BookSidebarComponent } from './book-sidebar/book-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,    
    TitlePipe,
    AuthorPipe,
    PricePipe,
    YearPipe,
    HeaderComponent,    
    RatingComponent,
    BookStatusComponent,
    BookSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BookModule,
    OrderModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }