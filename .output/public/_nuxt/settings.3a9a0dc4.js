import { M as o, c as a, B as n, R as l, o as r, S as e, u as i } from './entry.5fb35958.js'
import { u } from './user.5eed4219.js'
const c = e('div', null, [e('h1', { class: 'font-bold text-2xl' }, 'Settings')], -1),
  _ = { class: 'flex gap-2 items-center' },
  d = e('label', { for: 'email' }, 'Email', -1),
  m = ['value'],
  S = {
    __name: 'settings',
    setup(p) {
      const s = u()
      return (
        o(() => {
          s.refreshSession()
        }),
        (f, h) => (
          r(),
          a(l, null, {
            default: n(() => {
              var t
              return [e('div', null, [c, e('div', _, [d, e('input', { type: 'text', name: 'email', class: 'p-2 outline-none border', value: (t = i(s).user) == null ? void 0 : t.email, disabled: '' }, null, 8, m)])])]
            }),
            _: 1
          })
        )
      )
    }
  }
export { S as default }
