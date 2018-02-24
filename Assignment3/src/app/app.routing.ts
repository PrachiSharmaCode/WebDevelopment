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
  {path: 'profile/:uid/website/:wid/page/:pid/widget/new/newheader', component: WidgetNewComponent},
  {path: 'profile/:uid/website/:wid/page/:pid/widget/:wgid/:wgtype', component: EditWidgetComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
export const routingComponents = [LoginComponent,
  RegisterComponent, ProfileComponent];
