import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

	selectedEmployee: Employee={
    name: '',
    azucar: 0,
    grasa: 0,
    oxigeno: 0,
    riesgo: ''
  };
	URL_API='http://localhost:3678/api/employees';

	employees!: Employee[];

	constructor(private http: HttpClient) { }

	postEmployee(employee: Employee) {
    	return this.http.post(this.URL_API, employee);
  	}
	getEmployees(){
		return this.http.get<Employee[]>(this.URL_API);

	}
	putEmployee(employee: Employee) {
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
