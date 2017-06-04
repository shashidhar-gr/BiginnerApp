import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { ExpenseListService } from './expenselist.service' 

@Component({
    selector: 'add-expense',
    templateUrl: './addexpense.component.html',
    styleUrls: ['./addexpense.component.css'],
    providers: [ExpenseListService]
})
export class AddExpenseComponent {
    constructor(private expenseListService: ExpenseListService, private router: Router) { }

    NewExpense: object = {
        "category_name": "",
        "subcategory_name": "",
        "amount": 0,
        "date": new Date
    }

    onSubmit(NewExpense): void {
        this.expenseListService.addExpense(NewExpense).then(response => {
            this.router.navigate(['/home']);
        });
    }
}