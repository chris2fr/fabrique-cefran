/* eslint-disable no-new */

import '@frds/breadcrumb/_dist.scss';

import { Initializer } from '@frds/utilities/src/scripts/init/Initializer';
import { BreadcrumbButton } from './index';

new Initializer('.${prefix}-breadcrumb__button', [BreadcrumbButton]);
