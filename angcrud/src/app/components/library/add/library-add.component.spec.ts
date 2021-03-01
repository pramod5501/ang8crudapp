/**
 * Created By : Pramod Kumar  
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAddComponent } from './library-add.component';

describe('libraryAddComponent', () => {
  let component: LibraryAddComponent;
  let fixture: ComponentFixture<LibraryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/**
 * Created By : Pramod Kumar  
 */