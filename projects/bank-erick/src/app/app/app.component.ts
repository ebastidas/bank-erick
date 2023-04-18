import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import {
  AppState,
  LocalStorageService,
  selectEffectiveTheme,
  selectSettingsLanguage
} from '../core/core.module';
import { actionSettingsChangeLanguage } from '../core/settings/settings.actions';

@Component({
  selector: 'bkek-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  year = new Date().getFullYear();
  logo = 'assets/logo.png';
  languages = ['en', 'es'];
  navigation = [
    { link: 'strategy', label: 'bkek.menu.strategy' },
    { link: 'personal-details', label: 'bkek.menu.personal-details' }
  ];
  navigationSideMenu = [...this.navigation];

  language$: Observable<string> | undefined;
  theme$: Observable<string> | undefined;

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  onLanguageSelect(event: MatSelectChange) {
    this.store.dispatch(
      actionSettingsChangeLanguage({ language: event.value })
    );
  }
}
