import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { AppState, selectSettingsLanguage } from '../../core/core.module';

@Injectable()
export class PersonalDetailsEffects {
  setTranslateServiceLanguage = createEffect(
    () => () =>
      this.store.pipe(
        select(selectSettingsLanguage),
        distinctUntilChanged(),
        tap((language) => this.translateService.use(language))
      ),
    { dispatch: false }
  );

  constructor(
    private store: Store<AppState>,
    private translateService: TranslateService
  ) {}
}
