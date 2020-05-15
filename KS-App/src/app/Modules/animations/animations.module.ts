import {
  trigger,
  animate,
  transition,
  style,
  query,
  animation
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('main0 <=> main1, main0 <=> main2, main0 <=> main3, main0 <=> main4, main0 <=> main5, main1 <=> main2, main1 <=> main3, main1 <=> main4, main1 <=> main5, main2 <=> main3, main2 <=> main4, main2 <=> main5, main3 <=> main4, main3 <=> main5, main4 <=> main5', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('0.2s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.2s', style({ opacity: 1 }))],
      { optional: true }
    )
  ]),
  transition('work => main3, hair => main3, video => main3', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.2s', style({ opacity: 1 }))],
      { optional: true }
    )
  ]),

]);

/* export const preventDefault = trigger('preventDefault', [
  transition('work => main3', [
    query(':enter', [style({opacity: 1})], {optional: true})
  ])
]); */



