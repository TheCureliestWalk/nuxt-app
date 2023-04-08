import { h as p, u as f } from './index.9b013864.js'
import { f as v, _ as l, l as _, h as d, t as g, m as h, p as y, i as w, k as r } from './entry.5fb35958.js'
import { _ as C } from './nuxt-link.5a681159.js'
import { q as $, e as N, j as P } from './query.2810ea24.js'
import { w as c, s as j, u as T } from './utils.07f1fbc1.js'
/* empty css                      */ const x = async (n) => {
  const { content: t } = v().public
  typeof (n == null ? void 0 : n.params) != 'function' && (n = $(n))
  const a = n.params(),
    s = t.experimental.stripQueryParameters ? c(`/navigation/${`${p(a)}.${t.integrity}`}/${N(a)}.json`) : c(`/navigation/${p(a)}.${t.integrity}.json`)
  if (j()) return (await l(() => import('./client-db.31fd48e7.js'), ['./client-db.31fd48e7.js', './entry.5fb35958.js', './entry.979a5045.css', './query.2810ea24.js', './index.9b013864.js', './utils.07f1fbc1.js', './index.a6ef77ff.js'], import.meta.url).then((o) => o.generateNavigation))(a)
  const e = await $fetch(s, { method: 'GET', responseType: 'json', params: t.experimental.stripQueryParameters ? void 0 : { _params: P(a), previewToken: _('previewToken').value } })
  if (typeof e == 'string' && e.startsWith('<!DOCTYPE html>')) throw new Error('Not found')
  return e
}
const R = d({
  name: 'ContentNavigation',
  props: { query: { type: Object, required: !1, default: void 0 } },
  async setup(n) {
    const { query: t } = g(n),
      a = h(() => {
        var e
        return typeof ((e = t.value) == null ? void 0 : e.params) == 'function' ? t.value.params() : t.value
      })
    if (!a.value && y('dd-navigation').value) {
      const { navigation: e } = T()
      return { navigation: e }
    }
    const { data: s } = await f(`content-navigation-${p(a.value)}`, () => x(a.value))
    return { navigation: s }
  },
  render(n) {
    const t = w(),
      { navigation: a } = n,
      s = (o) => r(C, { to: o._path }, () => o.title),
      e = (o, u) =>
        r(
          'ul',
          u ? { 'data-level': u } : null,
          o.map((i) => (i.children ? r('li', null, [s(i), e(i.children, u + 1)]) : r('li', null, s(i))))
        ),
      m = (o) => e(o, 0)
    return t != null && t.default ? t.default({ navigation: a, ...this.$attrs }) : m(a)
  }
})
export { R as default }
