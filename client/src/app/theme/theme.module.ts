import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';




@NgModule({
  declarations: [
    ThemesComponent,
    NewThemeComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }
