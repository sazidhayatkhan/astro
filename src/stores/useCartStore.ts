import {create} from 'zustand';

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product:any) => set((state:any) => {
        const existingProduct = state.cart.find((item: { id: any; }) => item.id === product.id);
        if (existingProduct) {
            return {
                cart: state.cart.map((item: { id: any; quantity: number; }) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        }
        return {
            cart: [...state.cart, { ...product, quantity: 1 }]
        };
    }),
    removeFromCart: (productId:any) => set((state:any) => ({
        cart: state.cart.filter((item: { id: any; }) => item.id !== productId)
    })),
    clearCart: () => set(() => ({
        cart: []
    }))
}));

export default useCartStore;
