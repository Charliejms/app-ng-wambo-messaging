import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MessagingComponent } from './messaging.component'
import { MessagingManagementComponent } from './components/messaging-management/messaging-management.component'

const routes: Routes = [
  {
    path: '',
    component: MessagingComponent,
    children: [
      { path: 'management', component: MessagingManagementComponent },
    ],
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class MessagingRoutesModule { }
