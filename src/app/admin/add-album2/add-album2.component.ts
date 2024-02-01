import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
import { Router } from '@angular/router';
import { AlbumService } from "src/app/album.service";
import { Album } from "../../album";

@Component({
  selector: 'app-add-album2',
  templateUrl: './add-album2.component.html',
  styleUrls: ['./add-album2.component.css']
})
export class AddAlbum2Component implements OnInit {

  albumForm!: FormGroup;

  
  constructor(
    private fb: FormBuilder,
    private router: Router
    ){}



  ngOnInit(): void {
    this.albumForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      title: ['', [
        Validators.required,
      ]],
      ref: ['', [
        Validators.required,
        Validators.pattern('\\w{5}')
      ]],
      duration: ['', [
        Validators.required,
        Validators.pattern('[0-9]{3}'),
        Validators.max(900)
      ]],
      description: ['', [
        Validators.required,
      ]],
      tags: this.fb.array([
        this.fb.control('')
      ]),
      status: 'off',
    });


  }

  get name(){return this.albumForm.get('name')}
  get title(){return this.albumForm.get('title')}
  get ref(){return this.albumForm.get('ref')}
  get duration(){return this.albumForm.get('duration')}
  get description(){return this.albumForm.get('description')}
  get tags(){return this.albumForm.get('tags') as FormArray}

  onSubmit(){
    // Envoi dans la BD
    console.log(this.albumForm.value);
    // Rédirection sur la page Admin
    this.router.navigate(['/admin'], {
      queryParams: {
        message: "Album ajouté avec succès",
        model : "text-davinci-002-render-sha"
      }
    })
  }

  addTag(){
    this.tags.push(this.fb.control(''))
  }

}



