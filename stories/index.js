import {storiesOf} from '@storybook/vue';
import Hand from '../src/components/Hand';
import Card from '../src/components/Card';

storiesOf('Hello World', module)
    .add('with text', () => '<Hand>with text</Hand>')
    .add('with emoji', () => '<Hand>😀 😎 👍 💯</Hand>')
    .add('as a component', () => ({
        components: {Hand},
        template: '<Hand msg="Welcome to Your Vue.js App"/>'
    }));

storiesOf('Card', module)
    .add('as a component', () => ({
        components: { Card },
        data() {
            return {
                card: { title: "Test Title" }
            }
        },
        template: '<Card :card="card"></Card>'
    }))