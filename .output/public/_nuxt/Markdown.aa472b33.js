import s from './ContentSlot.9270c38e.js'
import { h as o, i as m, m as u, z as f } from './entry.5fb35958.js'
import './utils.07f1fbc1.js'
const l = o({
  name: 'Markdown',
  extends: s,
  setup(t) {
    const { parent: e } = f(),
      { between: n, default: a } = m(),
      r = u(() => (typeof t.unwrap == 'string' ? t.unwrap.split(' ') : ['*']))
    return { fallbackSlot: a, tags: r, between: n, parent: e }
  }
})
export { l as default }
