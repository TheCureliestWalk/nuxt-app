import { h as i, f as l, o as s, E as d, u, C as o } from './entry.5fb35958.js'
const c = ['id'],
  f = ['href'],
  g = i({
    __name: 'ProseH1',
    props: { id: null },
    setup(t) {
      const { anchorLinks: e } = l().public.content,
        a = (e == null ? void 0 : e.depth) >= 1 && !(e != null && e.exclude.includes(1))
      return (n, h) => (s(), d('h1', { id: t.id }, [t.id && u(a) ? (s(), d('a', { key: 0, href: `#${t.id}` }, [o(n.$slots, 'default')], 8, f)) : o(n.$slots, 'default', { key: 1 })], 8, c))
    }
  })
export { g as default }
