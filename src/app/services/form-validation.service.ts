import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  getValidatorErrorMsg(validatorName: string, validatorValue?: unknown) {
    const config: {[key: string]: string} = {
      required: "Required"
    };
    return config[validatorName];
  }
}