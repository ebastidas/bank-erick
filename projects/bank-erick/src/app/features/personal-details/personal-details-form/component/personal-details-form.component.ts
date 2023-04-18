import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { NotificationService } from '../../../../core/core.module';
import { Country } from '../../../../core/models/country.model';
import { Gender } from '../../../../core/models/gender.model';
import { State } from '../../personal-details.state';
import {
  actionPersonalDetailsFormReset,
  actionPersonalDetailsFormUpdate
} from '../+state/personal-details-form.actions';
import { selectFormState } from '../+state/personal-details-form.selectors';
import { PersonalDetails } from '../../models/personal-details.model';

@Component({
  selector: 'bkek-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsFormComponent implements OnInit {
  formSubmitted: boolean = false;

  form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    nationality: ['', [Validators.required]],
    gender: ['', [Validators.required]]
  });

  Gender = Gender;
  countries = Object.keys(Country);

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private translate: TranslateService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.store
      .pipe(select(selectFormState), take(1))
      .subscribe((form) => this.form.patchValue(form.form));
  }

  update(form: PersonalDetails) {
    this.store.dispatch(actionPersonalDetailsFormUpdate({ form }));
  }

  save() {
    this.store.dispatch(
      actionPersonalDetailsFormUpdate({ form: this.form.value })
    );
  }

  submit() {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.save();
      this.notificationService.info(
        this.translate.instant('bkek.personal-details.form.submit-success')
      );
    }
  }

  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
    this.store.dispatch(actionPersonalDetailsFormReset());
  }
}
