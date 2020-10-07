import { createContext } from 'react';

import { SiteContextValue } from './SiteContext.types';

const SiteContext = createContext<SiteContextValue>({ siteId: '' });

export default SiteContext;
