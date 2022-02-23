import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { App } from '../components/App';
import '../styles/global.css';

export default {
	title: 'MyComponent',
	component: App,
	parameters: {
		viewport: {
			viewports: INITIAL_VIEWPORTS,
			defaultViewport: 'iphonex',
		},
	},
} as ComponentMeta<typeof App>;

export const Simple: ComponentStory<typeof App> = () => <App />;
Simple.parameters = {
	viewport: {
		disable: true,
	},
};

export const Mobile: ComponentStory<typeof App> = () => <App />;
Mobile.parameters = {
	viewport: {
		defaultViewport: 'iphonex',
	},
};
