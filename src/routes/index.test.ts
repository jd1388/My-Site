import { render, screen } from '@testing-library/svelte';

import Homepage from './index.svelte';

describe('home page', () => {
    it('displays the hero message', () => {
        render(Homepage);

        const helloText = screen.getByText('Hello!');
        const subheaderText = screen.getByText('I\'m Jared, and I write code');

        expect(helloText).toBeVisible();
        expect(subheaderText).toBeVisible();
    });

    it('has a link to Github', () => {
        render(Homepage);

        const githubLink = screen.getByRole('link', { name: 'Github' });

        expect(githubLink).toBeVisible();
        expect(githubLink).toHaveAttribute('href', 'https://github.com/jd1388');
    });

    it('has a link to LinkedIn', () => {
        render(Homepage);

        const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' });

        expect(linkedinLink).toBeVisible();
        expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/griffinjared/');
    });

    it('has a link to my email', () => {
        render(Homepage);

        const emailLink = screen.getByRole('link', { name: 'Email' });

        expect(emailLink).toBeVisible();
        expect(emailLink).toHaveAttribute('href', 'mailto:jgriffin@onmail.com');
    });
});
