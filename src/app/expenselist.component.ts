import { Component, OnInit } from '@angular/core';
import { ExpenseListService } from './expenselist.service';

@Component({
    selector: 'expense-list',
    templateUrl: './expenselist.component.html',
    styleUrls: ['./expenselist.component.css'],
    providers: [ ExpenseListService ]
})
export class ExpenseListComponent implements OnInit {
    
    expenseList: Object;

    constructor(private expenseListService: ExpenseListService) {}
    
    ngOnInit(): void {
        this.getExpenseList();
    }

    getExpenseList(): void{
        this.expenseListService.listExpense().then(response => 
        this.expenseList = response
        )
    }
}