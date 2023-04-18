import { createAction, props } from '@ngrx/store';
import { PersonalDetails } from '../../models/personal-details.model';

export const actionPersonalDetailsFormUpdate = createAction(
  '[Personal Details Form] Update',
  props<{ form: PersonalDetails }>()
);

export const actionPersonalDetailsFormReset = createAction(
  '[Personal Details Form] Reset'
);
