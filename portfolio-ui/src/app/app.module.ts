import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EventStreamWidgetComponent } from './event-stream-widget/event-stream-widget.component'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavigationBarComponent,
    StatusBarComponent,
    WorkHistoryComponent,
    BlogPageComponent,
    ContactPageComponent,
    MainPageComponent,
    EventStreamWidgetComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
