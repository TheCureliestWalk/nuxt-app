import { A as o, f as a, a as p, l as y } from './entry.5fb35958.js'
const h = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li']
function i(r, e) {
  return r.type === e || (typeof r.type == 'object' && r.type.tag === e) || r.tag === e
}
function c(r) {
  return i(r, 'text') || typeof r.children == 'string'
}
function l(r) {
  var e
  return Array.isArray(r.children) || typeof r.children == 'string' ? r.children : typeof ((e = r.children) == null ? void 0 : e.default) == 'function' ? r.children.default() : []
}
function u(r) {
  if (!r) return ''
  if (Array.isArray(r)) return r.map(u).join('')
  if (c(r)) return r.children || r.value
  const e = l(r)
  return Array.isArray(e) ? e.map(u).join('') : ''
}
function s(r, e = ['p']) {
  if (Array.isArray(r)) return r.flatMap((n) => s(n, e))
  let t = r
  return e.some((n) => n === '*' || i(r, n)) && ((t = l(r) || r), !Array.isArray(t) && h.some((n) => i(r, n)) && (t = [t])), t
}
function f(r, e = ['p']) {
  return (r = Array.isArray(r) ? r : [r]), e.length ? r.flatMap((t) => f(s(t, [e[0]]), e.slice(1))).filter((t) => !(c(t) && u(t).trim() === '')) : r
}
const m = (r) => o(r, a().public.content.api.baseURL),
  A = () => ({ unwrap: s, flatUnwrap: f }),
  C = () => {
    throw (console.warn('useContent is only accessible when you are using `documentDriven` mode.'), console.warn('Learn more by visiting: https://content.nuxtjs.org/guide/writing/document-driven'), new Error('useContent is only accessible when you are using `documentDriven` mode.'))
  },
  b = () => {
    const { experimental: r } = a().content
    if (r.clientDB) return !0
    const e = p().query
    return Object.prototype.hasOwnProperty.call(e, 'preview') && !e.preview ? !1 : !!(e.preview || y('previewToken').value)
  }
export { A as a, b as s, C as u, m as w }
