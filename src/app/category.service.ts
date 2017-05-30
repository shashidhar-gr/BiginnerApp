import { Injectable } from '@angular/core'
import { Category } from './category'
import { Categories } from './mock-categories'

@Injectable()
export class CategoryService {
  getCategories(): Category[] {
    return Categories;
  }
}
