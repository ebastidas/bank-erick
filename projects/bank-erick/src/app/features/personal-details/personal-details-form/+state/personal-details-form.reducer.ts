import { PersonalDetailsFormState } from './personal-details-form.model';
import {
  actionPersonalDetailsFormReset,
  actionPersonalDetailsFormUpdate
} from './personal-details-form.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { PersonalDetails } from '../../models/personal-details.model';

export const initialState: PersonalDetailsFormState = {
  form: {} as PersonalDetails
};

const reducer = createReducer(
  initialState,
  on(actionPersonalDetailsFormUpdate, (state, { form }) => ({
    ...state,
    form
  })),
  on(actionPersonalDetailsFormReset, () => initialState)
);

export function formReducer(
  state: PersonalDetailsFormState | undefined,
  action: Action
) {
  return reducer(state, action);
}
