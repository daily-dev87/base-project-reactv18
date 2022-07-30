import { createSlice, createSelector } from '@reduxjs/toolkit';
import i18n from '../i18n';

export const changeLanguage = (languageId) => (dispatch, getState) => {
  return i18n.changeLanguage(languageId).then(() => {
    dispatch(i18nSlice.actions.languageChanged(languageId));
  });
};

const i18nSlice = createSlice({
  name: 'i18n',
  initialState: {
    language: i18n.options.lng,

  },
  reducers: {
    languageChanged: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const selectCurrLangDir = createSelector(
  [({ i18n: i18nState }) => i18nState.language],
  (language) => {
    return i18n.dir(language);
  }
);

export default i18nSlice.reducer;
