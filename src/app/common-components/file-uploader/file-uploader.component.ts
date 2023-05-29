import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploaderComponent),
      multi: true,
    },
  ],
})
export class FileUploaderComponent implements ControlValueAccessor {
  selectedIndexFile!: number;
  selectedFile!: File;
  selectedImage!: string;
  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  @Input() acceptedFile!: string[];
  @Input() maxSize!: number;
  @Output() error: EventEmitter<string> = new EventEmitter<string>();

  errorMsg: unknown = '';

  OnFileSelect(event: any) {
    const file = event.target.files[0];
    if (file.size > this.maxSize) {
      this.errorMsg = '* File size is too large. Maximum size is 5mb';
      return;
    } else {
      this.errorMsg = '';
      this.selectedFile = file;
      this.valueChanged(file);

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
        this.changeDetectorRef.detectChanges();
      };
      reader.readAsDataURL(file);
    }
  }

  public onChange = (_: unknown) => {};
  public onTouched = () => {};

  writeValue(value: any): void {
    this.selectedIndexFile = value;
    this.changeDetectorRef.detectChanges();
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
