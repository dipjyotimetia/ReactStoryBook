import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import List from './List';

export const list = {

}

export const acions = {
    props: action('props'),
}

storiesOf('List', module)
    .addDecorator(withKnobs)
    .add('default', () => {
        return <List list={object('list', { ...list })}{...acions} />;
    })