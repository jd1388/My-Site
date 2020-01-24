import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import Star from './Star';
import { StyledStarIcon, StyledStarOutlineIcon } from './styles';

describe('Star', () => {
    let starWrapper;

    const chance = new Chance();
    const renderComponent = (props = {}) => {
        const appliedProps = {
            strength: chance.d6(),
            limit: chance.d6(),
            ...props
        };

        return shallow(<Star {...appliedProps} />)
    }

    beforeEach(() => {
        starWrapper = renderComponent();
    });

    it('is wrapped in a span', () => {
        expect(starWrapper.type()).toEqual('span');
    });

    it('displays a StyledStarIcon if strength is greater than limit', () => {
        const strength = chance.natural({
            min: 3,
            max: 5
        });
        const limit = chance.natural({
            min: 0,
            max: strength - 1
        });

        starWrapper = renderComponent({
            strength,
            limit
        });

        const starIcon = starWrapper.childAt(0);

        expect(starIcon.type()).toEqual(StyledStarIcon);
    });

    it('displays a StyledStarOutlineIcon if strength is less than or equal to limit', () => {
        const limit = chance.natural({
            min: 3,
            max: 5
        });
        const strength = chance.natural({
            min: 0,
            max: limit
        });

        starWrapper = renderComponent({
            strength,
            limit
        });

        const outlineStarIcon = starWrapper.childAt(0);

        expect(outlineStarIcon.type()).toEqual(StyledStarOutlineIcon);
    });
});
