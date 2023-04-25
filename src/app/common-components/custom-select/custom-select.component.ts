/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  ElementRef,
  Input,
  ChangeDetectorRef,
  ViewChild,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Option } from './Option';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
})
export class CustomSelectComponent implements ControlValueAccessor {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly cdr: ChangeDetectorRef
  ) {}

  selectedOptions: Option[] = [];
  isDropDownOpen = false;
  selectedOption!: number | null;
  private _options: Option[] = [];

  @Input()
  get options(): Option[] {
    return this._options;
  }
  set options(value: Option[]) {
    this._options = value;
    this.selectedOption = 0;
  }

  removeOptions(option: Option) {
    this.selectedOptions = this.selectedOptions.filter(
      (opt) => opt.id !== option.id
    );
    this.options.push(option);
  }

  @ViewChild('dropdownArrow')
  dropdownArrow!: ElementRef;

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    if (
      this.elementRef.nativeElement.contains(event.target) &&
      this.dropdownArrow.nativeElement.addEventListener
    ) {
      this.isDropDownOpen = !this.isDropDownOpen;
    } else {
      this.isDropDownOpen = false;
    }
  }

  @Output() optionSelected = new EventEmitter<unknown>();
  onSelect(option: Option) {
    this.selectedOptions.push(option);
    this.options = this.options.filter((opt) => opt.id !== option.id);
    this.optionSelected.emit(this.selectedOptions);
  }

  public onChange = (_: unknown) => {};
  public onTouched = () => {};

  writeValue(value: number): void {
    this.selectedOption = value ? value : null;
    this.cdr.detectChanges();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  valueChanged(value: unknown) {
    this.onChange(value);
    this.onTouched();
  }
}
