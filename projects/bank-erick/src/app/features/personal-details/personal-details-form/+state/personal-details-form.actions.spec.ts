import {
  actionPersonalDetailsFormUpdate,
  actionPersonalDetailsFormReset
} from './personal-details-form.actions';
import { PersonalDetails } from '../../models/personal-details.model';
import { Country } from '../../../../core/models/country.model';
import { Gender } from '../../../../core/models/gender.model';

describe('Form Actions', () => {
  it('should create actionPersonalDetailsFormUpdate action', () => {
    const testForm: PersonalDetails = {
      firstName: 'test',
      lastName: 'test',
      dateOfBirth: new Date(),
      nationality: Country.ch,
      gender: Gender.female
    };
    const action = actionPersonalDetailsFormUpdate({
      form: testForm
    });
    expect(action.type).toEqual(actionPersonalDetailsFormUpdate.type);
    expect(action.form).toEqual(jasmine.objectContaining(testForm));
  });

  it('should create actionPersonalDetailsFormReset action', () => {
    const action = actionPersonalDetailsFormReset();
    expect(action.type).toEqual(actionPersonalDetailsFormReset.type);
  });
});
