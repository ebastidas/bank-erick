import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from '../../../../core/core.module';
import { actionPersonalDetailsFormUpdate } from './personal-details-form.actions';

export const FORM_KEY = 'personaldetails.form';

@Injectable()
export class FormEffects {
  persistForm = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionPersonalDetailsFormUpdate),
        tap((action) =>
          this.localStorageService.setItem(FORM_KEY, { form: action.form })
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}
}
