import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaComponent } from './anda.component';

describe('AndaComponent', () => {
  let component: AndaComponent;
  let fixture: ComponentFixture<AndaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
