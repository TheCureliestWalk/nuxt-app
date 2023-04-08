import { F as g, V as h, f as b, W as d, X as C, Y as v, K as S, G as f } from './entry.5fb35958.js'
const w = () => {
    var s
    const e = g(),
      a = h(),
      o = a.value ? `Bearer ${a.value}` : void 0,
      {
        supabase: { url: u, key: c, client: r }
      } = b().public,
      l = o ? d(r, { global: { headers: { Authorization: o } } }) : r,
      p = ((s = e._supabaseClient) == null ? void 0 : s.headers.Authorization) !== o
    return (!e._supabaseClient || p) && (e._supabaseClient = C(u, c, l)), e._supabaseClient
  },
  A = v('user', () => {
    const e = w(),
      a = S(),
      o = f(),
      u = f()
    return {
      session: o,
      user: u,
      login: async (s, t) => {
        const { data: n, error: i } = await e.auth.signInWithPassword({ email: s, password: t })
        i && console.log(i), n && (console.log(n), (o.value = n.session), (u.value = n.user), a.push('/'))
      },
      logout: async () => {
        const { error: s } = await e.auth.signOut()
        s && console.log(s), a.push('/')
      },
      signup: async (s, t) => {
        const { data: n, error: i } = await e.auth.signUp({ email: s, password: t })
        i && console.log(i), n && (console.log(n), a.push('/'))
      },
      refreshSession: async () => {
        const { data: s, error: t } = await e.auth.refreshSession()
        s && ((o.value = s.session), (u.value = s.user)), t && console.log(t)
      }
    }
  })
export { w as a, A as u }
