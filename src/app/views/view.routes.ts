import { Routes } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { LoginComponent } from "./login/login.component";

export const viewRoutes: Routes = [
  { path: '1', component: LoginComponent },
  { path: '2', component: CalendarComponent },
  { path: '3', component: LoginComponent },
  { path: '4', component: CalendarComponent },
  { path: '5', component: LoginComponent }
];

export const invalidRoutes: Routes = [
  { path: '**', component: LoginComponent } //PageNotFoundComponent
]

export const redirectRoutes: Routes = [
  { path: '', redirectTo: '1', pathMatch: 'full' },
  // { path: '/', redirectTo: '1', pathMatch: 'full' }
]