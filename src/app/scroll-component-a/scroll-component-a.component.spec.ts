import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollComponentAComponent } from './scroll-component-a.component';

describe('ScrollComponentAComponent', () => {
  let component: ScrollComponentAComponent;
  let fixture: ComponentFixture<ScrollComponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollComponentAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
