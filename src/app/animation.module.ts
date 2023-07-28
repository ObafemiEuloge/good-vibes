import { trigger, transition, animate, style, state } from "@angular/animations";

export const fadeInAnimation = trigger('fadeInAnimation', [
    transition(":enter", [
        style({ opacity: 0 }),
        animate('800ms', style({ opacity: 1 })),
    ]),
]);

export const backGround = [
    trigger("backGround", [
        state('open', style({
            height: '100px',
            opacity: 1,
            backgroundColor: 'green'
        })),
        // définir l'état close de l'élément HTML
        state('close', style({
            height: '100px',
            opacity: 0.25,
            backgroundColor: 'yellow'
        }))
    ])
]
   