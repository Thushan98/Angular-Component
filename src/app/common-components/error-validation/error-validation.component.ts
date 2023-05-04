import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidationService } from 'src/app/services/form-validation.service';

@Component({
  selector: 'app-error-validation',
  templateUrl: './error-validation.component.html',
  styleUrls: ['./error-validation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ErrorValidationComponent {
  @Input() control!: FormControl;

  constructor(private validator: FormValidationService) {}

  get errorMsg(): string | null {
    if (this.control.errors !== null) {
      for (const property in this.control.errors) {
        // eslint-disable-next-line no-prototype-builtins
        if (
          // eslint-disable-next-line no-prototype-builtins
          this.control.errors.hasOwnProperty(property) &&
          this.control.touched
        ) {
          return this.validator.getValidatorErrorMsg(
            property,
            this.control.errors[property]
          );
        }
      }
    }
    return null;
  }
}
