import { useContext } from 'react';

import { SiteContext, SiteContextValue } from '../../context';

const useSiteContext = (): SiteContextValue => {
	return useContext(SiteContext);
};

export default useSiteContext;
