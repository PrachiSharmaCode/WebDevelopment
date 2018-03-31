import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {EditWidgetComponent} from './components/widget/edit-widget/edit-widget.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetNewComponent} from './components/widget/widget-new/widget-new.component';
import {WidgetNewYoutubeComponent} from './components/widget/widget-new-youtube/widget-new-youtube.component';
import {WidgetNewImageComponent} from './components/widget/widget-new-image/widget-new-image.component';
import {WidgetTextComponent} from './components/widget/widget-text/widget-text.component';
import {WidgetHtmlComponent} from './components/widget/widget-html/widget-html.component';
import {WidgetNewTextComponent} from './components/widget/widget-new-text/widget-new-text.component';
import {WidgetNewHtmlComponent} from './components/widget/widget-new-html/widget-new-html.component';
import {FlickrImageSearchComponent} from './components/widget/widget-new-image/flickr-image-search/flickr-image-search.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:uid', component: ProfileComponent},
  {path: 'profile/:uid/website', component: WebsiteListComponent},
  {path: 'profile/:uid/website/new', component: WebsiteNewComponent},
  {path: 'profile/:uid/website/:wid', component: WebsiteEditComponent},
  {path: 'profile/:uid/website/:wid/page', component: PageListComponent},
  {path: 'profile/:uid/website/:wid/page/new', component: PageNewComponent},
  {path: 'profile/:uid/website/:wid/page/:pid', component: PageEditComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/new/HEADER', component: WidgetNewComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/new/YOUTUBE', component: WidgetNewYoutubeComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/new/TEXT', component: WidgetNewTextComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/new/IMAGE', component: WidgetNewImageComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/new/HTML', component: WidgetNewHtmlComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/new/FLICKR', component: FlickrImageSearchComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/:wgid/:wgtype', component: EditWidgetComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
export const routingComponents = [LoginComponent,
  RegisterComponent, ProfileComponent];
