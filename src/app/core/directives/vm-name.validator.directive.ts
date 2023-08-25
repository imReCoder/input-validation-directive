import { Directive, Input } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, Validator, AsyncValidatorFn } from '@angular/forms';
import { Observable } from "rxjs";
import { map, delay, debounceTime, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Directive({
  selector: '[appVmNameValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: VmNameValidatorDirective,
    multi: true
  }]
})
export class VmNameValidatorDirective implements AsyncValidator {
  @Input() validationValues: string[] = [];
  constructor(private vmService: ApiService) {

  }
  ngOnInit() {
    console.log('Validation Values:', this.validationValues);
  }



  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const inputValue = control.value;


    if (!inputValue || inputValue === '') {
      return of(null); // No validation for empty values
    }
    if (this.validationValues.includes(inputValue)) {
      return of({ vmNameValidation: { valid: false, isLocalExist: true } }); // Validation fails
    }

    return this.validateAgainstServer(inputValue);

  }

  private validateAgainstServer(inputValue: string): Observable<ValidationErrors | null> {
    return this.vmService.onCheckVMName(inputValue).pipe(debounceTime(300), switchMap(
      (res) => {
        return (res) ? of({ vmNameValidation: { valid: false } }) : of(null);
      }
    ));
  }
}
