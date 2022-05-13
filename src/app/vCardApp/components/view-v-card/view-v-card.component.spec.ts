import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVCardComponent } from './view-v-card.component';

describe('ViewVCardComponent', () => {
  let component: ViewVCardComponent;
  let fixture: ComponentFixture<ViewVCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
