import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { TestService } from "src/test.service";

@Component({
    selector: 'app-first-comp',
    templateUrl: './first-comp.component.html',
    styleUrls: ['./first-comp.component.css']
})

export class firstCompComponent {
    constructor(
        private testService: TestService
    ) {
    }
    texte : string = "";

    onButtonClick() {
        //Envoi d'une notification aux abonnés
        this.testService.sendData(this.texte);
    }
}