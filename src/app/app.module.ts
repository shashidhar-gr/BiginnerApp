import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ExpenseListComponent } from './expenselist.component';
import { AddExpenseComponent } from './addexpense.component';
import { IncomeComponent } from './income.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExpenseListComponent,
    AddExpenseComponent,
    IncomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'home',
        component: ExpenseListComponent
      },
      {
        path: 'addexpense',
        component: AddExpenseComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
