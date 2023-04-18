import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../../../environments/environment';
import { SharedModule } from '../../shared/shared.module';
import { FormEffects } from './personal-details-form/+state/personal-details-form.effects';
import { PersonalDetailsFormComponent } from './personal-details-form/component/personal-details-form.component';
import { PersonalDetailsRoutingModule } from './personal-details-routing.module';
import { PersonalDetailsEffects } from './personal-details.effects';
import { FEATURE_NAME, reducers } from './personal-details.state';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/personal-details/`,
    '.json'
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SharedModule,
    PersonalDetailsRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([PersonalDetailsEffects, FormEffects])
  ],
  declarations: [PersonalDetailsFormComponent]
})
export class PersonalDetailsModule {
  constructor() {}
}
