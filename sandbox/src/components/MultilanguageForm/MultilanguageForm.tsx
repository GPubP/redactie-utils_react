import React, { FC, useEffect, useState } from 'react';
import { LanguageHeader } from '@acpaas-ui/react-editorial-components';
import { TextField } from '@acpaas-ui/react-components';

import {
  INITIAL_VALUES_MOCK,
  LANGUAGE_HEADER_MOCK_LANGUAGES,
  LANGUAGE_HEADER_MOCK_TOOLTIP,
} from './MultilanguageForm.mock';

import { FormikMultilanguageField, Language } from '@redactie/utils';
import { Form, Formik } from 'formik';
import { Field } from 'formik';

import { FORM_VALIDATION_SCHEMA } from './MultilanguageForm.const.js';
import { pathOr } from 'ramda';

const MultilanguageForm: FC = () => {
  const languages: Language[] = LANGUAGE_HEADER_MOCK_LANGUAGES;
  const [activeLanguage, setActiveLanguage] = useState<Language | null>();

  // setup preselected language
  useEffect(() => {
    if (Array.isArray(languages)) {
      setActiveLanguage(languages.find((l) => l.primary) || languages[0]);
    }
  }, [languages]);

  const onSave = (newValue: any) => {
    console.log(newValue);
  };
  const onChange = (newValue: any) => {
    //console.log('change', newValue);
  };
  const handleChangeLanguage = (lang: string) => {
    setActiveLanguage({ key: lang });
  };

  return (
    <LanguageHeader
      className="u-margin"
      languages={languages}
      activeLanguage={activeLanguage}
      tooltipText={LANGUAGE_HEADER_MOCK_TOOLTIP}
      onChangeLanguage={handleChangeLanguage}
    >
      <div className="u-margin-top">
        <Formik
          onSubmit={onSave}
          initialValues={INITIAL_VALUES_MOCK}
					validationSchema={() => FORM_VALIDATION_SCHEMA(languages)}>
          {({ errors, values, validateForm }) => {
            onChange(values);
						console.log(errors);
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
    </LanguageHeader>
  );
};

export default MultilanguageForm;
