import { M as n, c as l, B as u, R as i, o as c, S as e, u as o, U as r } from './entry.5fb35958.js'
import { u as d } from './user.5eed4219.js'
const p = e('h1', { class: 'font-bold text-2xl' }, 'About', -1),
  _ = { class: 'p-2 bg-slate-100' },
  m = { class: 'p-2 bg-emerald-100' },
  x = {
    __name: 'about',
    setup(b) {
      const s = d()
      return (
        n(() => {
          s.refreshSession()
        }),
        (f, t) => (c(), l(i, null, { default: u(() => [e('div', null, [e('button', { onClick: t[0] || (t[0] = (...a) => o(s).logout && o(s).logout(...a)), class: 'block my-2 p-2 bg-emerald-500 text-white hover:bg-emerald-700 rounded' }, '🛑 Logout'), p, e('pre', _, 'User: ' + r(o(s).user), 1), e('pre', m, 'Session: ' + r(o(s).session), 1)])]), _: 1 }))
      )
    }
  }
export { x as default }
