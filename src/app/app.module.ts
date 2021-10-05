import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeckContainerComponent } from './cardComponents/deck-container/deck-container.component';
import { CardContainerComponent } from './cardComponents/card-container/card-container.component';
import { LoginComponent } from './views/login/login.component';
import { DynamicComponentPipe } from './pipes/dynamic-component.pipe';
import { CardDirective } from './cardComponents/card-directives/card.directive';
import { CalendarComponent } from './views/calendar/calendar.component';
import { CalendarTableComponent } from './customComponents/calendar-table/calendar-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckContainerComponent,
    CardContainerComponent,
    LoginComponent,
    DynamicComponentPipe,
    CardDirective,
    CalendarComponent,
    CalendarTableComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
