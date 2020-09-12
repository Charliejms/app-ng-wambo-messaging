import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MessagingManagementComponent } from './messaging-management.component'

describe('MessagingManagementComponent', () => {
  let component: MessagingManagementComponent
  let fixture: ComponentFixture<MessagingManagementComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessagingManagementComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingManagementComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
