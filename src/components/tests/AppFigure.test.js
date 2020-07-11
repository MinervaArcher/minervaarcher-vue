import { mount } from '@vue/test-utils';
import AppFigure from '../AppFigure.vue';

describe('AppFigure', () => {
    const wrapper = mount(AppFigure, {
        propsData: {
            src: 'test.png',
            alt: 'fake image',
            caption: 'This is not a real image'
        }
    });
    test('to contain a figure element', () => {
        expect(wrapper.get('figure'));
    });
    test('to contain an img element', () => {
        expect(wrapper.get('img'));
    });
    test('to contain a figcaption element', () => {
        expect(wrapper.get('figcaption'));
    });
});