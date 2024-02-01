import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlbum2Component } from './add-album2.component';

describe('AddAlbum2Component', () => {
  let component: AddAlbum2Component;
  let fixture: ComponentFixture<AddAlbum2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAlbum2Component]
    });
    fixture = TestBed.createComponent(AddAlbum2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
