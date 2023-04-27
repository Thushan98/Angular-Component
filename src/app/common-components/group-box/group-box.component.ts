import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-group-box',
  templateUrl: './group-box.component.html',
  styleUrls: ['./group-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GroupBoxComponent),
      multi: true,
    },
  ],
})
export class GroupBoxComponent {
  @Input() groupName!: string;
}
