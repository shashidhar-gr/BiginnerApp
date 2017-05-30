import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category';

@Component({
  selector: 'income-list',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
  providers: [ CategoryService ]
})
export class IncomeComponent implements OnInit{

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

}
