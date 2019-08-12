import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { BoardFormComponent } from './components/board-form/board-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {BoardsService} from './services/boards.service';
import {FormsModule} from '@angular/forms';

// import {PageComponent} from './components/page/page.component';
import {NgxPaginationModule} from 'ngx-pagination';


import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    BoardFormComponent,
    NavigationComponent,

  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    BoardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
