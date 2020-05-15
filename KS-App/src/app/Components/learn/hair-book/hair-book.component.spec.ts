import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairBookComponent } from './hair-book.component';

describe('HairBookComponent', () => {
  let component: HairBookComponent;
  let fixture: ComponentFixture<HairBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
