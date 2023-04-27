import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {it, describe, expect} from 'vitest';
import {} from '@testing-library/user-event'

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';

import CVSFileManager from './CVSFileManager';
import { CVSAccordion } from './CVSAccordion'
// import {jest} from '@testing-library/jest-dom'

const defaultComponent = <CVSFileManager />;

describe('CVS File Manager', () => {
    it('Title testing', () => {
        // render(defaultComponent)
        // expect(screen.getByText('CVS File Manager')).toBeInTheDocument();
    });
});

