import React, { FC, useContext, useMemo } from 'react';
import { LanguageHeaderContext } from '@acpaas-ui/react-editorial-components';
import { TextField } from '@acpaas-ui/react-components';
import { pathOr } from 'ramda';
import { Form, Formik, Field, FormikErrors, FormikValues } from 'formik';
import { FormikMultilanguageField, FormikOnChangeHandler, handleMultilanguageFormErrors, LanguageErrors } from '@redactie/utils';

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
  const onChange = (newValue: any, formErrors: FormikErrors<FormikValues>) => {
		const newErrors = handleMultilanguageFormErrors(formErrors, newValue, (errors: LanguageErrors) => {
			return Object.keys(errors).reduce((acc, lang) => {
				return {
					...acc,
					[lang]: errors[lang].filter(error => error.startsWith('url.'))
				}
			}, {});
		});

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
            return (
              <Form noValidate>
								<FormikOnChangeHandler
									delay={5000}
									onChange={console.log}
									onError={onChange}
								/>
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
                <div className="row u-margin-bottom">
                  <div className="col-xs-12">
                    <FormikMultilanguageField
                      asComponent={TextField}
                      label="Slug omschrijving"
                      name="slug.description"
                      state={activeLanguage && pathOr(null, [activeLanguage.key], formErrors.slug?.description) && 'error'}
                    />
                  </div>
                </div>
								<div className="row u-margin-bottom">
                  <div className="col-xs-12">
                    <FormikMultilanguageField
                      asComponent={TextField}
                      label="Info"
                      name="info"
                      state={activeLanguage && pathOr(null, [activeLanguage.key], formErrors.info) && 'error'}
                    />
                  </div>
                </div>
								<button onClick={validateForm}>validate</button>
              </Form>
            )
          }}
        </Formik>
      </div>
	// eslint-disable-next-line react-hooks/exhaustive-deps
	), [activeLanguage, languages])
};

export default MultilanguageForm;
