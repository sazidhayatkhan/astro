import {create} from 'zustand';

const useDrawerStore = create((set) => ({
  isOpen: false,
  openDrawer: () => set({ isOpen: true }),
  closeDrawer: () => set({ isOpen: false }),
  
  isWishOpen:false,
  openWishDrawer:() => set({ isWishOpen: true }),
  closeWishDrawer:() => set({ isWishOpen: false }),

}));

export default useDrawerStore;
