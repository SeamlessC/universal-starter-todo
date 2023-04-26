import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { it, describe, expect } from "vitest";
// import userEvent from '@testing-library/user-event';

import CVSFileManager from "./CVSFileManager";


// const defaultComponent = <CVSFileManager />;

// describe("CVS File Manager Testing", () => {
// 	it("Title testing", () => {
// 		render(defaultComponent);
// 		expect(screen.getByText("CVS File Manager")).toBeInTheDocument();
// 	});

// 	it("Title testing", () => {
// 		render(defaultComponent);
// 		expect(screen.getByText("CVS Template Presets")).toBeInTheDocument();
// 	});
// });

describe('CVS File Manager', () => {
    it('Testing texts', () => {
      render(<CVSFileManager />);

      expect(screen.getByTitle('CVS File Manager')).toBeInTheDocument();
      
      // expect(screen.getByText('CVS Template Presets')).toBeInTheDocument();

      // expect(screen.getByLabelText('Create CVS Template')).toBeInTheDocument();
      // expect(screen.getByPlaceholderText('search for cvs files...')).toBeInTheDocument();
    });
  });

