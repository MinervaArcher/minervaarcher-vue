import { mount } from '@vue/test-utils';
import AppFooter from '../AppFooter.vue';

describe('AppFooter', () => {
    const wrapper = mount(AppFooter);
    test('to contain a footer element', () => {
        expect(wrapper.get('footer'));
    });
});