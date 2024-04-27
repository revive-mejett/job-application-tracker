import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobapplicationComponent } from './jobapplication.component';

describe('JobapplicationComponent', () => {
  let component: JobapplicationComponent;
  let fixture: ComponentFixture<JobapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobapplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
