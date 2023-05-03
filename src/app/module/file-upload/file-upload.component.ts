import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FileUploadComponent {
  constructor(private readonly formBuilder: FormBuilder) {}
  acceptedFile = ['.jpg', '.png', '.jpeg'];

  formImage = this.formBuilder.group({
    image: '',
  });

  resetForm() {
    this.formImage.reset();
  }

  saveDetails() {
    console.log(this.formImage.controls.image.value);
    this.resetForm();
  }
}
