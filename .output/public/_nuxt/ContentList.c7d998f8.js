import n from './ContentQuery.0c768abb.js'
import { h as c, i as h, k as p } from './entry.5fb35958.js'
import './index.9b013864.js'
import './query.2810ea24.js'
import './utils.07f1fbc1.js'
const u = (r, t) => p('pre', null, JSON.stringify({ message: 'You should use slots with <ContentList>', slot: r, data: t }, null, 2)),
  q = c({
    name: 'ContentList',
    props: { path: { type: String, required: !1, default: void 0 }, query: { type: Object, required: !1, default: void 0 } },
    render(r) {
      const t = h(),
        { path: f, query: a } = r,
        m = { ...(a || {}), path: f || (a == null ? void 0 : a.path) || '/' }
      return p(n, m, {
        default: t != null && t.default ? ({ data: e, refresh: o, isPartial: d }) => t.default({ list: e, refresh: o, isPartial: d, ...this.$attrs }) : (e) => u('default', e.data),
        empty: (e) => (t != null && t.empty ? t.empty(e) : u('default', e == null ? void 0 : e.data)),
        'not-found': (e) => {
          var o
          return t != null && t['not-found'] ? ((o = t == null ? void 0 : t['not-found']) == null ? void 0 : o.call(t, e)) : u('not-found', e == null ? void 0 : e.data)
        }
      })
    }
  })
export { q as default }
