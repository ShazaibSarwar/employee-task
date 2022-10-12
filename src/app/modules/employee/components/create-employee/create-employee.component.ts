import {Component, OnInit} from '@angular/core';
import {FormBuilder, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {EmployeeDto} from "../../dto/employee.dto";
import {EmployeeService} from "../../service/employee.service";


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.sass']
})
export class CreateEmployeeComponent implements OnInit {

  validateForm: UntypedFormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {

      console.log('submit ------------->', this.validateForm.value);
      const data: EmployeeDto = {id: this.getRandomNumber(10, 1000), ...this.validateForm.value}
      this.addEmployee(data)
    }
  }

  // Get random number of between 0 and 100
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }


  confirmValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {error: true, required: true};
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return {confirm: true, error: true};
    }
    return {};
  };

  constructor(private fb: FormBuilder, private readonly employeeService: EmployeeService) {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      salary: [null, [Validators.required]],
      date_of_joning: [null, [Validators.required]],
      age: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  addEmployee(data: EmployeeDto): void {
    console.log('add employee', data);
    const employee = this.employeeService
      .employeesSubject
      .value;
    employee.push(data);
    this.employeeService
      .employeesSubject
      .next(employee);
    this.validateForm.reset();
  }
}
