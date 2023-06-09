import { f as y, q as _, r as $, s as E, _ as P, l as S } from './entry.5fb35958.js'
import { h as l } from './index.9b013864.js'
import { w as f, s as k } from './utils.07f1fbc1.js'
const h = (r, e) => e.split('.').reduce((t, s) => t && t[s], r),
  m = (r, e) =>
    Object.keys(r)
      .filter(e)
      .reduce((t, s) => Object.assign(t, { [s]: r[s] }), {}),
  j = (r) => (e) => Array.isArray(e) ? e.map((t) => r(t)) : r(e),
  w = (r) => {
    const e = [],
      t = []
    for (const s of r) ['$', '_'].includes(s) ? e.push(s) : t.push(s)
    return { prefixes: e, properties: t }
  },
  B =
    (r = []) =>
    (e) => {
      if (r.length === 0 || !e) return e
      const { prefixes: t, properties: s } = w(r)
      return m(e, (n) => !s.includes(n) && !t.includes(n[0]))
    },
  D =
    (r = []) =>
    (e) => {
      if (r.length === 0 || !e) return e
      const { prefixes: t, properties: s } = w(r)
      return m(e, (n) => s.includes(n) || t.includes(n[0]))
    },
  I = (r, e) => {
    const t = new Intl.Collator(e.$locale, { numeric: e.$numeric, caseFirst: e.$caseFirst, sensitivity: e.$sensitivity }),
      s = Object.keys(e).filter((n) => !n.startsWith('$'))
    for (const n of s)
      r = r.sort((o, i) => {
        const a = [h(o, n), h(i, n)].map((c) => {
          if (c !== null) return c instanceof Date ? c.toISOString() : c
        })
        return e[n] === -1 && a.reverse(), t.compare(a[0], a[1])
      })
    return r
  },
  Q = (r, e = 'Expected an array') => {
    if (!Array.isArray(r)) throw new TypeError(e)
  },
  u = (r) => (Array.isArray(r) ? r : r ? [r] : []),
  x = ['sort', 'where', 'only', 'without'],
  A = (r, e) => {
    const t = { ...e }
    for (const o of x) t[o] && (t[o] = u(t[o]))
    const s =
        (o, i = (a) => a) =>
        (...a) => ((t[o] = i(...a)), n),
      n = { params: () => t, only: s('only', u), without: s('without', u), where: s('where', (o) => [...u(t.where), ...u(o)]), sort: s('sort', (o) => [...u(t.sort), ...u(o)]), limit: s('limit', (o) => parseInt(String(o), 10)), skip: s('skip', (o) => parseInt(String(o), 10)), find: () => r(n), findOne: () => ((t.first = !0), r(n)), findSurround: (o, i) => ((t.surround = { query: o, ...i }), r(n)), locale: (o) => n.where({ _locale: o }) }
    return n
  }
function g(r) {
  return JSON.stringify(r, C)
}
function C(r, e) {
  return e instanceof RegExp ? `--REGEX ${e.toString()}` : e
}
const O = (r) => {
    let e = g(r)
    return (e = typeof Buffer < 'u' ? Buffer.from(e).toString('base64') : btoa(e)), (e = e.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')), (e.match(/.{1,100}/g) || []).join('/')
  },
  T = () => async (r) => {
    const { content: e } = y().public,
      t = r.params(),
      s = e.experimental.stripQueryParameters ? f(`/query/${`${l(t)}.${e.integrity}`}/${O(t)}.json`) : f(`/query/${l(t)}.${e.integrity}.json`)
    if (k()) return (await P(() => import('./client-db.31fd48e7.js'), ['./client-db.31fd48e7.js', './entry.5fb35958.js', './entry.979a5045.css', './index.a6ef77ff.js', './index.9b013864.js', './utils.07f1fbc1.js'], import.meta.url).then((i) => i.useContentDatabase())).fetch(r)
    const n = await $fetch(s, { method: 'GET', responseType: 'json', params: e.experimental.stripQueryParameters ? void 0 : { _params: g(t), previewToken: S('previewToken').value } })
    if (typeof n == 'string' && n.startsWith('<!DOCTYPE html>')) throw new Error('Not found')
    return n
  }
function F(r, ...e) {
  const { content: t } = y().public,
    s = A(T(), typeof r != 'string' ? r : {})
  let n
  typeof r == 'string' && (n = _($(r, ...e)))
  const o = s.params
  return (
    (s.params = () => {
      var a, c, p
      const i = o()
      return n && ((i.where = i.where || []), i.first && (i.where || []).length === 0 ? i.where.push({ _path: E(n) }) : i.where.push({ _path: new RegExp(`^${n.replace(/[-[\]{}()*+.,^$\s/]/g, '\\$&')}`) })), ((a = i.sort) != null && a.length) || (i.sort = [{ _file: 1, $numeric: !0 }]), t.locales.length && (((p = (c = i.where) == null ? void 0 : c.find((d) => d._locale)) != null && p._locale) || ((i.where = i.where || []), i.where.push({ _locale: t.defaultLocale }))), i
    }),
    s
  )
}
export { Q as a, u as b, j as c, D as d, O as e, A as f, h as g, g as j, F as q, I as s, B as w }
