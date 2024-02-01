import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormControl, FormGroup, Validators } from "@angular/forms";
import { AlbumService } from "src/app/album.service";
import { Album } from "../../album";

@Component({
  selector: 'app-add-album',
  templateUrl: '../add-album/add-album.component.html',
  styleUrls: ['./add-album.component.css']
})

export class AddAlbumComponent implements OnInit {



  albumForm!: FormGroup;

  
  constructor(private fb: FormBuilder){}



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
        Validators.pattern('[0-9]*'),
        Validators.max(900)
      ]],
      description: ['', [
        Validators.required,
      ]],
      status: 'off'
    });


  }

  get name(){return this.albumForm.get('name')}
  get title(){return this.albumForm.get('title')}
  get ref(){return this.albumForm.get('ref')}
  get duration(){return this.albumForm.get('duration')}
  get description(){return this.albumForm.get('description')}

  onSubmit(){
    console.log(this.albumForm.value);
  }
}
