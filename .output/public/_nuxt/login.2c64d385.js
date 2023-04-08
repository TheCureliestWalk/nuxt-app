import { G as i, c as p, B as m, R as c, o as f, S as s, bN as _, bK as n, bB as r, u as o, aK as d } from './entry.5fb35958.js'
import { u as b } from './user.5eed4219.js'
const w = { class: 'p-8 space-y-4 justify-center' },
  v = s('div', null, [s('h1', { class: 'font-bold tracking-wide' }, 'Login')], -1),
  g = { class: 'space-y-2' },
  y = s('label', { for: 'email' }, 'Email', -1),
  h = { class: 'space-y-2 mt-2' },
  x = s('label', { for: 'password' }, 'Password', -1),
  B = s('button', { class: 'rounded-md bg-indigo-600 text-white p-2 my-2 hover:bg-indigo-800' }, '🔑 Login', -1),
  j = {
    __name: 'login',
    setup(S) {
      const t = i(''),
        a = i(''),
        u = b()
      return (k, e) => (
        f(),
        p(c, null, {
          default: m(() => [
            s('div', w, [
              v,
              s('div', null, [
                s(
                  'form',
                  { onSubmit: e[2] || (e[2] = _((l) => o(u).login(o(t), o(a)), ['prevent'])), class: 'flex flex-col max-w-sm justify-center' },
                  [s('div', g, [y, n(s('input', { type: 'email', name: 'email', id: 'email', class: 'rounded-md border-2 border-gray-300 p-2 w-full', 'onUpdate:modelValue': e[0] || (e[0] = (l) => (d(t) ? (t.value = l) : null)) }, null, 512), [[r, o(t)]])]), s('div', h, [x, n(s('input', { type: 'password', name: 'password', id: 'password', class: 'rounded-md border-2 border-gray-300 p-2 w-full', 'onUpdate:modelValue': e[1] || (e[1] = (l) => (d(a) ? (a.value = l) : null)) }, null, 512), [[r, o(a)]])]), B],
                  32
                )
              ])
            ])
          ]),
          _: 1
        })
      )
    }
  }
export { j as default }
