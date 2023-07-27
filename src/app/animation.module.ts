import { trigger, transition, animate, style } from "@angular/animations";

export const fadeInAnimation = trigger('fadeInAnimation', [
    transition(":enter", [
        style({opacity: 0}),
        animate('900ms', style({opacity: 1})),
    ]),
]);