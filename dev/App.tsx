import { type Component, createSignal } from 'solid-js'
import useClickOutside from '../src'

const App: Component = () => {
  const [target, setTarget] = createSignal<HTMLElement | undefined>();

  useClickOutside(target, () => {
    console.log('clicked outside')
  })

  return (
  <div class='flex flex-col items-center justify-center h-screen py-2'>
      <div ref={setTarget} class="relative p-12 rounded-md bg-slate-300">
        Click outside this box. Open console to see the message.
      </div>
    </div>
  )
}

export default App
