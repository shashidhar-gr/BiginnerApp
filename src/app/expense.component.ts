import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category';

@Component({
  selector: 'expense-list',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
  providers: [ CategoryService ]
})
export class ExpenseComponent implements OnInit{

  //Initiating constructor by passing CategoryService as parameter.
  constructor(private categoryService: CategoryService) { }

  //Property that stores list of categories related to expenses.
  categories: Category[];

  //Implementing ngOnInit contract of OnInit interface.
  ngOnInit(): void {
    this.getCategories()
  }

  //Populating categories list.
  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }

  //
  onCategorySelect(Category): void {
    console.log(Category);
  }

}
