import { createSelector } from '@ngrx/store';
import {
  PersonalDetailsState,
  selectPersonalDetails
} from '../../personal-details.state';

export const selectFormState = createSelector(
  selectPersonalDetails,
  (state: PersonalDetailsState) => state.form
);
