import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/services/api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  vmNames: { value: string, isValid: boolean }[] = [
    { value: '', isValid: true }, // Initialize with default values
    {
      value: '',
      isValid: false
    }
  ];

  constructor(private apiService: ApiService) {

  }
  get getCurrentVms(): string[] {
    return this.vmNames.map((vm) => vm.value);
  }

  ngOnInit() {
    // this.getData();
    // this.getFact();
    // this.getFact();
    setTimeout(() => {
      // this.getFact();
      // this.currentVmNames.push("test2");
    }, 4000)
  }

  getData() {
    this.apiService.getData().subscribe((data: any) => {
      console.log("Data is: ", data);
    });
  }

  getFact() {
    this.apiService.getFact().subscribe((data: any) => {
      console.log("Fact is: ", data);
    })
  }

  onVmNameChange(name: any, ctrl: any) {
    console.log("vm name change: ", name);
    console.log("validations ", ctrl.errors);
  }

}
