import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoraddComponent } from './authoradd.component';

describe('AuthoraddComponent', () => {
  let component: AuthoraddComponent;
  let fixture: ComponentFixture<AuthoraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthoraddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
