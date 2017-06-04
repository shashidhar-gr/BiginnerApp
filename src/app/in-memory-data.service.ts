import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let expenselist = [
            {
                "id": 1,
                "category_name": "Category01",
                "subcategory_name": "Subcategory01",
                "amount": 100,
                "date": "2017-06-04T02:23:12.858Z"
            },
            {
                "id": 2,
                "category_name": "Category01",
                "subcategory_name": "Subcategory02",
                "amount": 50.00,
                "date": "2017-06-04T02:23:12.858Z"
            },
            {
                "id": 3,
                "category_name": "Category02",
                "subcategory_name": "Subcategory02",
                "amount": 200,
                "date": "2017-06-04T02:23:12.858Z"
            },
            {
                "id": 4,
                "category_name": "Category01",
                "subcategory_name": "Subcategory03",
                "amount": 10,
                "date": "2017-06-04T02:23:12.858Z"
            }
        ];

        return {expenselist};
    }
}
