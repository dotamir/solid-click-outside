# solid-click-outside

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

A SolidJS hook to detect clicks outside of an element

## Quick start

Install it:

```bash
npm i solid-click-outside
# or
yarn add solid-click-outside
# or
pnpm add solid-click-outside
```

Use it:

```tsx
import useClickOutside from 'solid-click-outside'

const App = () => {
  const [target, setTarget] = createSignal<HTMLElement | undefined>();

  useClickOutside(target, () => {
    console.log('clicked outside')
  })

  return (
    <div ref={setTarget}>
      Click outside this box. Open console to see the message.
    </div>
  )
}
```
