import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMainComponent } from './navbar-main.component';

describe('NavbarMainComponent', () => {
  let component: NavbarMainComponent;
  let fixture: ComponentFixture<NavbarMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
