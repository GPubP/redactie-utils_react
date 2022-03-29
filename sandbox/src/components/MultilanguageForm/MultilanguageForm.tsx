import React, { FC, useContext, useMemo } from 'react';
import { LanguageHeaderContext } from '@acpaas-ui/react-editorial-components';
import { TextField } from '@acpaas-ui/react-components';
import { pathOr } from 'ramda';
import { Form, Formik, Field, FormikErrors, FormikValues } from 'formik';
import { FormikMultilanguageField, handleMultilanguageFormErrors, Language } from '@redactie/utils';

import {
  INITIAL_VALUES_MOCK,
  LANGUAGE_HEADER_MOCK_LANGUAGES,
} from './MultilanguageForm.mock';
import { FORM_VALIDATION_SCHEMA } from './MultilanguageForm.const';

const MultilanguageForm: FC<{activeLanguage: any}> = ({ activeLanguage }) => {
  const languages: any[] = LANGUAGE_HEADER_MOCK_LANGUAGES;
	const {setErrors} = useContext(LanguageHeaderContext);

  const onSave = (newValue: any) => {
    console.log(newValue);
  };
  const onChange = (formErrors: FormikErrors<FormikValues>, newValue: any) => {
		const newErrors = handleMultilanguageFormErrors(formErrors, newValue);
		if(newErrors !== formErrors) {
			setErrors(newErrors);
		}
	};

  return useMemo(() => (
      <div className="u-margin-top">
        <Formik
          onSubmit={onSave}
          initialValues={INITIAL_VALUES_MOCK}
					validationSchema={() => FORM_VALIDATION_SCHEMA(languages)}>
          {({ errors: formErrors, values: formValues, validateForm }) => {
						onChange(formErrors, formValues);

            return (
              <Form noValidate>
                <div className="row u-margin-bottom">
                  <div className="col-xs-12">
                    <Field
                      as={TextField}
                      label="Titel"
                      name="title"
                      state={formErrors.title && 'error'}
                    />
                  </div>
                </div>
                <div className="row u-margin-bottom">
                  <div className="col-xs-12">
                    <FormikMultilanguageField
                      asComponent={TextField}
                      label="Omschrijving"
                      name="url.description"
                      state={activeLanguage && pathOr(null, [activeLanguage.key], formErrors.url?.description) && 'error'}
                    />
                  </div>
                </div>
								<button onClick={validateForm}>validate</button>
              </Form>
            )
          }}
        </Formik>
      </div>
	), [activeLanguage, languages])
};

export default MultilanguageForm;
