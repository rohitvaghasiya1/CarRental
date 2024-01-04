// tests/pages/index.spec.js
import { mount } from '@vue/test-utils';
import Index from '@/pages/index.vue';

describe('Index.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Index);
    expect(wrapper.exists()).toBe(true);
  });

  it('searchCars function is called on Enter key press', async () => {
    const wrapper = mount(Index);
    const searchCarsMock = jest.fn();
    wrapper.vm.searchCars = searchCarsMock;

    await wrapper.setData({ searchQuery: 'test' });
    await wrapper.find('input').trigger('keyup.enter');

    expect(searchCarsMock).toHaveBeenCalled();
  });
});
