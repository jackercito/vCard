import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptor/http-error.interceptor';

import { ViewVCardComponent } from './vCardApp/components/view-v-card/view-v-card.component';

const appRoutes: Routes = [
  //{ path: '', component: ViewVCardComponent },
  //{ path: 'home', component: ViewVCardComponent },
  //{ path: 'inicio', component: ViewVCardComponent },
  //{ path: '**', component: ViewVCardComponent },
  {
    path: 'vCard/:id',
    component: ViewVCardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    {
      enableTracing: false, // <-- ture: debugging purposes only
      onSameUrlNavigation: 'reload'
    }
  )],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
