import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './views/calendar/calendar.component';
import { LoginComponent } from './views/login/login.component';
import { viewRoutes, invalidRoutes, redirectRoutes } from './views/view.routes';

const routes: Routes = [
  ...redirectRoutes,
  ...viewRoutes,
  ...invalidRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
