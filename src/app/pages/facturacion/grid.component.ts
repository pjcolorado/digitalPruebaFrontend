import { NgModule, Component, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

import { DxDataGridModule } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';


@Component({
  selector: 'grid-component',
  templateUrl: 'grid.component.html',
})

export class GridComponent {
  dataSource: any;
  priority: any[];

  constructor() {
    this.dataSource = {
      store: {
        type: 'odata',
        key: 'Task_ID',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
      },
      expand: 'ResponsibleEmployee',
      select: [
        'Task_ID',
        'Task_Subject',
        'Task_Start_Date',
        'Task_Due_Date',
        'Task_Status',
        'Task_Priority',
        'Task_Completion',
        'ResponsibleEmployee/Employee_Full_Name'
      ]
    };
    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 }
    ];
  }
}


@NgModule({
  declarations: [GridComponent],
  exports: [GridComponent],
  imports: [
    CommonModule,
    DxDataGridModule
  ],
  bootstrap: [GridComponent],
})
export class GridModule { }

platformBrowserDynamic().bootstrapModule(GridModule);