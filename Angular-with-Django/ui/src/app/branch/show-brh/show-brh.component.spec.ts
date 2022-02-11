import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBrhComponent } from './show-brh.component';

describe('ShowBrhComponent', () => {
  let component: ShowBrhComponent;
  let fixture: ComponentFixture<ShowBrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBrhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
