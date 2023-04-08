import { h as k, u as $ } from './index.9b013864.js'
import { u as c, m as D, b5 as F } from './entry.5fb35958.js'
function C(n, r, h) {
  const [t = {}, i] = typeof r == 'string' ? [{}, r] : [r, h],
    s = t.key || k([i, c(t.baseURL), typeof n == 'string' ? n : '', c(t.params || t.query)])
  if (!s || typeof s != 'string') throw new TypeError('[nuxt] [useFetch] key must be a string: ' + s)
  if (!n) throw new Error('[nuxt] [useFetch] request is missing.')
  const y = s === i ? '$f' + s : s,
    o = D(() => {
      let a = n
      return typeof a == 'function' && (a = a()), c(a)
    }),
    { server: p, lazy: l, default: m, transform: b, pick: d, watch: g, immediate: w, ...v } = t,
    f = F({ ...v, cache: typeof t.cache == 'boolean' ? void 0 : t.cache }),
    _ = { server: p, lazy: l, default: m, transform: b, pick: d, immediate: w, watch: [f, o, ...(g || [])] }
  let e
  return $(
    y,
    () => {
      var u
      return (u = e == null ? void 0 : e.abort) == null || u.call(e), (e = typeof AbortController < 'u' ? new AbortController() : {}), typeof o.value == 'string' && o.value.startsWith('/'), (t.$fetch || globalThis.$fetch)(o.value, { signal: e.signal, ...f })
    },
    _
  )
}
export { C as u }
