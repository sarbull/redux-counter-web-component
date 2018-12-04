// Add shims and polyfills
import 'hybrids/shim';

// Import global stylesheets
import './style.less';

import { define } from 'hybrids';
import ReduxCounter from './redux-counter';

// define <redux-counter> custom element
define('redux-counter', ReduxCounter);