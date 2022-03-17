import '@a-ui/core/dist/main.css';
import { Container } from '@acpaas-ui/react-editorial-components';
import React, { useState, useEffect } from 'react';
import { LanguageHeader, LanguageHeaderContext } from '@acpaas-ui/react-editorial-components';
import { Language } from '@redactie/utils';

import { MultilanguageForm } from './components';
import {
	LANGUAGE_HEADER_MOCK_LANGUAGES,
	LANGUAGE_HEADER_MOCK_TOOLTIP,
} from './components/MultilanguageForm/MultilanguageForm.mock';
function App() {
	const languages: Language[] = LANGUAGE_HEADER_MOCK_LANGUAGES;
	const [activeLanguage, setActiveLanguage] = useState<Language | null>();

	  // setup preselected language
		useEffect(() => {
			if (Array.isArray(languages)) {
				setActiveLanguage(languages.find((l) => l.primary) || languages[0]);
			}
		}, [languages]);

	if(!activeLanguage) {
		return null;
	}

	return (
		<Container>
			<LanguageHeader
				className="u-margin"
				languages={languages}
				activeLanguage={activeLanguage}
				tooltipText={LANGUAGE_HEADER_MOCK_TOOLTIP}
				onChangeLanguage={(language: string) => setActiveLanguage({ key: language })}
			>
				<MultilanguageForm activeLanguage={activeLanguage}/>
			</LanguageHeader>
		</Container>
	);
}

export default App;
