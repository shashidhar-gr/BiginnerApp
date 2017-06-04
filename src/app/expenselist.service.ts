import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Injectable() 
export class ExpenseListService {
  successMessage: Object
  private expenseListUrl = "api/expenselist";
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  listExpense(): Promise<any> {
    
    //return Promise.resolve(this.successMessage);
    return this.http.get(this.expenseListUrl)
    .toPromise()
    .then(response => 
      response.json().data as any
    )
    .catch(this.handleError);
  }

  addExpense(expenseList: Object): Promise<any> {
    
    return this.http.post(this.expenseListUrl, expenseList, {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as any)
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
