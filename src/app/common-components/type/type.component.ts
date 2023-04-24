/* eslint-disable @typescript-eslint/no-empty-function */
import { BooleanInput } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, ChangeDetectorRef, Input, forwardRef } from '@angular/core';
import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Type } from './type';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> TypeComponent),
    multi:true
  }]
})
export class TypeComponent implements ControlValueAccessor{
  constructor(private readonly cdr: ChangeDetectorRef) {}

  private _types: Type[] = [
  ];

  @Input() required: BooleanInput;
  @Input()
  get types(): Type[] {
    return this._types;
  }

  set types(value: Type[]) {
    this._types = value;
    if(this._types?.length === 1) {
      this.selectedIndex = 0;
    }
  }

  public onChange = (_: unknown) => {};
  public onTouch = () => {};
  selectedIndex!: number;
  
  writeValue(value: number): void {
    this.selectedIndex = value;
    this.cdr.detectChanges();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  valueChanged(value: unknown){
    this.onChange(value);
    this.onTouch();
  }
}
