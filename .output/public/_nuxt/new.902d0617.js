import { Y as b, K as m, G as u, M as _, c as h, B as x, R as g, o as S, S as e, bN as v, bK as i, bB as c, u as d, aK as p } from './entry.5fb35958.js'
import { a as w, u as y } from './user.5eed4219.js'
const P = b('post', () => {
    const l = w(),
      t = m()
    return {
      createPost: async (n) => {
        const { error: o } = await l.from('posts').insert(n)
        o && console.log(o), t.push('/')
      }
    }
  }),
  B = e('h1', { class: 'font-bold text-2xl' }, 'Create New Post', -1),
  C = ['onSubmit'],
  M = e('label', { for: 'title', class: 'font-bold' }, 'Title', -1),
  K = e('label', { for: '', class: 'font-bold' }, 'Description', -1),
  N = e('button', { type: 'submit', class: 'p-2 rounded bg-green-500 hover:bg-green-700 text-white' }, 'Create', -1),
  V = {
    __name: 'new',
    setup(l) {
      const t = u(''),
        s = u(''),
        n = P(),
        o = y(),
        f = () => {
          n.createPost({ title: t.value, body: s.value, username: o.user.email })
        }
      return (
        _(() => {
          o.refreshSession()
        }),
        (R, r) => (
          S(),
          h(g, null, {
            default: x(() => [
              e('div', null, [
                B,
                e('form', { onSubmit: v(f, ['prevent']), class: 'flex flex-col gap-4' }, [M, i(e('input', { type: 'text', name: 'title', class: 'rounded bg-gray-100 p-2 outline-none focus:border border-fuchsia-500', 'onUpdate:modelValue': r[0] || (r[0] = (a) => (p(t) ? (t.value = a) : null)) }, null, 512), [[c, d(t)]]), K, i(e('textarea', { name: 'description', id: '', cols: '30', rows: '10', class: 'rounded bg-gray-100 p-2 outline-none focus:border border-fuchsia-500', 'onUpdate:modelValue': r[1] || (r[1] = (a) => (p(s) ? (s.value = a) : null)) }, null, 512), [[c, d(s)]]), N], 40, C)
              ])
            ]),
            _: 1
          })
        )
      )
    }
  }
export { V as default }
