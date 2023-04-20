import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const height: AnimationTriggerMetadata = trigger('height', [
  state(
    'void',
    style({
      height: 0,
      overflow: 'hidden',
    })
  ),
  state(
    '*',
    style({
      height: '*',
      overflow: 'hidden',
    })
  ),
  transition('void <=> *', animate('350ms cubic-bezier(0.1, 0, 0.2, 1)')),
]);

export const accordionHeight: AnimationTriggerMetadata = trigger(
  'accordionHeight',
  [
    state(
      '*',
      style({
        height: 0,
      })
    ),
    state(
      'collapsed',
      style({
        height: 0,
      })
    ),
    state(
      'expanded',
      style({
        height: '*',
      })
    ),
    transition('* <=> *', animate('350ms cubic-bezier(0.1, 0, 0.2, 1)')),
  ]
);

export const calendarDropdownHeight: AnimationTriggerMetadata = trigger(
  'calendarDropdownHeight',
  [
    state(
      'collapsed',
      style({
        height: 0,
      })
    ),
    state(
      'expanded',
      style({
        height: '*',
      })
    ),
    transition(
      'collapsed <=> expanded',
      animate('350ms cubic-bezier(0.1, 0, 0.2, 1)')
    ),
  ]
);

export const fadeDown: AnimationTriggerMetadata = trigger('fadeDown', [
  state('*', style({ transform: 'translateX(0)', opacity: 1 })),
  transition('void => *', [
    style({ transform: 'translateY(-8px)', opacity: 0 }),
    animate('150ms ease-out'),
  ]),
  transition('* => void', [
    animate(
      '150ms cubic-bezier(0.4, 0.0, 1, 1)',
      style({ transform: 'translateY(8px)', opacity: 0 })
    ),
  ]),
]);

export const panelAnimation: AnimationTriggerMetadata = trigger(
  'panelAnimation',
  [
    state(
      'void',
      style({
        transform: 'scaleY(0.95)',
        opacity: 0,
      })
    ),
    state(
      '*',
      style({
        opacity: 1,
        transform: 'scaleY(1)',
      })
    ),
    transition('void => *', animate('200ms cubic-bezier(0, 0.2, 0, 1)')),
    transition(
      '* => void',
      animate('100ms 25ms linear', style({ opacity: 0 }))
    ),
  ]
);

export const sidenavToggeling: AnimationTriggerMetadata = trigger(
  'sidenavToggeling',
  [
    state(
      'collapsed',
      style({
        height: 0,
      })
    ),
    state(
      'expanded',
      style({
        height: '*',
      })
    ),
    transition(
      'collapsed <=> expanded',
      animate('250ms cubic-bezier(0.1, 0, 0.2, 1)')
    ),
  ]
);
