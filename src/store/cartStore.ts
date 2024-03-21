import { CartActions, CartState } from '@/types/types';
import { create } from 'zustand';

export const useCartStore = create<CartState & CartActions>((set) => ({
  cartIsOpen: true,
  toggleCart: () => set((state) => ({ cartIsOpen: !state.cartIsOpen })),
}))