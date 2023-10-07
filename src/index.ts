import { Accessor, createEffect, onCleanup } from 'solid-js'

export interface Callback<T extends Event = Event> {
  (event: T): void
}

const useClickOutside = (ref: Accessor<HTMLElement | undefined>, callback: Callback) => {
  createEffect(() => {
    const listener = (event: Event) => {
      const element = ref()
      if (!element || element.contains(event.target as Node)) {
        return
      }

      callback(event)
    }
    document.addEventListener('click', listener)

    onCleanup(() => document.removeEventListener('click', listener))
  })
}

export default useClickOutside
