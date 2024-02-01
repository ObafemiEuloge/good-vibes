import { Component } from '@angular/core';
import { Music } from '../Musics';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {
  submitted : boolean = false;
  name = "Euzébio Beltran";
  auteur = "Eduardo Montenegro";
  genres = ["Jazz", "Rnb", "Rap", "Hip Hop", "Classic"]
  musicModel = new Music('', '', this.genres[0]);


  onSubmit(form: any) {
    this.submitted = !this.submitted;
  }
}
