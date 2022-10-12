import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {ConfirmationService, MessageService} from "primeng/api";
import {EmployeeService} from "../../service/employee.service";
import {EmployeeDto} from "../../dto/employee.dto";
import {Table} from 'primeng/table';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass'],
  providers: [MessageService]
})
export class EmployeeListComponent implements OnInit {

  employees: EmployeeDto[] = [];
  statuses: any[] = [];
  loading: boolean = false;

  constructor(private employeeService: EmployeeService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.subscribeToEmployee()
    if (this.employeeService.employeesSubject.value.length <= 0) {
      this.getEmployees();
    }
  }

  deleteSelectedEmployee(selectedEmployee: EmployeeDto) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Employee?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // this.employees = this.employees.filter(val => val.id !== selectedEmployee.id)
        // this.employees.splice(this.employees.indexOf(selectedEmployee), 1);
        this.employeeService.employeesSubject.next( this.employees.filter(val => val.id !== selectedEmployee.id))
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Employee Deleted', life: 3000});
      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected'});
      }
    })
  }


  getEmployees() {
    this.loading = true;
    this.employeeService.getEmployees().subscribe({
      next: value => {
        this.employeeService.employeesSubject.next(value)
        this.loading = false;
      },
      error: err => {
        console.log(err)
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    })
  }

  subscribeToEmployee(): void {
    this.employeeService.employeesSubject
      .subscribe({
        next: value => {
          console.log('In Subscribe Emp List -------------', value);
          this.employees = value
        }
      })
  }

  clear(table: Table): void {
    table.clear()
  }
}

