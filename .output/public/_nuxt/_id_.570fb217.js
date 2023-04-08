import { a as l, bI as d, c as u, B as p, R as _, o as m, S as t, U as o, u as r } from './entry.5fb35958.js'
import { u as h } from './fetch.cb7ea18b.js'
import './index.9b013864.js'
const f = { class: 'font-bold text-lg' },
  b = { class: 'p-8 mt-4 space-y-3' },
  y = { class: 'font-bold text-lg' },
  v = { class: 'block place-content-end justify-items-end items-end' },
  w = {
    __name: '[id]',
    async setup(g) {
      let s, e
      const c = l().params.id,
        { data: a } = (([s, e] = d(() => h(`https://dummyjson.com/posts/${c}`, '$HDv9hEssD8'))), (s = await s), e(), s)
      return (n, i) => (m(), u(_, null, { default: p(() => [t('div', null, [t('h1', f, 'POST ID: ' + o(n.$route.params.id), 1), t('div', b, [t('h2', y, o(r(a).title), 1), t('p', null, o(r(a).body), 1), t('div', v, [t('button', { onClick: i[0] || (i[0] = (x) => n.$router.go(-1)), class: 'p-2 border-l-2 border-fuchsia-500 hover:text-indigo-500' }, '--Back--')])])])]), _: 1 }))
    }
  }
export { w as default }
