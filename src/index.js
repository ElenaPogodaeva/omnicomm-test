import React from 'react';
import { createRoot } from 'react-dom';
import { App as ReactApp } from './App.js';
const el = document.getElementById('root');
const root = createRoot(el);
root.render(<ReactApp />);
