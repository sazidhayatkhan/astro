import create from 'zustand';

const useDrawerStore = create((set) => ({
  isOpen: false,
  openDrawer: () => set({ isOpen: true }),
  closeDrawer: () => set({ isOpen: false }),
}));

export default useDrawerStore;
