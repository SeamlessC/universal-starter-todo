import {fireEvent, render, screen} from '@testing-library/react'
import { it, describe, expect } from "vitest";

import React, { useState } from 'react';
import DashboardPreferences from './DashboardPreferences';
import { act, createRenderer } from 'react-dom/test-utils';

// const renderer = createRenderer;
const defaultComponent = <DashboardPreferences />;

describe('Dashboard Templates', () => {
  it('Title testing', () => {
    render(defaultComponent)
    expect(screen.getByText('Fill out your dashboard preferences')).toBeInTheDocument();
  });

  it('should have correct label', () => {
    const { getByTestId } = render(defaultComponent);
    expect(getByTestId('preferences-form')).toBeTruthy();
  });

  it('Continue button is clickable', async () => {
    const { getByTestId } = render(defaultComponent);
    const ContinueButton = getByTestId('Continue-target-btn');

    await act(async () => {
      fireEvent.click(ContinueButton);
    });

    expect(getByTestId('Continue-target-btn')).toBeVisible();
  });

  it('A valid form data submit', async () => {
    const { getByTestId } = render(defaultComponent);
    const ContinueButton = getByTestId('Continue-target-btn');

    await act(async () => {
      fireEvent.click(ContinueButton);
    });

    expect(getByTestId('dashboardName')).toBeInTheDocument();
    expect(getByTestId('languageCurency')).toBeInTheDocument();
    expect(getByTestId('timePeiod')).toBeInTheDocument();
    expect(getByTestId('password')).toBeInTheDocument();
  });

//   it('A validation message', async () => {
//     const { getByTestId } = render(defaultComponent);
//     const ContinueButton = getByTestId('Continue-target-btn');

//     await act(async () => {
//       fireEvent.click(ContinueButton);
//     });

//     expect(getByTestId('dashboardName')).toHaveTextContent(
//       'Please Enter Dashboard Name',
//     );
//     expect(getByTestId('languageCurency')).toHaveTextContent(
//       'Please Enter Language(Region) & Currency',
//     );
//     expect(getByTestId('timePeiod')).toHaveTextContent(
//       'Please Enter Time Period',
//     );
//     expect(getByTestId('password')).toHaveTextContent(
//       'Please Enter Password',
//     );
//   });
})
