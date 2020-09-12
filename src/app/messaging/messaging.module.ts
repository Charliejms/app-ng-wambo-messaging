import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MessagingRoutesModule } from './messaging-routes.module'
import { MessagingManagementComponent } from './components/messaging-management/messaging-management.component'
import { MessagingFinderComponent } from './components/messaging-finder/messaging-finder.component'
import { MessagingComponent } from './messaging.component'

@NgModule({
  declarations: [
    MessagingComponent,
    MessagingManagementComponent,
    MessagingFinderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MessagingRoutesModule,
  ],
})
export class MessagingModule { }
