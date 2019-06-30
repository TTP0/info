import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTabsComponent } from './nav-tabs.component';

describe('NavTabsComponent', () => {
  let component: NavTabsComponent;
  let fixture: ComponentFixture<NavTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
