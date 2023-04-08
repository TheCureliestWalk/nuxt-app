import { _ as m } from './nuxt-link.5a681159.js'
import { G as d, M as p, o as t, c as h, B as u, u as _, E as o, S as e, U as f, ah as x, R as g, h as w, a1 as b, b9 as v, ap as i, ao as y, D as k, C as $ } from './entry.5fb35958.js'
const N = { key: 0, class: 'flex items-center justify-between rounded-xl my-4 p-2 px-4 shadow-md w-full bg-amber-500 text-white' },
  B = { class: 'text-md font-bold' },
  S = {
    __name: 'Alert',
    props: { text: { type: String, required: !1 } },
    emits: ['close'],
    setup(n) {
      const a = n,
        s = d(!0)
      return (
        p(() => {
          setTimeout(() => {
            s.value = !1
          }, 3e3)
        }),
        (r, l) => (t(), h(g, null, { default: u(() => [_(s) ? (t(), o('div', N, [e('h1', B, f(a.text ?? 'No context'), 1), e('button', { onClick: l[0] || (l[0] = (c) => r.$emit('close')), class: 'rounded-full p-2.5 -m-1.5 hover:bg-white/30' }, 'X')])) : x('', !0)]), _: 1 }))
      )
    }
  },
  C = { class: 'w-full bg-white p-3.5 rounded-xl text-gray-700 flex' },
  A = e('div', { class: 'pl-4 grow' }, [e('a', { href: '/', class: 'font-bold tracking-wide' }, "Iho's App")], -1),
  V = { class: 'pr-4' },
  L = { class: 'flex gap-4' },
  T = w({
    __name: 'NavBar',
    setup(n) {
      const a = d([
        { href: '/', name: 'Home' },
        { href: '/posts', name: 'Posts' },
        { href: '/about', name: 'About' },
        { href: '/login', name: 'Login' },
        { href: '/signup', name: 'Signup' },
        { href: '/settings', name: 'Settings' }
      ])
      return (s, r) => {
        const l = m
        return (
          t(),
          o('div', null, [
            e('nav', C, [
              A,
              e('div', V, [
                e('ul', L, [
                  (t(!0),
                  o(
                    b,
                    null,
                    v(_(a), (c) => (t(), o('li', null, [i(l, { to: c.href, class: 'text-gray-800 hover:underline underline-offset-4 decoration-2 decoration-slate-700 duration-150 delay-75' }, { default: u(() => [y(f(c.name), 1)]), _: 2 }, 1032, ['to'])]))),
                    256
                  ))
                ])
              ])
            ])
          ])
        )
      }
    }
  }),
  D = {},
  E = { class: 'flex flex-col gap-6 py-8 px-8 md:px-16 lg:px-32 w-full min-h-screen bg-gradient-to-tr from-pink-300 to-sky-300 shadow-md' },
  M = { class: 'p-8 bg-white w-full min-h-screen rounded-xl shadow-md' }
function j(n, a) {
  const s = T,
    r = S
  return t(), o('div', E, [i(s), e('div', M, [i(r), $(n.$slots, 'default')])])
}
const G = k(D, [['render', j]])
export { G as default }
