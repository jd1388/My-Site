import { render, screen } from '@testing-library/svelte';

import Homepage from './index.svelte';

describe('home page', () => {
    it('displays the welcome message', () => {
        render(Homepage);

        const welcomeMessage = screen.getByText('Welcome to SvelteKit');

        expect(welcomeMessage).toBeVisible();
    });
});
