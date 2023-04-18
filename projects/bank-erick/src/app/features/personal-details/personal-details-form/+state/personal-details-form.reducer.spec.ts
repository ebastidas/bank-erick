import { formReducer, initialState } from './personal-details-form.reducer';
import {
  actionPersonalDetailsFormReset,
  actionPersonalDetailsFormUpdate
} from './personal-details-form.actions';
import { Country } from '../../../../core/models/country.model';
import { Gender } from '../../../../core/models/gender.model';
import { PersonalDetails } from '../../models/personal-details.model';

describe('FormReducer', () => {
  const form: PersonalDetails = {
    firstName: 'test',
    lastName: 'test',
    dateOfBirth: new Date(),
    nationality: Country.ch,
    gender: Gender.female
  };

  it('should return the default state', () => {
    const action = {} as any;
    const state = formReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should update the form', () => {
    const action = actionPersonalDetailsFormUpdate({
      form: { ...form, firstName: 'updated' }
    });
    const state = formReducer(initialState, action);
    expect(state.form.firstName).toBe('updated');
  });

  it('should reset the form', () => {
    const action = actionPersonalDetailsFormReset();
    const state = formReducer(undefined, action);
    expect(state).toEqual(initialState);
  });
});
