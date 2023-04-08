import { _ as b } from './nuxt-link.5a681159.js'
import { bI as k, m as w, c as B, B as _, R as N, o as s, S as e, U as i, u as l, E as a, a1 as f, b9 as m, ap as x, ao as g } from './entry.5fb35958.js'
import { u as L } from './fetch.cb7ea18b.js'
import './index.9b013864.js'
const j = e('h1', { class: 'text-lg font-bold tracking-wide' }, 'All posts', -1),
  C = e('div', { class: 'my-4' }, [e('a', { href: 'posts/new', class: 'rounded p-2 bg-sky-500 hover:bg-sky-700 text-white text-sm tracking-wide' }, '✏️ New Post')], -1),
  E = { class: 'text-xs' },
  F = { class: 'text-xs' },
  P = { key: 0 },
  V = { key: 1, class: 'grid grid-cols-4 gap-4 mt-8 overflow-hidden text-gray-700' },
  A = { class: 'my-4 flex justify-between space-x-3 text-sm border-t-2 pt-2 px-2' },
  R = { class: 'border-l-2 pl-2 border-indigo-500' },
  S = { class: 'hover:text-indigo-500 cursor-pointer' },
  T = { class: '' },
  W = {
    __name: 'index',
    async setup(U) {
      let d, p
      const { pending: v, data: c } = (([d, p] = k(() => L('https://dummyjson.com/posts', '$WzfFgdgUhu'))), (d = await d), p(), d),
        y = w(() => {
          const u = c.value.posts.reduce(
            (t, o) => (
              o.tags.forEach((r) => {
                t[r] ? t[r]++ : (t[r] = 1)
              }),
              t
            ),
            {}
          )
          return Object.entries(u).sort((t, o) => o[1] - t[1])
        })
      return (u, t) => {
        const o = b
        return (
          s(),
          B(N, null, {
            default: _(() => {
              var r
              return [
                e('div', null, [
                  j,
                  C,
                  e('p', E, 'Posts: ' + i((r = l(c).posts) == null ? void 0 : r.length), 1),
                  e('p', F, 'Posts: ' + i(l(y)), 1),
                  l(v)
                    ? (s(), a('p', P, 'Loading...'))
                    : (s(),
                      a('div', V, [
                        (s(!0),
                        a(
                          f,
                          null,
                          m(
                            l(c).posts,
                            (n) => (
                              s(),
                              a('div', { key: n.id, class: 'flex flex-col w-full max-w-md bg-slate-50 p-6 border-l-2 border-cyan-300' }, [
                                e('div', null, [x(o, { href: 'posts/' + n.id, class: 'font-bold text-base cursor-pointer hover:text-emerald-500' }, { default: _(() => [g(i(n.title), 1)]), _: 2 }, 1032, ['href'])]),
                                e('div', A, [
                                  e('div', R, [
                                    (s(!0),
                                    a(
                                      f,
                                      null,
                                      m(n.tags, (h) => (s(), a('span', { key: h, class: 'inline-flex pr-2 cursor-pointer hover:text-sky-500 decoration-slate-500' }, i(h), 1))),
                                      128
                                    ))
                                  ]),
                                  e('div', S, 'Like: ' + i(n.reactions), 1)
                                ]),
                                e('div', T, [x(o, { href: 'posts/' + n.id, class: 'flex flex-row-reverse text-sm underline underline-offset-4 decoration-emerald-500 hover:text-indigo-500' }, { default: _(() => [g('+ Read')]), _: 2 }, 1032, ['href'])])
                              ])
                            )
                          ),
                          128
                        ))
                      ]))
                ])
              ]
            }),
            _: 1
          })
        )
      }
    }
  }
export { W as default }
