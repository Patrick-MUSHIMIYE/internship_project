import { HttpException, Injectable, Param } from '@nestjs/common';
import { EMPLOYEES } from './employees.mock';
@Injectable()
export class EmployeeService {
    //     const index = this.Emp.findIndex(employee => employee.employee_id === id);
    //     if (index === -1){
    //         throw new HttpException('not found', 404);
    //     }
    //     this.Emp.splice(index, 1)
    //     return this.Emp;
    // }
    private Emp = EMPLOYEES;

    public getEmployees(){
        return this.Emp;
    }
    public  postEmployees(employee){
        console.log(employee);
        return this.Emp.push(employee);

    }
    // public  getEmployeesById(id: number){
    //     const employee = this.Emp.find(employee => employee.employee_id === id);
    //     if (employee){
    //         throw new HttpException('not found', 404);
    //     }
    //     return employee;
    // }
    public  getEmployeesById(@Param("id") employee_id: number): Promise<any> {
        const EmpId = Number(employee_id);
        return new Promise((resolve) => {
            const employee = this.Emp.find((employee) => employee.employee_id === EmpId);
            if(!employee) {
                throw new HttpException('not found', 404);
            }
            return resolve(employee);
        });
    }

    // public  deleteEmployeesById(id: number){
    //     const index = this.Emp.findIndex(employee => employee.employee_id === id);
    //     if (index === -1){
    //         throw new HttpException('not found', 404);
    //     }
    //     this.Emp.splice(index, 1)
    //     return this.Emp;
    // }
    public  deleteEmployeesById(@Param("id") employee_id: number): Promise<any> {
        const EmpId = Number(employee_id);
        return new Promise((resolve) => {
          const index = this.Emp.findIndex((employee) => employee.employee_id === EmpId);
          if (index === -1) {
              throw new HttpException('not found', 404);
          }
          this.Emp.splice(index, 1);
          return resolve(this.Emp);
        });
    }
    // public putEmployeesById(id: number, propertyName: string, propertyValue: string){
    //     const index = this.Emp.findIndex(employee => employee.employee_id === id);
    //     if (index === -1){
    //         throw new HttpException('not found', 404);
    //     }
    //     this.Emp[index][propertyName] = propertyValue;
    //     return this.Emp;
    // }
    public putEmployeesById(employee_id: number, propertyName: string, propertyValue:string): Promise<any>{
        const EmpId = Number(employee_id);
        return new Promise((resolve) => {
            const index = this.Emp.findIndex(employee => employee.employee_id === EmpId);
            if (index === -1) {
                throw new HttpException('not found', 404);
            }
            this.Emp[index][propertyName] = propertyValue;
            return resolve(this.Emp)
        }); 
      }
    }