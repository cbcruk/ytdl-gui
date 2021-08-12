import create from 'zustand'

type State = {
  ids: string[]
  setIds: (ids: string[]) => void
  removeId: (targetId: string) => void
}

const useMediaStore = create<State>((set) => ({
  ids: [],
  setIds: (ids) => {
    set((state) => ({
      ids: [...new Set(state.ids.concat(ids))],
    }))
  },
  removeId: (targetId) =>
    set((state) => ({
      ids: state.ids.filter((id) => id !== targetId),
    })),
}))

export default useMediaStore
