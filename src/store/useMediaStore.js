import create from 'zustand'

const useMediaStore = create((set) => ({
  ids: [],
  setIds: (ids) =>
    set((state) => ({
      ids: [...new Set(state.ids.concat(ids))],
    })),
  removeId: (targetId) =>
    set((state) => ({
      ids: state.ids.filter((id) => id !== targetId),
    })),
}))

export default useMediaStore
