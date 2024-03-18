import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkcardComponent } from './skcard.component';

describe('SkcardComponent', () => {
  let component: SkcardComponent;
  let fixture: ComponentFixture<SkcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
