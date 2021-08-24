import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentService } from './content.service';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './shared/home/home.component';
import { ThemeModule } from './theme/theme.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    ThemeModule
  ],
  providers: [
    ContentService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
