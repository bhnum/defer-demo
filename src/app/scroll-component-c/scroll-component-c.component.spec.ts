import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollComponentCComponent } from './scroll-component-c.component';

describe('ScrollComponentCComponent', () => {
  let component: ScrollComponentCComponent;
  let fixture: ComponentFixture<ScrollComponentCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollComponentCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollComponentCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
