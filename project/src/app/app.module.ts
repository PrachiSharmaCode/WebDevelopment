import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { QuillEditorModule } from 'ngx-quill-editor';
import { AgmCoreModule} from '@agm/core';




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
import {SortableDirective} from './components/widget/widget-list/sortable.directive';

import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import {PageService} from './services/page.service.client';
import {SharedService} from './services/shared.service';
import { WidgetService} from './services/widget.service.client';
import {ProjectUserService} from './services/projectuser.service.client';
import { FoodTruckService} from './services/foodtruck.service.client';
import { ReviewService} from './services/review.service.client';

import { YoutubeComponent } from './components/widget/youtube/youtube.component';
import { ImageComponent } from './components/widget/image/image.component';
import { HeaderComponent } from './components/widget/header/header.component';
import { WidgetNewComponent } from './components/widget/widget-new/widget-new.component';
import {SafePipe} from 'safe-pipe';
import { WidgetNewYoutubeComponent } from './components/widget/widget-new-youtube/widget-new-youtube.component';
import { WidgetNewImageComponent } from './components/widget/widget-new-image/widget-new-image.component';
import { WidgetHtmlComponent } from './components/widget/widget-html/widget-html.component';
import { WidgetTextComponent } from './components/widget/widget-text/widget-text.component';
import { WidgetNewTextComponent } from './components/widget/widget-new-text/widget-new-text.component';
import { WidgetNewHtmlComponent } from './components/widget/widget-new-html/widget-new-html.component';
import { FlickrImageSearchComponent } from './components/widget/widget-new-image/flickr-image-search/flickr-image-search.component';
import {FlickrService} from './services/flickr.sevice.client';
import { FickrEditImageComponent } from './components/widget/image/fickr-edit-image/fickr-edit-image.component';
import {AuthGuard} from './services/auth.guard.service';
import { ProjectLoginComponent } from './components/projectComponents/project-login/project-login.component';
import { ProjectRegisterComponent } from './components/projectComponents/project-register/project-register.component';
import { SearchTruckComponent } from './components/projectComponents/foodtruck/search-truck/search-truck.component';
import { SelectUserComponent } from './components/projectComponents/projectUser/select-user/select-user.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectHomePageComponent } from './components/projectComponents/project-home-page/project-home-page.component';
import { RegisterOwnerComponent } from './components/projectComponents/projectUser/register-owner/register-owner.component';
import { NewFoodTruckComponent } from './components/projectComponents/foodtruck/new-food-truck/new-food-truck.component';
import { FoodTruckListComponent } from './components/projectComponents/foodtruck/food-truck-list/food-truck-list.component';
import { FoodTruckResultComponent } from './components/projectComponents/foodtruck/food-truck-result/food-truck-result.component';
import { FoodTruckProfileComponent } from './components/projectComponents/foodtruck/food-truck-profile/food-truck-profile.component';
import { EditFoodtruckComponent } from './components/projectComponents/foodtruck/edit-foodtruck/edit-foodtruck.component';
import { FoodTruckDetailComponent } from './components/projectComponents/foodtruck/food-truck-detail/food-truck-detail.component';
import { GustFoodListComponent } from './components/projectComponents/foodtruck/gust-food-list/gust-food-list.component';
import { ReviewFoodTruckComponent } from './components/projectComponents/foodtruck/review-food-truck/review-food-truck.component';



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
    SafePipeComponent,
    WidgetNewYoutubeComponent,
    WidgetNewImageComponent,
    WidgetHtmlComponent,
    WidgetTextComponent,
    WidgetNewTextComponent,
    WidgetNewHtmlComponent,
    SortableDirective,
    FlickrImageSearchComponent,
    FickrEditImageComponent,
    ProjectLoginComponent,
    ProjectRegisterComponent,
    SearchTruckComponent,
    SelectUserComponent,
    HomePageComponent,
    ProjectHomePageComponent,
    RegisterOwnerComponent,
    NewFoodTruckComponent,
    FoodTruckListComponent,
    FoodTruckResultComponent,
    FoodTruckProfileComponent,
    EditFoodtruckComponent,
    FoodTruckDetailComponent,
    GustFoodListComponent,
    ReviewFoodTruckComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    QuillEditorModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlw_Tyr_CyEIxfXfcRNxV3JpGB7jRwc4Q'
    })
  ],
  providers: [
    UserService,
    WebsiteService,
    PageService,
    WidgetService,
    FlickrService,
    SharedService,
    ProjectUserService,
    FoodTruckService,
    ReviewService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
