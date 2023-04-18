import { AppState } from '../core.module';

export type Language = 'en' | 'es';

export interface SettingsState {
  language: string;
  theme: string;
}

export interface State extends AppState {
  settings: SettingsState;
}
