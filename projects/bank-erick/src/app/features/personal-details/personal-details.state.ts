import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../core/core.module';
import { PersonalDetailsFormState } from './personal-details-form/+state/personal-details-form.model';
import { formReducer } from './personal-details-form/+state/personal-details-form.reducer';

export const FEATURE_NAME = 'personaldetails';
export const selectPersonalDetails = createFeatureSelector<
  State,
  PersonalDetailsState
>(FEATURE_NAME);
export const reducers: ActionReducerMap<PersonalDetailsState> = {
  form: formReducer
};

export interface PersonalDetailsState {
  form: PersonalDetailsFormState;
}

export interface State extends AppState {
  personaldetails: PersonalDetailsState;
}
