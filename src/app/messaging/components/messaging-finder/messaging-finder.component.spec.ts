import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MessagingFinderComponent } from './messaging-finder.component'

describe('MessagingFinderComponent', () => {
  let component: MessagingFinderComponent
  let fixture: ComponentFixture<MessagingFinderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessagingFinderComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingFinderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
