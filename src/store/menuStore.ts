import { MenuActions, MenuState } from "@/types/types"
import { create } from "zustand"




export const useMenuStore = create<MenuState & MenuActions>((set) => ({
  menuIsOpen: false,
  toggleMenu: () => set((state) => ({ menuIsOpen: !state.menuIsOpen })),

}))
