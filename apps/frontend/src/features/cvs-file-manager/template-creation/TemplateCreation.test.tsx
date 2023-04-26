// import React, { useState } from "react";
// import {fireEvent, render, screen, waitFor} from '@testing-library/react';
// import { it, describe, expect, test } from "vitest";
// import userEvent from '@testing-library/user-event';

// import { CVSTemplateCreation } from "./CVSTemplateCreation";
// import { CVSTemplateCreation01 } from "./CVSTemplateCreation01";
// import CVSTemplateCreation02 from "./CVSTemplateCreation02";

// const defaultComponent = <CVSTemplateCreation />;

// describe("Template Creation Tetsing", () => {

// 	// it('Title testing', () => {
//     //     render(defaultComponent)
//     //     expect(screen.getByText('Wants to know which file types are supported?')).toBeInTheDocument();
//     //   });

// });

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CVSTemplateCreation } from "./CVSTemplateCreation";
import { CVSTemplateCreation01 } from "./CVSTemplateCreation01";

describe("CVS Template Creation", () => {
	it("Titile test", () => {
		const { getByText } = render(<CVSTemplateCreation />);
		const titleElement = getByText(/Select Template/i);
		expect(titleElement).toBeInTheDocument();
	});

	it("Drag and drop test", () => {
		const setFiles = jest.fn();
		const { getByText } = render(<CVSTemplateCreation01 setfiles={setFiles} />);
		const dropzoneElement = getByText(/Drag and drop file here/i);
		expect(dropzoneElement).toBeInTheDocument();
	});

	it("call setfile function", () => {
		const setFiles = jest.fn();
		const { getByText } = render(<CVSTemplateCreation01 setfiles={setFiles} />);
		const dropzoneElement = getByText(/Drag and drop file here/i);

		fireEvent.drop(dropzoneElement, {
			dataTransfer: {
				files: [new File([], "test.csv")],
			},
		});

		expect(setFiles).toHaveBeenCalledWith([new File([], "test.csv")]);
	});
});

