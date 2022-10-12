import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import {EmployeeRoutingModule} from "./employee-routing.module";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";


import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';



import { EmployeeService } from './service/employee.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RippleModule} from "primeng/ripple";
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {MessagesModule} from "primeng/messages";

@NgModule({
  declarations: [
    EmployeeListComponent,
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NzTableModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    TableModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    DropdownModule,
    HttpClientModule,
    RippleModule,
    ConfirmDialogModule,
    MessagesModule
  ],
  providers: [EmployeeService, ConfirmationService, MessageService]
})
export class EmployeeModule { }
