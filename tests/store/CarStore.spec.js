// tests/store/CarStore.spec.js
import { createPinia } from 'pinia';
import { useCarStore } from '@/store/CarStore';

describe('CarStore', () => {
  let pinia;
  let carStore;

  beforeEach(() => {
    pinia = createPinia();
    carStore = useCarStore(pinia);
  });

  it('fetchCars action updates cars state', async () => {
    // Mock the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: [{ id: 1, name: 'Car1' }], meta: { last_page: 1 } }),
      })
    );

    await carStore.fetchCars();

    expect(carStore.cars).toEqual([{ id: 1, name: 'Car1', isFavorite: false }]);
    expect(carStore.currentPage).toBe(1);
    expect(carStore.totalPages).toBe(1);
  });

  it('toggleFavorite action toggles isFavorite property', () => {
    carStore.cars = [{ id: 1, name: 'Car1', isFavorite: false }];

    carStore.toggleFavorite(1);

    expect(carStore.cars[0].isFavorite).toBe(true);
  });
});
