import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import { it, describe, expect } from "vitest";
import userEvent from '@testing-library/user-event'

import { TemplateTypes } from './TemplateTypes';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { HomeDashboard } from './HomeDashboard';
import { TemplateGrid } from './TemplateGrid';


describe('Dashboard Templates', () => {
  it('Title testing', () => {
    render(<TemplateTypes setTemplateType={undefined} />)
    expect(screen.getByRole('heading')).toHaveTextContent('Dashboard Templates');
  });

  it('label testing', () => {
    render(<TemplateTypes setTemplateType={undefined} />)
    expect(screen.getByText('Periodic Dashboards')).toBeInTheDocument();
    expect(screen.getByText('Campaign Dashboards')).toBeInTheDocument();
    expect(screen.getByText('Rolling Dashboards')).toBeInTheDocument();
  });

  it('Learn more click', () => {
    render(<TemplateTypes setTemplateType={undefined} />)
    userEvent.click(screen.getByRole('showHide'))
    expect(screen.getByRole('showHide')).toHaveTextContent('aghaki aerhg aeiuhg aeuigha aeruihg; aeriguh;aeg aeiugha egaieuhg aegaieug;ae aeiugh;aehig aeiughaaeg aergae aegy aeriug egiaeig aeyglae aeigaleiughii aghaki aerhg aeiuhg aeuigha aeruihg; aeriguh;aeg aeiugha egaieuhg aegaieug;ae aeiugh;aehig aeiughaaeg aergae aegy aeriug egiaeig aeyglae aeigaleiughii aghaki aerhg aeiuhg aeuigha aeruihg; aeriguh;aeg aeiugha egaieuhg aegaieug;ae aeiugh;aehig aeiughaaeg aergae aegy aeriug egiaeig aeyglae aeigaleiughii aghaki aerhg aeiuhg aeuigha aeruihg; aeriguh;aeg aeiugha egaieuhg aegaieug;ae eiugh;aehig aeiughaaeg aergae aegy aeriug egiaeig aeyglae aeigaleiughii');
  });
})


describe('Template Grid', () => {
  it('Card testing', async () => {
    render(<TemplateGrid templateType={'periodic'} />)
    const element = screen.getByTestId('Blank Periodic Dashboard')
    fireEvent.mouseOver(element)
    expect(element).toHaveStyle('textAlign: center');
  });

  it('image testing', () => {
    render(<TemplateGrid templateType={'periodic'} />)
    const element = screen.getByTestId('Blank Periodic Dashboard')
    // expect(element).;
  });
})