import { _ as a } from './nuxt-link.5a681159.js'
import { h as o, o as n, c as s, B as f, C as c } from './entry.5fb35958.js'
const l = o({
  __name: 'ProseA',
  props: { href: { type: String, default: '' }, target: { type: String, default: void 0, required: !1 } },
  setup(e) {
    return (t, u) => {
      const r = a
      return n(), s(r, { href: e.href, target: e.target }, { default: f(() => [c(t.$slots, 'default')]), _: 3 }, 8, ['href', 'target'])
    }
  }
})
export { l as default }
