import { fetchData } from '../fetchData';
import { Advantage } from './apiTypes';

interface ApiInterface {
  getAdvantages: (lang) => Promise<{ data: Advantage[] }>;
  /* addMeal: (restaurantId: number, mealId: number, fetures: Feature[] | never[]) => Promise<{ data: Basket }>;
  deleteMeal: (restaurantId: number, mealId: number, fetures: Feature[] | never[]) => Promise<{ data: Basket }>;
  emptyBasket: () => Promise<{ data: Basket }>; */
}

class Api implements ApiInterface {
  async getAdvantages(lang): Promise<{ data: Advantage[] }> {
    return fetchData(lang, 'advantages/');
  }
  /* async addMeal(restaurant_id: number, meal_id: number, features: Feature[] | never[]): Promise<{ data: Basket }> {
      return handleFetch('api/basket/add_meal', { method: 'POST', data: { restaurant_id, meal_id, features } });
  }
  async deleteMeal(restaurant_id: number, meal_id: number, features: Feature[] | never[]): Promise<{ data: Basket }> {
      return handleFetch('api/basket/delete_meal', { method: 'POST', data: { restaurant_id, meal_id, features } });
  }
  async emptyBasket(): Promise<{ data: Basket }> {
      return handleFetch('api/basket/empty', { method: 'POST' });
  }
  async placeOrder(userId: string, restaurantId: number): Promise<OrderState> {
      return handleFetch('api/orders', { method: 'POST', data: { restaurantId, userId } });
  } */
}

export const api = new Api();
