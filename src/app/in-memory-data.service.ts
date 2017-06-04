import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let expenselist = [
            {
                "category_name": "Category01",
                "subcategory_name": "Subcategory01",
                "amount": 100
            },
            {
                "category_name": "Category01",
                "subcategory_name": "Subcategory02",
                "amount": 50.00
            },
            {
                "category_name": "Category02",
                "subcategory_name": "Subcategory02",
                "amount": 200
            },
            {
                "category_name": "Category01",
                "subcategory_name": "Subcategory03",
                "amount": 10
            }
        ];

        return {expenselist};
    }
}
