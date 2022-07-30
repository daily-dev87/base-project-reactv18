import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPart(props) {

	const {t} = useTranslation();

	return (
		<div>
            { t('appName') }
        </div>
	);
}

export default MainPart;
