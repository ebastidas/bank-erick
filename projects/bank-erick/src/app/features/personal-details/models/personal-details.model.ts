import { Country } from '../../../core/models/country.model';
import { Gender } from '../../../core/models/gender.model';

export interface PersonalDetails {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  nationality: Country;
  gender: Gender;
}
