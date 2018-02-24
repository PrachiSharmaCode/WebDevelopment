import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {SafePipeComponent , WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import { EditWidgetComponent} from './components/widget/edit-widget/edit-widget.component';
import { WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';


import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import {PageService} from './services/page.service.client';
import { WidgetService} from './services/widget.service.client';
import { YoutubeComponent } from './components/widget/youtube/youtube.component';
import { ImageComponent } from './components/widget/image/image.component';
import { HeaderComponent } from './components/widget/header/header.component';
import { WidgetNewComponent } from './components/widget/widget-new/widget-new.component';
import {SafePipe} from 'safe-pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteEditComponent,
    WebsiteNewComponent,
    WebsiteListComponent,
    PageListComponent,
    PageNewComponent,
    PageEditComponent,
    WidgetListComponent,
    EditWidgetComponent,
    YoutubeComponent,
    ImageComponent,
    WidgetChooserComponent,
    HeaderComponent,
    WidgetNewComponent,
    SafePipeComponent

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
  ],
  providers: [
    UserService,
    WebsiteService,
    PageService,
    WidgetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
