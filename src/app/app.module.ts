import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ExpenseComponent } from './expense.component'
import { IncomeComponent } from './income.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExpenseComponent,
    IncomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'expense',
        component: ExpenseComponent
      },
      {
        path: 'income',
        component: IncomeComponent
      },
      {
        path: '',
        redirectTo: '/expense',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
