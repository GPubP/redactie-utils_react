import React, { FC, useEffect, useState, useContext } from 'react';
import { LanguageHeaderContext } from '@acpaas-ui/react-editorial-components';
import { TextField } from '@acpaas-ui/react-components';
import { pathOr } from 'ramda';
import { Form, Formik, Field } from 'formik';
import { FormikMultilanguageField, handleMultilanguageFormErrors, Language } from '@redactie/utils';

import {
  INITIAL_VALUES_MOCK,
  LANGUAGE_HEADER_MOCK_LANGUAGES,
} from './MultilanguageForm.mock';
import { FORM_VALIDATION_SCHEMA } from './MultilanguageForm.const.js';

const MultilanguageForm: FC<{activeLanguage: Language}> = ({ activeLanguage }) => {
  const languages: Language[] = LANGUAGE_HEADER_MOCK_LANGUAGES;
	const {errors, setErros} = useContext(LanguageHeaderContext)

  const onSave = (newValue: any) => {
    console.log(newValue);
  };
  const onChange = (newValue: any) => {
    //console.log('change', newValue);
	};

  return (
      <div className="u-margin-top">
        <Formik
          onSubmit={onSave}
          initialValues={INITIAL_VALUES_MOCK}
					validationSchema={() => FORM_VALIDATION_SCHEMA(languages)}>
          {({ errors: formErrors, values, validateForm }) => {
            onChange(values);
						handleMultilanguageFormErrors(formErrors, values)
            return (
              <Form noValidate>
                <div className="row u-margin-bottom">
                  <div className="col-xs-12">
                    <Field
                      as={TextField}
                      label="Titel"
                      name="title"
                      state={errors.title && 'error'}
                    />
                  </div>
                </div>
                <div className="row u-margin-bottom">
                  <div className="col-xs-12">
                    <FormikMultilanguageField
                      asComponent={TextField}
                      label="Omschrijving"
                      name="description"
                      state={activeLanguage && pathOr(null, [activeLanguage.key], errors.description) && 'error'}
                    />
                  </div>
                </div>
								<button onClick={validateForm}>validate</button>
              </Form>
            )
          }}
        </Formik>
      </div>
  );
};

export default MultilanguageForm;
