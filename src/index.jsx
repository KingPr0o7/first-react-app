import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './sass/app.css'

import Movies from './Movies';
import Nav from './Nav';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Nav />
    </StrictMode>
)

//ReactDOM.render(<App />, document.getElementById('root'))