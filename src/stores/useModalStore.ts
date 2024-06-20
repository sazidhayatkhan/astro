import {create} from 'zustand';

const useModalStore = create((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),

  isPurchaseModalOpen: false,
  openPurchaseModal: () => set({ isPurchaseModalOpen: true }),
  closePurchaseModal: () => set({ isPurchaseModalOpen: false }),

}));

export default useModalStore;
