import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApproveComponent } from './post-approve.component';

describe('PostApproveComponent', () => {
  let component: PostApproveComponent;
  let fixture: ComponentFixture<PostApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
