import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { CoreContainerComponent } from './core/core-container/core-container.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { TabComponent } from './shared/tabs/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CoreContainerComponent,
    DashboardComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
