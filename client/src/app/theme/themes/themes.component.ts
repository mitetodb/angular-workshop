import { Component, Input } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { IPost, ITheme } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-theme',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  themes: ITheme[] | undefined;
  posts: IPost[] | undefined;

  constructor(private contentService: ContentService, private userService: UserService) {
    this.fetchThemes();
    this.fetchPosts();
  }

  fetchThemes(): void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);
  }

  fetchPosts(): void {
    this.posts = undefined;
    this.contentService.loadPosts().subscribe(posts => this.posts = posts);
  }
}
