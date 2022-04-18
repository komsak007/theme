import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCuteComponent } from './theme-cute.component';

describe('ThemeCuteComponent', () => {
  let component: ThemeCuteComponent;
  let fixture: ComponentFixture<ThemeCuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeCuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
