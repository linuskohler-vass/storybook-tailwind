import '../src/styles/tailwind.css';
import '../src/index.jsx';
import '../src/helpers/handlebars.js';

import { doInit } from '../src/index.jsx';

export const decorators = [
    (Story) => {
        const story = Story();

        requestAnimationFrame(() => {
            doInit();
        });

        return story;
    },
];
