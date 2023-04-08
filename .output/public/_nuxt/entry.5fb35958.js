function vu(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const s in r)
        if (s !== 'default' && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(r, s)
          i && Object.defineProperty(e, s, i.get ? i : { enumerable: !0, get: () => r[s] })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
function is(e, t) {
  const n = Object.create(null),
    r = e.split(',')
  for (let s = 0; s < r.length; s++) n[r[s]] = !0
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s]
}
const bu = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt',
  wu = is(bu)
function os(e) {
  if (q(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = ve(r) ? Cu(r) : os(r)
      if (s) for (const i in s) t[i] = s[i]
    }
    return t
  } else {
    if (ve(e)) return e
    if (me(e)) return e
  }
}
const Eu = /;(?![^(]*\))/g,
  Tu = /:([^]+)/,
  Ru = /\/\*.*?\*\//gs
function Cu(e) {
  const t = {}
  return (
    e
      .replace(Ru, '')
      .split(Eu)
      .forEach((n) => {
        if (n) {
          const r = n.split(Tu)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function as(e) {
  let t = ''
  if (ve(e)) t = e
  else if (q(e))
    for (let n = 0; n < e.length; n++) {
      const r = as(e[n])
      r && (t += r + ' ')
    }
  else if (me(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
function wv(e) {
  if (!e) return null
  let { class: t, style: n } = e
  return t && !ve(t) && (e.class = as(t)), n && (e.style = os(n)), e
}
const Pu = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Ou = is(Pu)
function el(e) {
  return !!e || e === ''
}
function Su(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let r = 0; n && r < e.length; r++) n = Nt(e[r], t[r])
  return n
}
function Nt(e, t) {
  if (e === t) return !0
  let n = Ro(e),
    r = Ro(t)
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1
  if (((n = cr(e)), (r = cr(t)), n || r)) return e === t
  if (((n = q(e)), (r = q(t)), n || r)) return n && r ? Su(e, t) : !1
  if (((n = me(e)), (r = me(t)), n || r)) {
    if (!n || !r) return !1
    const s = Object.keys(e).length,
      i = Object.keys(t).length
    if (s !== i) return !1
    for (const o in e) {
      const a = e.hasOwnProperty(o),
        l = t.hasOwnProperty(o)
      if ((a && !l) || (!a && l) || !Nt(e[o], t[o])) return !1
    }
  }
  return String(e) === String(t)
}
function ls(e, t) {
  return e.findIndex((n) => Nt(n, t))
}
const Ev = (e) => (ve(e) ? e : e == null ? '' : q(e) || (me(e) && (e.toString === nl || !Z(e.toString))) ? JSON.stringify(e, tl, 2) : String(e)),
  tl = (e, t) => (t && t.__v_isRef ? tl(e, t.value) : En(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s]) => ((n[`${r} =>`] = s), n), {}) } : un(t) ? { [`Set(${t.size})`]: [...t.values()] } : me(t) && !q(t) && !rl(t) ? String(t) : t),
  pe = {},
  wn = [],
  rt = () => {},
  ku = () => !1,
  Au = /^on[^a-z]/,
  yr = (e) => Au.test(e),
  Bi = (e) => e.startsWith('onUpdate:'),
  Te = Object.assign,
  Vi = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  xu = Object.prototype.hasOwnProperty,
  ce = (e, t) => xu.call(e, t),
  q = Array.isArray,
  En = (e) => Hn(e) === '[object Map]',
  un = (e) => Hn(e) === '[object Set]',
  Ro = (e) => Hn(e) === '[object Date]',
  $u = (e) => Hn(e) === '[object RegExp]',
  Z = (e) => typeof e == 'function',
  ve = (e) => typeof e == 'string',
  cr = (e) => typeof e == 'symbol',
  me = (e) => e !== null && typeof e == 'object',
  Ki = (e) => me(e) && Z(e.then) && Z(e.catch),
  nl = Object.prototype.toString,
  Hn = (e) => nl.call(e),
  ju = (e) => Hn(e).slice(8, -1),
  rl = (e) => Hn(e) === '[object Object]',
  qi = (e) => ve(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Yn = is(',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'),
  cs = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Iu = /-(\w)/g,
  We = cs((e) => e.replace(Iu, (t, n) => (n ? n.toUpperCase() : ''))),
  Lu = /\B([A-Z])/g,
  Qe = cs((e) => e.replace(Lu, '-$1').toLowerCase()),
  us = cs((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Br = cs((e) => (e ? `on${us(e)}` : '')),
  Sn = (e, t) => !Object.is(e, t),
  Tn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  qr = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  Wr = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  zr = (e) => {
    const t = ve(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Co
const Du = () => Co || (Co = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : typeof global < 'u' ? global : {})
let Ke
class sl {
  constructor(t = !1) {
    ;(this.detached = t), (this._active = !0), (this.effects = []), (this.cleanups = []), (this.parent = Ke), !t && Ke && (this.index = (Ke.scopes || (Ke.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Ke
      try {
        return (Ke = this), t()
      } finally {
        Ke = n
      }
    }
  }
  on() {
    Ke = this
  }
  off() {
    Ke = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, r
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop()
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop()
        s && s !== this && ((this.parent.scopes[this.index] = s), (s.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function il(e) {
  return new sl(e)
}
function ol(e, t = Ke) {
  t && t.active && t.effects.push(e)
}
function al() {
  return Ke
}
function Hu(e) {
  Ke && Ke.cleanups.push(e)
}
const Wi = (e) => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  ll = (e) => (e.w & Ft) > 0,
  cl = (e) => (e.n & Ft) > 0,
  Uu = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ft
  },
  Mu = (e) => {
    const { deps: t } = e
    if (t.length) {
      let n = 0
      for (let r = 0; r < t.length; r++) {
        const s = t[r]
        ll(s) && !cl(s) ? s.delete(e) : (t[n++] = s), (s.w &= ~Ft), (s.n &= ~Ft)
      }
      t.length = n
    }
  },
  Jr = new WeakMap()
let Qn = 0,
  Ft = 1
const si = 30
let tt
const sn = Symbol(''),
  ii = Symbol('')
class fs {
  constructor(t, n = null, r) {
    ;(this.fn = t), (this.scheduler = n), (this.active = !0), (this.deps = []), (this.parent = void 0), ol(this, r)
  }
  run() {
    if (!this.active) return this.fn()
    let t = tt,
      n = Lt
    for (; t; ) {
      if (t === this) return
      t = t.parent
    }
    try {
      return (this.parent = tt), (tt = this), (Lt = !0), (Ft = 1 << ++Qn), Qn <= si ? Uu(this) : Po(this), this.fn()
    } finally {
      Qn <= si && Mu(this), (Ft = 1 << --Qn), (tt = this.parent), (Lt = n), (this.parent = void 0), this.deferStop && this.stop()
    }
  }
  stop() {
    tt === this ? (this.deferStop = !0) : this.active && (Po(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function Po(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
function Tv(e, t) {
  e.effect && (e = e.effect.fn)
  const n = new fs(e)
  t && (Te(n, t), t.scope && ol(n, t.scope)), (!t || !t.lazy) && n.run()
  const r = n.run.bind(n)
  return (r.effect = n), r
}
function Rv(e) {
  e.effect.stop()
}
let Lt = !0
const ul = []
function Un() {
  ul.push(Lt), (Lt = !1)
}
function Mn() {
  const e = ul.pop()
  Lt = e === void 0 ? !0 : e
}
function Ne(e, t, n) {
  if (Lt && tt) {
    let r = Jr.get(e)
    r || Jr.set(e, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = Wi())), fl(s)
  }
}
function fl(e, t) {
  let n = !1
  Qn <= si ? cl(e) || ((e.n |= Ft), (n = !ll(e))) : (n = !e.has(tt)), n && (e.add(tt), tt.deps.push(e))
}
function bt(e, t, n, r, s, i) {
  const o = Jr.get(e)
  if (!o) return
  let a = []
  if (t === 'clear') a = [...o.values()]
  else if (n === 'length' && q(e)) {
    const l = Number(r)
    o.forEach((c, u) => {
      ;(u === 'length' || u >= l) && a.push(c)
    })
  } else
    switch ((n !== void 0 && a.push(o.get(n)), t)) {
      case 'add':
        q(e) ? qi(n) && a.push(o.get('length')) : (a.push(o.get(sn)), En(e) && a.push(o.get(ii)))
        break
      case 'delete':
        q(e) || (a.push(o.get(sn)), En(e) && a.push(o.get(ii)))
        break
      case 'set':
        En(e) && a.push(o.get(sn))
        break
    }
  if (a.length === 1) a[0] && oi(a[0])
  else {
    const l = []
    for (const c of a) c && l.push(...c)
    oi(Wi(l))
  }
}
function oi(e, t) {
  const n = q(e) ? e : [...e]
  for (const r of n) r.computed && Oo(r)
  for (const r of n) r.computed || Oo(r)
}
function Oo(e, t) {
  ;(e !== tt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
function Nu(e, t) {
  var n
  return (n = Jr.get(e)) === null || n === void 0 ? void 0 : n.get(t)
}
const Fu = is('__proto__,__v_isRef,__isVue'),
  hl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(cr)
  ),
  Bu = hs(),
  Vu = hs(!1, !0),
  Ku = hs(!0),
  qu = hs(!0, !0),
  So = Wu()
function Wu() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const r = ae(this)
        for (let i = 0, o = this.length; i < o; i++) Ne(r, 'get', i + '')
        const s = r[t](...n)
        return s === -1 || s === !1 ? r[t](...n.map(ae)) : s
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        Un()
        const r = ae(this)[t].apply(this, n)
        return Mn(), r
      }
    }),
    e
  )
}
function zu(e) {
  const t = ae(this)
  return Ne(t, 'has', e), t.hasOwnProperty(e)
}
function hs(e = !1, t = !1) {
  return function (r, s, i) {
    if (s === '__v_isReactive') return !e
    if (s === '__v_isReadonly') return e
    if (s === '__v_isShallow') return t
    if (s === '__v_raw' && i === (e ? (t ? vl : yl) : t ? _l : gl).get(r)) return r
    const o = q(r)
    if (!e) {
      if (o && ce(So, s)) return Reflect.get(So, s, i)
      if (s === 'hasOwnProperty') return zu
    }
    const a = Reflect.get(r, s, i)
    return (cr(s) ? hl.has(s) : Fu(s)) || (e || Ne(r, 'get', s), t) ? a : Ee(a) ? (o && qi(s) ? a : a.value) : me(a) ? (e ? bl(a) : it(a)) : a
  }
}
const Ju = dl(),
  Gu = dl(!0)
function dl(e = !1) {
  return function (n, r, s, i) {
    let o = n[r]
    if (an(o) && Ee(o) && !Ee(s)) return !1
    if (!e && (!Gr(s) && !an(s) && ((o = ae(o)), (s = ae(s))), !q(n) && Ee(o) && !Ee(s))) return (o.value = s), !0
    const a = q(n) && qi(r) ? Number(r) < n.length : ce(n, r),
      l = Reflect.set(n, r, s, i)
    return n === ae(i) && (a ? Sn(s, o) && bt(n, 'set', r, s) : bt(n, 'add', r, s)), l
  }
}
function Qu(e, t) {
  const n = ce(e, t)
  e[t]
  const r = Reflect.deleteProperty(e, t)
  return r && n && bt(e, 'delete', t, void 0), r
}
function Xu(e, t) {
  const n = Reflect.has(e, t)
  return (!cr(t) || !hl.has(t)) && Ne(e, 'has', t), n
}
function Yu(e) {
  return Ne(e, 'iterate', q(e) ? 'length' : sn), Reflect.ownKeys(e)
}
const pl = { get: Bu, set: Ju, deleteProperty: Qu, has: Xu, ownKeys: Yu },
  ml = {
    get: Ku,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    }
  },
  Zu = Te({}, pl, { get: Vu, set: Gu }),
  ef = Te({}, ml, { get: qu }),
  zi = (e) => e,
  ds = (e) => Reflect.getPrototypeOf(e)
function Pr(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = ae(e),
    i = ae(t)
  n || (t !== i && Ne(s, 'get', t), Ne(s, 'get', i))
  const { has: o } = ds(s),
    a = r ? zi : n ? Ji : ur
  if (o.call(s, t)) return a(e.get(t))
  if (o.call(s, i)) return a(e.get(i))
  e !== s && e.get(t)
}
function Or(e, t = !1) {
  const n = this.__v_raw,
    r = ae(n),
    s = ae(e)
  return t || (e !== s && Ne(r, 'has', e), Ne(r, 'has', s)), e === s ? n.has(e) : n.has(e) || n.has(s)
}
function Sr(e, t = !1) {
  return (e = e.__v_raw), !t && Ne(ae(e), 'iterate', sn), Reflect.get(e, 'size', e)
}
function ko(e) {
  e = ae(e)
  const t = ae(this)
  return ds(t).has.call(t, e) || (t.add(e), bt(t, 'add', e, e)), this
}
function Ao(e, t) {
  t = ae(t)
  const n = ae(this),
    { has: r, get: s } = ds(n)
  let i = r.call(n, e)
  i || ((e = ae(e)), (i = r.call(n, e)))
  const o = s.call(n, e)
  return n.set(e, t), i ? Sn(t, o) && bt(n, 'set', e, t) : bt(n, 'add', e, t), this
}
function xo(e) {
  const t = ae(this),
    { has: n, get: r } = ds(t)
  let s = n.call(t, e)
  s || ((e = ae(e)), (s = n.call(t, e))), r && r.call(t, e)
  const i = t.delete(e)
  return s && bt(t, 'delete', e, void 0), i
}
function $o() {
  const e = ae(this),
    t = e.size !== 0,
    n = e.clear()
  return t && bt(e, 'clear', void 0, void 0), n
}
function kr(e, t) {
  return function (r, s) {
    const i = this,
      o = i.__v_raw,
      a = ae(o),
      l = t ? zi : e ? Ji : ur
    return !e && Ne(a, 'iterate', sn), o.forEach((c, u) => r.call(s, l(c), l(u), i))
  }
}
function Ar(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      i = ae(s),
      o = En(i),
      a = e === 'entries' || (e === Symbol.iterator && o),
      l = e === 'keys' && o,
      c = s[e](...r),
      u = n ? zi : t ? Ji : ur
    return (
      !t && Ne(i, 'iterate', l ? ii : sn),
      {
        next() {
          const { value: f, done: h } = c.next()
          return h ? { value: f, done: h } : { value: a ? [u(f[0]), u(f[1])] : u(f), done: h }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Ct(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this
  }
}
function tf() {
  const e = {
      get(i) {
        return Pr(this, i)
      },
      get size() {
        return Sr(this)
      },
      has: Or,
      add: ko,
      set: Ao,
      delete: xo,
      clear: $o,
      forEach: kr(!1, !1)
    },
    t = {
      get(i) {
        return Pr(this, i, !1, !0)
      },
      get size() {
        return Sr(this)
      },
      has: Or,
      add: ko,
      set: Ao,
      delete: xo,
      clear: $o,
      forEach: kr(!1, !0)
    },
    n = {
      get(i) {
        return Pr(this, i, !0)
      },
      get size() {
        return Sr(this, !0)
      },
      has(i) {
        return Or.call(this, i, !0)
      },
      add: Ct('add'),
      set: Ct('set'),
      delete: Ct('delete'),
      clear: Ct('clear'),
      forEach: kr(!0, !1)
    },
    r = {
      get(i) {
        return Pr(this, i, !0, !0)
      },
      get size() {
        return Sr(this, !0)
      },
      has(i) {
        return Or.call(this, i, !0)
      },
      add: Ct('add'),
      set: Ct('set'),
      delete: Ct('delete'),
      clear: Ct('clear'),
      forEach: kr(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      ;(e[i] = Ar(i, !1, !1)), (n[i] = Ar(i, !0, !1)), (t[i] = Ar(i, !1, !0)), (r[i] = Ar(i, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [nf, rf, sf, of] = tf()
function ps(e, t) {
  const n = t ? (e ? of : sf) : e ? rf : nf
  return (r, s, i) => (s === '__v_isReactive' ? !e : s === '__v_isReadonly' ? e : s === '__v_raw' ? r : Reflect.get(ce(n, s) && s in r ? n : r, s, i))
}
const af = { get: ps(!1, !1) },
  lf = { get: ps(!1, !0) },
  cf = { get: ps(!0, !1) },
  uf = { get: ps(!0, !0) },
  gl = new WeakMap(),
  _l = new WeakMap(),
  yl = new WeakMap(),
  vl = new WeakMap()
function ff(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function hf(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ff(ju(e))
}
function it(e) {
  return an(e) ? e : ms(e, !1, pl, af, gl)
}
function df(e) {
  return ms(e, !1, Zu, lf, _l)
}
function bl(e) {
  return ms(e, !0, ml, cf, yl)
}
function Cv(e) {
  return ms(e, !0, ef, uf, vl)
}
function ms(e, t, n, r, s) {
  if (!me(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = s.get(e)
  if (i) return i
  const o = hf(e)
  if (o === 0) return e
  const a = new Proxy(e, o === 2 ? r : n)
  return s.set(e, a), a
}
function Dt(e) {
  return an(e) ? Dt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function an(e) {
  return !!(e && e.__v_isReadonly)
}
function Gr(e) {
  return !!(e && e.__v_isShallow)
}
function wl(e) {
  return Dt(e) || an(e)
}
function ae(e) {
  const t = e && e.__v_raw
  return t ? ae(t) : e
}
function kn(e) {
  return qr(e, '__v_skip', !0), e
}
const ur = (e) => (me(e) ? it(e) : e),
  Ji = (e) => (me(e) ? bl(e) : e)
function Gi(e) {
  Lt && tt && ((e = ae(e)), fl(e.dep || (e.dep = Wi())))
}
function gs(e, t) {
  e = ae(e)
  const n = e.dep
  n && oi(n)
}
function Ee(e) {
  return !!(e && e.__v_isRef === !0)
}
function vt(e) {
  return El(e, !1)
}
function ai(e) {
  return El(e, !0)
}
function El(e, t) {
  return Ee(e) ? e : new pf(e, t)
}
class pf {
  constructor(t, n) {
    ;(this.__v_isShallow = n), (this.dep = void 0), (this.__v_isRef = !0), (this._rawValue = n ? t : ae(t)), (this._value = n ? t : ur(t))
  }
  get value() {
    return Gi(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || Gr(t) || an(t)
    ;(t = n ? t : ae(t)), Sn(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : ur(t)), gs(this))
  }
}
function Pv(e) {
  gs(e)
}
function ke(e) {
  return Ee(e) ? e.value : e
}
const mf = {
  get: (e, t, n) => ke(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return Ee(s) && !Ee(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  }
}
function Tl(e) {
  return Dt(e) ? e : new Proxy(e, mf)
}
class gf {
  constructor(t) {
    ;(this.dep = void 0), (this.__v_isRef = !0)
    const { get: n, set: r } = t(
      () => Gi(this),
      () => gs(this)
    )
    ;(this._get = n), (this._set = r)
  }
  get value() {
    return this._get()
  }
  set value(t) {
    this._set(t)
  }
}
function Ov(e) {
  return new gf(e)
}
function _f(e) {
  const t = q(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = Qi(e, n)
  return t
}
class yf {
  constructor(t, n, r) {
    ;(this._object = t), (this._key = n), (this._defaultValue = r), (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return Nu(ae(this._object), this._key)
  }
}
function Qi(e, t, n) {
  const r = e[t]
  return Ee(r) ? r : new yf(e, t, n)
}
var Rl
class vf {
  constructor(t, n, r, s) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Rl] = !1),
      (this._dirty = !0),
      (this.effect = new fs(t, () => {
        this._dirty || ((this._dirty = !0), gs(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = ae(this)
    return Gi(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value
  }
  set value(t) {
    this._setter(t)
  }
}
Rl = '__v_isReadonly'
function bf(e, t, n = !1) {
  let r, s
  const i = Z(e)
  return i ? ((r = e), (s = rt)) : ((r = e.get), (s = e.set)), new vf(r, s, i || !s, n)
}
function Sv(e, ...t) {}
function kv(e, t) {}
function Ht(e, t, n, r) {
  let s
  try {
    s = r ? e(...r) : e()
  } catch (i) {
    Nn(i, t, n)
  }
  return s
}
function Xe(e, t, n, r) {
  if (Z(e)) {
    const i = Ht(e, t, n, r)
    return (
      i &&
        Ki(i) &&
        i.catch((o) => {
          Nn(o, t, n)
        }),
      i
    )
  }
  const s = []
  for (let i = 0; i < e.length; i++) s.push(Xe(e[i], t, n, r))
  return s
}
function Nn(e, t, n, r = !0) {
  const s = t ? t.vnode : null
  if (t) {
    let i = t.parent
    const o = t.proxy,
      a = n
    for (; i; ) {
      const c = i.ec
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, o, a) === !1) return
      }
      i = i.parent
    }
    const l = t.appContext.config.errorHandler
    if (l) {
      Ht(l, null, 10, [e, o, a])
      return
    }
  }
  wf(e, n, s, r)
}
function wf(e, t, n, r = !0) {
  console.error(e)
}
let fr = !1,
  li = !1
const $e = []
let ft = 0
const Rn = []
let gt = null,
  Qt = 0
const Cl = Promise.resolve()
let Xi = null
function Kt(e) {
  const t = Xi || Cl
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Ef(e) {
  let t = ft + 1,
    n = $e.length
  for (; t < n; ) {
    const r = (t + n) >>> 1
    hr($e[r]) < e ? (t = r + 1) : (n = r)
  }
  return t
}
function _s(e) {
  ;(!$e.length || !$e.includes(e, fr && e.allowRecurse ? ft + 1 : ft)) && (e.id == null ? $e.push(e) : $e.splice(Ef(e.id), 0, e), Pl())
}
function Pl() {
  !fr && !li && ((li = !0), (Xi = Cl.then(Sl)))
}
function Tf(e) {
  const t = $e.indexOf(e)
  t > ft && $e.splice(t, 1)
}
function Ol(e) {
  q(e) ? Rn.push(...e) : (!gt || !gt.includes(e, e.allowRecurse ? Qt + 1 : Qt)) && Rn.push(e), Pl()
}
function jo(e, t = fr ? ft + 1 : 0) {
  for (; t < $e.length; t++) {
    const n = $e[t]
    n && n.pre && ($e.splice(t, 1), t--, n())
  }
}
function Qr(e) {
  if (Rn.length) {
    const t = [...new Set(Rn)]
    if (((Rn.length = 0), gt)) {
      gt.push(...t)
      return
    }
    for (gt = t, gt.sort((n, r) => hr(n) - hr(r)), Qt = 0; Qt < gt.length; Qt++) gt[Qt]()
    ;(gt = null), (Qt = 0)
  }
}
const hr = (e) => (e.id == null ? 1 / 0 : e.id),
  Rf = (e, t) => {
    const n = hr(e) - hr(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function Sl(e) {
  ;(li = !1), (fr = !0), $e.sort(Rf)
  const t = rt
  try {
    for (ft = 0; ft < $e.length; ft++) {
      const n = $e[ft]
      n && n.active !== !1 && Ht(n, null, 14)
    }
  } finally {
    ;(ft = 0), ($e.length = 0), Qr(), (fr = !1), (Xi = null), ($e.length || Rn.length) && Sl()
  }
}
let Kn,
  xr = []
function Cf(e, t) {
  var n, r
  ;(Kn = e),
    Kn
      ? ((Kn.enabled = !0), xr.forEach(({ event: s, args: i }) => Kn.emit(s, ...i)), (xr = []))
      : typeof window < 'u' && window.HTMLElement && !(!((r = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || r === void 0) && r.includes('jsdom'))
      ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
          Cf(i, t)
        }),
        setTimeout(() => {
          Kn || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (xr = []))
        }, 3e3))
      : (xr = [])
}
function Pf(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || pe
  let s = n
  const i = t.startsWith('update:'),
    o = i && t.slice(7)
  if (o && o in r) {
    const u = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: f, trim: h } = r[u] || pe
    h && (s = n.map((y) => (ve(y) ? y.trim() : y))), f && (s = n.map(Wr))
  }
  let a,
    l = r[(a = Br(t))] || r[(a = Br(We(t)))]
  !l && i && (l = r[(a = Br(Qe(t)))]), l && Xe(l, e, 6, s)
  const c = r[a + 'Once']
  if (c) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[a]) return
    ;(e.emitted[a] = !0), Xe(c, e, 6, s)
  }
}
function kl(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const i = e.emits
  let o = {},
    a = !1
  if (!Z(e)) {
    const l = (c) => {
      const u = kl(c, t, !0)
      u && ((a = !0), Te(o, u))
    }
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
  }
  return !i && !a ? (me(e) && r.set(e, null), null) : (q(i) ? i.forEach((l) => (o[l] = null)) : Te(o, i), me(e) && r.set(e, o), o)
}
function ys(e, t) {
  return !e || !yr(t) ? !1 : ((t = t.slice(2).replace(/Once$/, '')), ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, Qe(t)) || ce(e, t))
}
let Ae = null,
  vs = null
function dr(e) {
  const t = Ae
  return (Ae = e), (vs = (e && e.type.__scopeId) || null), t
}
function Av(e) {
  vs = e
}
function xv() {
  vs = null
}
const $v = (e) => bs
function bs(e, t = Ae, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && qo(-1)
    const i = dr(t)
    let o
    try {
      o = e(...s)
    } finally {
      dr(i), r._d && qo(1)
    }
    return o
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function Vr(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: i,
    propsOptions: [o],
    slots: a,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    data: h,
    setupState: y,
    ctx: m,
    inheritAttrs: w
  } = e
  let E, v
  const p = dr(e)
  try {
    if (n.shapeFlag & 4) {
      const R = s || r
      ;(E = qe(u.call(R, R, f, i, y, h, m))), (v = l)
    } else {
      const R = t
      ;(E = qe(R.length > 1 ? R(i, { attrs: l, slots: a, emit: c }) : R(i, null))), (v = t.props ? l : Sf(l))
    }
  } catch (R) {
    ;(tr.length = 0), Nn(R, e, 1), (E = ye(Le))
  }
  let b = E
  if (v && w !== !1) {
    const R = Object.keys(v),
      { shapeFlag: O } = b
    R.length && O & 7 && (o && R.some(Bi) && (v = kf(v, o)), (b = wt(b, v)))
  }
  return n.dirs && ((b = wt(b)), (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)), n.transition && (b.transition = n.transition), (E = b), dr(p), E
}
function Of(e) {
  let t
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    if (cn(r)) {
      if (r.type !== Le || r.children === 'v-if') {
        if (t) return
        t = r
      }
    } else return
  }
  return t
}
const Sf = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || yr(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  kf = (e, t) => {
    const n = {}
    for (const r in e) (!Bi(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function Af(e, t, n) {
  const { props: r, children: s, component: i } = e,
    { props: o, children: a, patchFlag: l } = t,
    c = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return r ? Io(r, o, c) : !!o
    if (l & 8) {
      const u = t.dynamicProps
      for (let f = 0; f < u.length; f++) {
        const h = u[f]
        if (o[h] !== r[h] && !ys(c, h)) return !0
      }
    }
  } else return (s || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? (o ? Io(r, o, c) : !0) : !!o
  return !1
}
function Io(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const i = r[s]
    if (t[i] !== e[i] && !ys(n, i)) return !0
  }
  return !1
}
function Yi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent)
}
const Al = (e) => e.__isSuspense,
  xf = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, n, r, s, i, o, a, l, c) {
      e == null ? $f(t, n, r, s, i, o, a, l, c) : jf(e, t, n, r, s, o, a, l, c)
    },
    hydrate: If,
    create: Zi,
    normalize: Lf
  },
  xl = xf
function pr(e, t) {
  const n = e.props && e.props[t]
  Z(n) && n()
}
function $f(e, t, n, r, s, i, o, a, l) {
  const {
      p: c,
      o: { createElement: u }
    } = l,
    f = u('div'),
    h = (e.suspense = Zi(e, s, r, t, f, n, i, o, a, l))
  c(null, (h.pendingBranch = e.ssContent), f, null, r, h, i, o), h.deps > 0 ? (pr(e, 'onPending'), pr(e, 'onFallback'), c(null, e.ssFallback, t, n, r, null, i, o), Cn(h, e.ssFallback)) : h.resolve()
}
function jf(e, t, n, r, s, i, o, a, { p: l, um: c, o: { createElement: u } }) {
  const f = (t.suspense = e.suspense)
  ;(f.vnode = t), (t.el = e.el)
  const h = t.ssContent,
    y = t.ssFallback,
    { activeBranch: m, pendingBranch: w, isInFallback: E, isHydrating: v } = f
  if (w) (f.pendingBranch = h), nt(h, w) ? (l(w, h, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0 ? f.resolve() : E && (l(m, y, n, r, s, null, i, o, a), Cn(f, y))) : (f.pendingId++, v ? ((f.isHydrating = !1), (f.activeBranch = w)) : c(w, s, f), (f.deps = 0), (f.effects.length = 0), (f.hiddenContainer = u('div')), E ? (l(null, h, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0 ? f.resolve() : (l(m, y, n, r, s, null, i, o, a), Cn(f, y))) : m && nt(h, m) ? (l(m, h, n, r, s, f, i, o, a), f.resolve(!0)) : (l(null, h, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0 && f.resolve()))
  else if (m && nt(h, m)) l(m, h, n, r, s, f, i, o, a), Cn(f, h)
  else if ((pr(t, 'onPending'), (f.pendingBranch = h), f.pendingId++, l(null, h, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0)) f.resolve()
  else {
    const { timeout: p, pendingId: b } = f
    p > 0
      ? setTimeout(() => {
          f.pendingId === b && f.fallback(y)
        }, p)
      : p === 0 && f.fallback(y)
  }
}
function Zi(e, t, n, r, s, i, o, a, l, c, u = !1) {
  const {
      p: f,
      m: h,
      um: y,
      n: m,
      o: { parentNode: w, remove: E }
    } = c,
    v = e.props ? zr(e.props.timeout) : void 0,
    p = {
      vnode: e,
      parent: t,
      parentComponent: n,
      isSVG: o,
      container: r,
      hiddenContainer: s,
      anchor: i,
      deps: 0,
      pendingId: 0,
      timeout: typeof v == 'number' ? v : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(b = !1) {
        const { vnode: R, activeBranch: O, pendingBranch: j, pendingId: A, effects: T, parentComponent: D, container: F } = p
        if (p.isHydrating) p.isHydrating = !1
        else if (!b) {
          const X = O && j.transition && j.transition.mode === 'out-in'
          X &&
            (O.transition.afterLeave = () => {
              A === p.pendingId && h(j, F, g, 0)
            })
          let { anchor: g } = p
          O && ((g = m(O)), y(O, D, p, !0)), X || h(j, F, g, 0)
        }
        Cn(p, j), (p.pendingBranch = null), (p.isInFallback = !1)
        let B = p.parent,
          U = !1
        for (; B; ) {
          if (B.pendingBranch) {
            B.effects.push(...T), (U = !0)
            break
          }
          B = B.parent
        }
        U || Ol(T), (p.effects = []), pr(R, 'onResolve')
      },
      fallback(b) {
        if (!p.pendingBranch) return
        const { vnode: R, activeBranch: O, parentComponent: j, container: A, isSVG: T } = p
        pr(R, 'onFallback')
        const D = m(O),
          F = () => {
            p.isInFallback && (f(null, b, A, D, j, null, T, a, l), Cn(p, b))
          },
          B = b.transition && b.transition.mode === 'out-in'
        B && (O.transition.afterLeave = F), (p.isInFallback = !0), y(O, j, null, !0), B || F()
      },
      move(b, R, O) {
        p.activeBranch && h(p.activeBranch, b, R, O), (p.container = b)
      },
      next() {
        return p.activeBranch && m(p.activeBranch)
      },
      registerDep(b, R) {
        const O = !!p.pendingBranch
        O && p.deps++
        const j = b.vnode.el
        b.asyncDep
          .catch((A) => {
            Nn(A, b, 0)
          })
          .then((A) => {
            if (b.isUnmounted || p.isUnmounted || p.pendingId !== b.suspenseId) return
            b.asyncResolved = !0
            const { vnode: T } = b
            mi(b, A, !1), j && (T.el = j)
            const D = !j && b.subTree.el
            R(b, T, w(j || b.subTree.el), j ? null : m(b.subTree), p, o, l), D && E(D), Yi(b, T.el), O && --p.deps === 0 && p.resolve()
          })
      },
      unmount(b, R) {
        ;(p.isUnmounted = !0), p.activeBranch && y(p.activeBranch, n, b, R), p.pendingBranch && y(p.pendingBranch, n, b, R)
      }
    }
  return p
}
function If(e, t, n, r, s, i, o, a, l) {
  const c = (t.suspense = Zi(t, r, n, e.parentNode, document.createElement('div'), null, s, i, o, a, !0)),
    u = l(e, (c.pendingBranch = t.ssContent), n, c, i, o)
  return c.deps === 0 && c.resolve(), u
}
function Lf(e) {
  const { shapeFlag: t, children: n } = e,
    r = t & 32
  ;(e.ssContent = Lo(r ? n.default : n)), (e.ssFallback = r ? Lo(n.fallback) : ye(Le))
}
function Lo(e) {
  let t
  if (Z(e)) {
    const n = ln && e._c
    n && ((e._d = !1), It()), (e = e()), n && ((e._d = !0), (t = Ue), Yl())
  }
  return q(e) && (e = Of(e)), (e = qe(e)), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e
}
function $l(e, t) {
  t && t.pendingBranch ? (q(e) ? t.effects.push(...e) : t.effects.push(e)) : Ol(e)
}
function Cn(e, t) {
  e.activeBranch = t
  const { vnode: n, parentComponent: r } = e,
    s = (n.el = t.el)
  r && r.subTree === n && ((r.vnode.el = s), Yi(r, s))
}
function Pn(e, t) {
  if (we) {
    let n = we.provides
    const r = we.parent && we.parent.provides
    r === n && (n = we.provides = Object.create(r)), (n[e] = t)
  }
}
function Me(e, t, n = !1) {
  const r = we || Ae
  if (r) {
    const s = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && Z(t) ? t.call(r.proxy) : t
  }
}
function Df(e, t) {
  return vr(e, null, t)
}
function Hf(e, t) {
  return vr(e, null, { flush: 'post' })
}
function jv(e, t) {
  return vr(e, null, { flush: 'sync' })
}
const $r = {}
function Ut(e, t, n) {
  return vr(e, t, n)
}
function vr(e, t, { immediate: n, deep: r, flush: s, onTrack: i, onTrigger: o } = pe) {
  const a = al() === (we == null ? void 0 : we.scope) ? we : null
  let l,
    c = !1,
    u = !1
  if (
    (Ee(e)
      ? ((l = () => e.value), (c = Gr(e)))
      : Dt(e)
      ? ((l = () => e), (r = !0))
      : q(e)
      ? ((u = !0),
        (c = e.some((b) => Dt(b) || Gr(b))),
        (l = () =>
          e.map((b) => {
            if (Ee(b)) return b.value
            if (Dt(b)) return nn(b)
            if (Z(b)) return Ht(b, a, 2)
          })))
      : Z(e)
      ? t
        ? (l = () => Ht(e, a, 2))
        : (l = () => {
            if (!(a && a.isUnmounted)) return f && f(), Xe(e, a, 3, [h])
          })
      : (l = rt),
    t && r)
  ) {
    const b = l
    l = () => nn(b())
  }
  let f,
    h = (b) => {
      f = v.onStop = () => {
        Ht(b, a, 4)
      }
    },
    y
  if ($n)
    if (((h = rt), t ? n && Xe(t, a, 3, [l(), u ? [] : void 0, h]) : l(), s === 'sync')) {
      const b = Rh()
      y = b.__watcherHandles || (b.__watcherHandles = [])
    } else return rt
  let m = u ? new Array(e.length).fill($r) : $r
  const w = () => {
    if (v.active)
      if (t) {
        const b = v.run()
        ;(r || c || (u ? b.some((R, O) => Sn(R, m[O])) : Sn(b, m))) && (f && f(), Xe(t, a, 3, [b, m === $r ? void 0 : u && m[0] === $r ? [] : m, h]), (m = b))
      } else v.run()
  }
  w.allowRecurse = !!t
  let E
  s === 'sync' ? (E = w) : s === 'post' ? (E = () => Se(w, a && a.suspense)) : ((w.pre = !0), a && (w.id = a.uid), (E = () => _s(w)))
  const v = new fs(l, E)
  t ? (n ? w() : (m = v.run())) : s === 'post' ? Se(v.run.bind(v), a && a.suspense) : v.run()
  const p = () => {
    v.stop(), a && a.scope && Vi(a.scope.effects, v)
  }
  return y && y.push(p), p
}
function Uf(e, t, n) {
  const r = this.proxy,
    s = ve(e) ? (e.includes('.') ? jl(r, e) : () => r[e]) : e.bind(r, r)
  let i
  Z(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = we
  Bt(this)
  const a = vr(s, i.bind(r), n)
  return o ? Bt(o) : Mt(), a
}
function jl(e, t) {
  const n = t.split('.')
  return () => {
    let r = e
    for (let s = 0; s < n.length && r; s++) r = r[n[s]]
    return r
  }
}
function nn(e, t) {
  if (!me(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), Ee(e))) nn(e.value, t)
  else if (q(e)) for (let n = 0; n < e.length; n++) nn(e[n], t)
  else if (un(e) || En(e))
    e.forEach((n) => {
      nn(n, t)
    })
  else if (rl(e)) for (const n in e) nn(e[n], t)
  return e
}
function Il() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
  return (
    Es(() => {
      e.isMounted = !0
    }),
    Ts(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const Je = [Function, Array],
  Mf = {
    name: 'BaseTransition',
    props: { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Je, onEnter: Je, onAfterEnter: Je, onEnterCancelled: Je, onBeforeLeave: Je, onLeave: Je, onAfterLeave: Je, onLeaveCancelled: Je, onBeforeAppear: Je, onAppear: Je, onAfterAppear: Je, onAppearCancelled: Je },
    setup(e, { slots: t }) {
      const n = Ye(),
        r = Il()
      let s
      return () => {
        const i = t.default && eo(t.default(), !0)
        if (!i || !i.length) return
        let o = i[0]
        if (i.length > 1) {
          for (const w of i)
            if (w.type !== Le) {
              o = w
              break
            }
        }
        const a = ae(e),
          { mode: l } = a
        if (r.isLeaving) return Is(o)
        const c = Do(o)
        if (!c) return Is(o)
        const u = mr(c, a, r, n)
        An(c, u)
        const f = n.subTree,
          h = f && Do(f)
        let y = !1
        const { getTransitionKey: m } = c.type
        if (m) {
          const w = m()
          s === void 0 ? (s = w) : w !== s && ((s = w), (y = !0))
        }
        if (h && h.type !== Le && (!nt(c, h) || y)) {
          const w = mr(h, a, r, n)
          if ((An(h, w), l === 'out-in'))
            return (
              (r.isLeaving = !0),
              (w.afterLeave = () => {
                ;(r.isLeaving = !1), n.update.active !== !1 && n.update()
              }),
              Is(o)
            )
          l === 'in-out' &&
            c.type !== Le &&
            (w.delayLeave = (E, v, p) => {
              const b = Dl(r, h)
              ;(b[String(h.key)] = h),
                (E._leaveCb = () => {
                  v(), (E._leaveCb = void 0), delete u.delayedLeave
                }),
                (u.delayedLeave = p)
            })
        }
        return o
      }
    }
  },
  Ll = Mf
function Dl(e, t) {
  const { leavingVNodes: n } = e
  let r = n.get(t.type)
  return r || ((r = Object.create(null)), n.set(t.type, r)), r
}
function mr(e, t, n, r) {
  const { appear: s, mode: i, persisted: o = !1, onBeforeEnter: a, onEnter: l, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: h, onAfterLeave: y, onLeaveCancelled: m, onBeforeAppear: w, onAppear: E, onAfterAppear: v, onAppearCancelled: p } = t,
    b = String(e.key),
    R = Dl(n, e),
    O = (T, D) => {
      T && Xe(T, r, 9, D)
    },
    j = (T, D) => {
      const F = D[1]
      O(T, D), q(T) ? T.every((B) => B.length <= 1) && F() : T.length <= 1 && F()
    },
    A = {
      mode: i,
      persisted: o,
      beforeEnter(T) {
        let D = a
        if (!n.isMounted)
          if (s) D = w || a
          else return
        T._leaveCb && T._leaveCb(!0)
        const F = R[b]
        F && nt(e, F) && F.el._leaveCb && F.el._leaveCb(), O(D, [T])
      },
      enter(T) {
        let D = l,
          F = c,
          B = u
        if (!n.isMounted)
          if (s) (D = E || l), (F = v || c), (B = p || u)
          else return
        let U = !1
        const X = (T._enterCb = (g) => {
          U || ((U = !0), g ? O(B, [T]) : O(F, [T]), A.delayedLeave && A.delayedLeave(), (T._enterCb = void 0))
        })
        D ? j(D, [T, X]) : X()
      },
      leave(T, D) {
        const F = String(e.key)
        if ((T._enterCb && T._enterCb(!0), n.isUnmounting)) return D()
        O(f, [T])
        let B = !1
        const U = (T._leaveCb = (X) => {
          B || ((B = !0), D(), X ? O(m, [T]) : O(y, [T]), (T._leaveCb = void 0), R[F] === e && delete R[F])
        })
        ;(R[F] = e), h ? j(h, [T, U]) : U()
      },
      clone(T) {
        return mr(T, t, n, r)
      }
    }
  return A
}
function Is(e) {
  if (br(e)) return (e = wt(e)), (e.children = null), e
}
function Do(e) {
  return br(e) ? (e.children ? e.children[0] : void 0) : e
}
function An(e, t) {
  e.shapeFlag & 6 && e.component ? An(e.component.subTree, t) : e.shapeFlag & 128 ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback))) : (e.transition = t)
}
function eo(e, t = !1, n) {
  let r = [],
    s = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === xe ? (o.patchFlag & 128 && s++, (r = r.concat(eo(o.children, t, a)))) : (t || o.type !== Le) && r.push(a != null ? wt(o, { key: a }) : o)
  }
  if (s > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2
  return r
}
function Et(e) {
  return Z(e) ? { setup: e, name: e.name } : e
}
const on = (e) => !!e.type.__asyncLoader
function oe(e) {
  Z(e) && (e = { loader: e })
  const { loader: t, loadingComponent: n, errorComponent: r, delay: s = 200, timeout: i, suspensible: o = !0, onError: a } = e
  let l = null,
    c,
    u = 0
  const f = () => (u++, (l = null), h()),
    h = () => {
      let y
      return (
        l ||
        (y = l =
          t()
            .catch((m) => {
              if (((m = m instanceof Error ? m : new Error(String(m))), a))
                return new Promise((w, E) => {
                  a(
                    m,
                    () => w(f()),
                    () => E(m),
                    u + 1
                  )
                })
              throw m
            })
            .then((m) => (y !== l && l ? l : (m && (m.__esModule || m[Symbol.toStringTag] === 'Module') && (m = m.default), (c = m), m))))
      )
    }
  return Et({
    name: 'AsyncComponentWrapper',
    __asyncLoader: h,
    get __asyncResolved() {
      return c
    },
    setup() {
      const y = we
      if (c) return () => Ls(c, y)
      const m = (p) => {
        ;(l = null), Nn(p, y, 13, !r)
      }
      if ((o && y.suspense) || $n)
        return h()
          .then((p) => () => Ls(p, y))
          .catch((p) => (m(p), () => (r ? ye(r, { error: p }) : null)))
      const w = vt(!1),
        E = vt(),
        v = vt(!!s)
      return (
        s &&
          setTimeout(() => {
            v.value = !1
          }, s),
        i != null &&
          setTimeout(() => {
            if (!w.value && !E.value) {
              const p = new Error(`Async component timed out after ${i}ms.`)
              m(p), (E.value = p)
            }
          }, i),
        h()
          .then(() => {
            ;(w.value = !0), y.parent && br(y.parent.vnode) && _s(y.parent.update)
          })
          .catch((p) => {
            m(p), (E.value = p)
          }),
        () => {
          if (w.value && c) return Ls(c, y)
          if (E.value && r) return ye(r, { error: E.value })
          if (n && !v.value) return ye(n)
        }
      )
    }
  })
}
function Ls(e, t) {
  const { ref: n, props: r, children: s, ce: i } = t.vnode,
    o = ye(e, r, s)
  return (o.ref = n), (o.ce = i), delete t.vnode.ce, o
}
const br = (e) => e.type.__isKeepAlive,
  Nf = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] },
    setup(e, { slots: t }) {
      const n = Ye(),
        r = n.ctx
      if (!r.renderer)
        return () => {
          const p = t.default && t.default()
          return p && p.length === 1 ? p[0] : p
        }
      const s = new Map(),
        i = new Set()
      let o = null
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: c,
            um: u,
            o: { createElement: f }
          }
        } = r,
        h = f('div')
      ;(r.activate = (p, b, R, O, j) => {
        const A = p.component
        c(p, b, R, 0, a),
          l(A.vnode, p, b, R, A, a, O, p.slotScopeIds, j),
          Se(() => {
            ;(A.isDeactivated = !1), A.a && Tn(A.a)
            const T = p.props && p.props.onVnodeMounted
            T && De(T, A.parent, p)
          }, a)
      }),
        (r.deactivate = (p) => {
          const b = p.component
          c(p, h, null, 1, a),
            Se(() => {
              b.da && Tn(b.da)
              const R = p.props && p.props.onVnodeUnmounted
              R && De(R, b.parent, p), (b.isDeactivated = !0)
            }, a)
        })
      function y(p) {
        Ds(p), u(p, n, a, !0)
      }
      function m(p) {
        s.forEach((b, R) => {
          const O = _i(b.type)
          O && (!p || !p(O)) && w(R)
        })
      }
      function w(p) {
        const b = s.get(p)
        !o || !nt(b, o) ? y(b) : o && Ds(o), s.delete(p), i.delete(p)
      }
      Ut(
        () => [e.include, e.exclude],
        ([p, b]) => {
          p && m((R) => Xn(p, R)), b && m((R) => !Xn(b, R))
        },
        { flush: 'post', deep: !0 }
      )
      let E = null
      const v = () => {
        E != null && s.set(E, Hs(n.subTree))
      }
      return (
        Es(v),
        to(v),
        Ts(() => {
          s.forEach((p) => {
            const { subTree: b, suspense: R } = n,
              O = Hs(b)
            if (p.type === O.type && p.key === O.key) {
              Ds(O)
              const j = O.component.da
              j && Se(j, R)
              return
            }
            y(p)
          })
        }),
        () => {
          if (((E = null), !t.default)) return null
          const p = t.default(),
            b = p[0]
          if (p.length > 1) return (o = null), p
          if (!cn(b) || (!(b.shapeFlag & 4) && !(b.shapeFlag & 128))) return (o = null), b
          let R = Hs(b)
          const O = R.type,
            j = _i(on(R) ? R.type.__asyncResolved || {} : O),
            { include: A, exclude: T, max: D } = e
          if ((A && (!j || !Xn(A, j))) || (T && j && Xn(T, j))) return (o = R), b
          const F = R.key == null ? O : R.key,
            B = s.get(F)
          return R.el && ((R = wt(R)), b.shapeFlag & 128 && (b.ssContent = R)), (E = F), B ? ((R.el = B.el), (R.component = B.component), R.transition && An(R, R.transition), (R.shapeFlag |= 512), i.delete(F), i.add(F)) : (i.add(F), D && i.size > parseInt(D, 10) && w(i.values().next().value)), (R.shapeFlag |= 256), (o = R), Al(b.type) ? b : R
        }
      )
    }
  },
  Ff = Nf
function Xn(e, t) {
  return q(e) ? e.some((n) => Xn(n, t)) : ve(e) ? e.split(',').includes(t) : $u(e) ? e.test(t) : !1
}
function Hl(e, t) {
  Ml(e, 'a', t)
}
function Ul(e, t) {
  Ml(e, 'da', t)
}
function Ml(e, t, n = we) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n
      for (; s; ) {
        if (s.isDeactivated) return
        s = s.parent
      }
      return e()
    })
  if ((ws(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) br(s.parent.vnode) && Bf(r, t, n, s), (s = s.parent)
  }
}
function Bf(e, t, n, r) {
  const s = ws(t, e, r, !0)
  no(() => {
    Vi(r[t], s)
  }, n)
}
function Ds(e) {
  ;(e.shapeFlag &= -257), (e.shapeFlag &= -513)
}
function Hs(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}
function ws(e, t, n = we, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return
          Un(), Bt(n)
          const a = Xe(t, n, e, o)
          return Mt(), Mn(), a
        })
    return r ? s.unshift(i) : s.push(i), i
  }
}
const Tt =
    (e) =>
    (t, n = we) =>
      (!$n || e === 'sp') && ws(e, (...r) => t(...r), n),
  Vf = Tt('bm'),
  Es = Tt('m'),
  Kf = Tt('bu'),
  to = Tt('u'),
  Ts = Tt('bum'),
  no = Tt('um'),
  qf = Tt('sp'),
  Wf = Tt('rtg'),
  zf = Tt('rtc')
function Nl(e, t = we) {
  ws('ec', e, t)
}
function Iv(e, t) {
  const n = Ae
  if (n === null) return e
  const r = Cs(n) || n.proxy,
    s = e.dirs || (e.dirs = [])
  for (let i = 0; i < t.length; i++) {
    let [o, a, l, c = pe] = t[i]
    o && (Z(o) && (o = { mounted: o, updated: o }), o.deep && nn(a), s.push({ dir: o, instance: r, value: a, oldValue: void 0, arg: l, modifiers: c }))
  }
  return e
}
function ut(e, t, n, r) {
  const s = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < s.length; o++) {
    const a = s[o]
    i && (a.oldValue = i[o].value)
    let l = a.dir[r]
    l && (Un(), Xe(l, n, 8, [e.el, a, e, t]), Mn())
  }
}
const ro = 'components',
  Jf = 'directives'
function Lv(e, t) {
  return so(ro, e, !0, t) || e
}
const Fl = Symbol()
function Dv(e) {
  return ve(e) ? so(ro, e, !1) || e : e || Fl
}
function Hv(e) {
  return so(Jf, e)
}
function so(e, t, n = !0, r = !1) {
  const s = Ae || we
  if (s) {
    const i = s.type
    if (e === ro) {
      const a = _i(i, !1)
      if (a && (a === t || a === We(t) || a === us(We(t)))) return i
    }
    const o = Ho(s[e] || i[e], t) || Ho(s.appContext[e], t)
    return !o && r ? i : o
  }
}
function Ho(e, t) {
  return e && (e[t] || e[We(t)] || e[us(We(t))])
}
function Uv(e, t, n, r) {
  let s
  const i = n && n[r]
  if (q(e) || ve(e)) {
    s = new Array(e.length)
    for (let o = 0, a = e.length; o < a; o++) s[o] = t(e[o], o, void 0, i && i[o])
  } else if (typeof e == 'number') {
    s = new Array(e)
    for (let o = 0; o < e; o++) s[o] = t(o + 1, o, void 0, i && i[o])
  } else if (me(e))
    if (e[Symbol.iterator]) s = Array.from(e, (o, a) => t(o, a, void 0, i && i[a]))
    else {
      const o = Object.keys(e)
      s = new Array(o.length)
      for (let a = 0, l = o.length; a < l; a++) {
        const c = o[a]
        s[a] = t(e[c], c, a, i && i[a])
      }
    }
  else s = []
  return n && (n[r] = s), s
}
function Mv(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n]
    if (q(r)) for (let s = 0; s < r.length; s++) e[r[s].name] = r[s].fn
    else
      r &&
        (e[r.name] = r.key
          ? (...s) => {
              const i = r.fn(...s)
              return i && (i.key = r.key), i
            }
          : r.fn)
  }
  return e
}
function Nv(e, t, n = {}, r, s) {
  if (Ae.isCE || (Ae.parent && on(Ae.parent) && Ae.parent.isCE)) return t !== 'default' && (n.name = t), ye('slot', n, r && r())
  let i = e[t]
  i && i._c && (i._d = !1), It()
  const o = i && Bl(i(n)),
    a = rn(xe, { key: n.key || (o && o.key) || `_${t}` }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2)
  return !s && a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']), i && i._c && (i._d = !0), a
}
function Bl(e) {
  return e.some((t) => (cn(t) ? !(t.type === Le || (t.type === xe && !Bl(t.children))) : !0)) ? e : null
}
function Fv(e, t) {
  const n = {}
  for (const r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : Br(r)] = e[r]
  return n
}
const ci = (e) => (e ? (sc(e) ? Cs(e) || e.proxy : ci(e.parent)) : null),
  Zn = Te(Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => ci(e.parent), $root: (e) => ci(e.root), $emit: (e) => e.emit, $options: (e) => io(e), $forceUpdate: (e) => e.f || (e.f = () => _s(e.update)), $nextTick: (e) => e.n || (e.n = Kt.bind(e.proxy)), $watch: (e) => Uf.bind(e) }),
  Us = (e, t) => e !== pe && !e.__isScriptSetup && ce(e, t),
  ui = {
    get({ _: e }, t) {
      const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: a, appContext: l } = e
      let c
      if (t[0] !== '$') {
        const y = o[t]
        if (y !== void 0)
          switch (y) {
            case 1:
              return r[t]
            case 2:
              return s[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (Us(r, t)) return (o[t] = 1), r[t]
          if (s !== pe && ce(s, t)) return (o[t] = 2), s[t]
          if ((c = e.propsOptions[0]) && ce(c, t)) return (o[t] = 3), i[t]
          if (n !== pe && ce(n, t)) return (o[t] = 4), n[t]
          fi && (o[t] = 0)
        }
      }
      const u = Zn[t]
      let f, h
      if (u) return t === '$attrs' && Ne(e, 'get', t), u(e)
      if ((f = a.__cssModules) && (f = f[t])) return f
      if (n !== pe && ce(n, t)) return (o[t] = 4), n[t]
      if (((h = l.config.globalProperties), ce(h, t))) return h[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: i } = e
      return Us(s, t) ? ((s[t] = n), !0) : r !== pe && ce(r, t) ? ((r[t] = n), !0) : ce(e.props, t) || (t[0] === '$' && t.slice(1) in e) ? !1 : ((i[t] = n), !0)
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i } }, o) {
      let a
      return !!n[o] || (e !== pe && ce(e, o)) || Us(t, o) || ((a = i[0]) && ce(a, o)) || ce(r, o) || ce(Zn, o) || ce(s.config.globalProperties, o)
    },
    defineProperty(e, t, n) {
      return n.get != null ? (e._.accessCache[t] = 0) : ce(n, 'value') && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
  },
  Gf = Te({}, ui, {
    get(e, t) {
      if (t !== Symbol.unscopables) return ui.get(e, t, e)
    },
    has(e, t) {
      return t[0] !== '_' && !wu(t)
    }
  })
let fi = !0
function Qf(e) {
  const t = io(e),
    n = e.proxy,
    r = e.ctx
  ;(fi = !1), t.beforeCreate && Uo(t.beforeCreate, e, 'bc')
  const { data: s, computed: i, methods: o, watch: a, provide: l, inject: c, created: u, beforeMount: f, mounted: h, beforeUpdate: y, updated: m, activated: w, deactivated: E, beforeDestroy: v, beforeUnmount: p, destroyed: b, unmounted: R, render: O, renderTracked: j, renderTriggered: A, errorCaptured: T, serverPrefetch: D, expose: F, inheritAttrs: B, components: U, directives: X, filters: g } = t
  if ((c && Xf(c, r, null, e.appContext.config.unwrapInjectedRef), o))
    for (const te in o) {
      const Y = o[te]
      Z(Y) && (r[te] = Y.bind(n))
    }
  if (s) {
    const te = s.call(n, n)
    me(te) && (e.data = it(te))
  }
  if (((fi = !0), i))
    for (const te in i) {
      const Y = i[te],
        re = Z(Y) ? Y.bind(n, n) : Z(Y.get) ? Y.get.bind(n, n) : rt,
        ze = !Z(Y) && Z(Y.set) ? Y.set.bind(n) : rt,
        Oe = je({ get: re, set: ze })
      Object.defineProperty(r, te, { enumerable: !0, configurable: !0, get: () => Oe.value, set: (Ce) => (Oe.value = Ce) })
    }
  if (a) for (const te in a) Vl(a[te], r, n, te)
  if (l) {
    const te = Z(l) ? l.call(n) : l
    Reflect.ownKeys(te).forEach((Y) => {
      Pn(Y, te[Y])
    })
  }
  u && Uo(u, e, 'c')
  function M(te, Y) {
    q(Y) ? Y.forEach((re) => te(re.bind(n))) : Y && te(Y.bind(n))
  }
  if ((M(Vf, f), M(Es, h), M(Kf, y), M(to, m), M(Hl, w), M(Ul, E), M(Nl, T), M(zf, j), M(Wf, A), M(Ts, p), M(no, R), M(qf, D), q(F)))
    if (F.length) {
      const te = e.exposed || (e.exposed = {})
      F.forEach((Y) => {
        Object.defineProperty(te, Y, { get: () => n[Y], set: (re) => (n[Y] = re) })
      })
    } else e.exposed || (e.exposed = {})
  O && e.render === rt && (e.render = O), B != null && (e.inheritAttrs = B), U && (e.components = U), X && (e.directives = X)
}
function Xf(e, t, n = rt, r = !1) {
  q(e) && (e = hi(e))
  for (const s in e) {
    const i = e[s]
    let o
    me(i) ? ('default' in i ? (o = Me(i.from || s, i.default, !0)) : (o = Me(i.from || s))) : (o = Me(i)), Ee(o) && r ? Object.defineProperty(t, s, { enumerable: !0, configurable: !0, get: () => o.value, set: (a) => (o.value = a) }) : (t[s] = o)
  }
}
function Uo(e, t, n) {
  Xe(q(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Vl(e, t, n, r) {
  const s = r.includes('.') ? jl(n, r) : () => n[r]
  if (ve(e)) {
    const i = t[e]
    Z(i) && Ut(s, i)
  } else if (Z(e)) Ut(s, e.bind(n))
  else if (me(e))
    if (q(e)) e.forEach((i) => Vl(i, t, n, r))
    else {
      const i = Z(e.handler) ? e.handler.bind(n) : t[e.handler]
      Z(i) && Ut(s, i, e)
    }
}
function io(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: i,
      config: { optionMergeStrategies: o }
    } = e.appContext,
    a = i.get(t)
  let l
  return a ? (l = a) : !s.length && !n && !r ? (l = t) : ((l = {}), s.length && s.forEach((c) => Xr(l, c, o, !0)), Xr(l, t, o)), me(t) && i.set(t, l), l
}
function Xr(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t
  i && Xr(e, i, n, !0), s && s.forEach((o) => Xr(e, o, n, !0))
  for (const o in t)
    if (!(r && o === 'expose')) {
      const a = Yf[o] || (n && n[o])
      e[o] = a ? a(e[o], t[o]) : t[o]
    }
  return e
}
const Yf = { data: Mo, props: Jt, emits: Jt, methods: Jt, computed: Jt, beforeCreate: Ie, created: Ie, beforeMount: Ie, mounted: Ie, beforeUpdate: Ie, updated: Ie, beforeDestroy: Ie, beforeUnmount: Ie, destroyed: Ie, unmounted: Ie, activated: Ie, deactivated: Ie, errorCaptured: Ie, serverPrefetch: Ie, components: Jt, directives: Jt, watch: eh, provide: Mo, inject: Zf }
function Mo(e, t) {
  return t
    ? e
      ? function () {
          return Te(Z(e) ? e.call(this, this) : e, Z(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function Zf(e, t) {
  return Jt(hi(e), hi(t))
}
function hi(e) {
  if (q(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Ie(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Jt(e, t) {
  return e ? Te(Te(Object.create(null), e), t) : t
}
function eh(e, t) {
  if (!e) return t
  if (!t) return e
  const n = Te(Object.create(null), e)
  for (const r in t) n[r] = Ie(e[r], t[r])
  return n
}
function th(e, t, n, r = !1) {
  const s = {},
    i = {}
  qr(i, Rs, 1), (e.propsDefaults = Object.create(null)), Kl(e, t, s, i)
  for (const o in e.propsOptions[0]) o in s || (s[o] = void 0)
  n ? (e.props = r ? s : df(s)) : e.type.props ? (e.props = s) : (e.props = i), (e.attrs = i)
}
function nh(e, t, n, r) {
  const {
      props: s,
      attrs: i,
      vnode: { patchFlag: o }
    } = e,
    a = ae(s),
    [l] = e.propsOptions
  let c = !1
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps
      for (let f = 0; f < u.length; f++) {
        let h = u[f]
        if (ys(e.emitsOptions, h)) continue
        const y = t[h]
        if (l)
          if (ce(i, h)) y !== i[h] && ((i[h] = y), (c = !0))
          else {
            const m = We(h)
            s[m] = di(l, a, m, y, e, !1)
          }
        else y !== i[h] && ((i[h] = y), (c = !0))
      }
    }
  } else {
    Kl(e, t, s, i) && (c = !0)
    let u
    for (const f in a) (!t || (!ce(t, f) && ((u = Qe(f)) === f || !ce(t, u)))) && (l ? n && (n[f] !== void 0 || n[u] !== void 0) && (s[f] = di(l, a, f, void 0, e, !0)) : delete s[f])
    if (i !== a) for (const f in i) (!t || !ce(t, f)) && (delete i[f], (c = !0))
  }
  c && bt(e, 'set', '$attrs')
}
function Kl(e, t, n, r) {
  const [s, i] = e.propsOptions
  let o = !1,
    a
  if (t)
    for (let l in t) {
      if (Yn(l)) continue
      const c = t[l]
      let u
      s && ce(s, (u = We(l))) ? (!i || !i.includes(u) ? (n[u] = c) : ((a || (a = {}))[u] = c)) : ys(e.emitsOptions, l) || ((!(l in r) || c !== r[l]) && ((r[l] = c), (o = !0)))
    }
  if (i) {
    const l = ae(n),
      c = a || pe
    for (let u = 0; u < i.length; u++) {
      const f = i[u]
      n[f] = di(s, l, f, c[f], e, !ce(c, f))
    }
  }
  return o
}
function di(e, t, n, r, s, i) {
  const o = e[n]
  if (o != null) {
    const a = ce(o, 'default')
    if (a && r === void 0) {
      const l = o.default
      if (o.type !== Function && Z(l)) {
        const { propsDefaults: c } = s
        n in c ? (r = c[n]) : (Bt(s), (r = c[n] = l.call(null, t)), Mt())
      } else r = l
    }
    o[0] && (i && !a ? (r = !1) : o[1] && (r === '' || r === Qe(n)) && (r = !0))
  }
  return r
}
function ql(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e)
  if (s) return s
  const i = e.props,
    o = {},
    a = []
  let l = !1
  if (!Z(e)) {
    const u = (f) => {
      l = !0
      const [h, y] = ql(f, t, !0)
      Te(o, h), y && a.push(...y)
    }
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
  }
  if (!i && !l) return me(e) && r.set(e, wn), wn
  if (q(i))
    for (let u = 0; u < i.length; u++) {
      const f = We(i[u])
      No(f) && (o[f] = pe)
    }
  else if (i)
    for (const u in i) {
      const f = We(u)
      if (No(f)) {
        const h = i[u],
          y = (o[f] = q(h) || Z(h) ? { type: h } : Object.assign({}, h))
        if (y) {
          const m = Vo(Boolean, y.type),
            w = Vo(String, y.type)
          ;(y[0] = m > -1), (y[1] = w < 0 || m < w), (m > -1 || ce(y, 'default')) && a.push(f)
        }
      }
    }
  const c = [o, a]
  return me(e) && r.set(e, c), c
}
function No(e) {
  return e[0] !== '$'
}
function Fo(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? 'null' : ''
}
function Bo(e, t) {
  return Fo(e) === Fo(t)
}
function Vo(e, t) {
  return q(t) ? t.findIndex((n) => Bo(n, e)) : Z(t) && Bo(t, e) ? 0 : -1
}
const Wl = (e) => e[0] === '_' || e === '$stable',
  oo = (e) => (q(e) ? e.map(qe) : [qe(e)]),
  rh = (e, t, n) => {
    if (t._n) return t
    const r = bs((...s) => oo(t(...s)), n)
    return (r._c = !1), r
  },
  zl = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (Wl(s)) continue
      const i = e[s]
      if (Z(i)) t[s] = rh(s, i, r)
      else if (i != null) {
        const o = oo(i)
        t[s] = () => o
      }
    }
  },
  Jl = (e, t) => {
    const n = oo(t)
    e.slots.default = () => n
  },
  sh = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = ae(t)), qr(t, '_', n)) : zl(t, (e.slots = {}))
    } else (e.slots = {}), t && Jl(e, t)
    qr(e.slots, Rs, 1)
  },
  ih = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let i = !0,
      o = pe
    if (r.shapeFlag & 32) {
      const a = t._
      a ? (n && a === 1 ? (i = !1) : (Te(s, t), !n && a === 1 && delete s._)) : ((i = !t.$stable), zl(t, s)), (o = t)
    } else t && (Jl(e, t), (o = { default: 1 }))
    if (i) for (const a in s) !Wl(a) && !(a in o) && delete s[a]
  }
function Gl() {
  return { app: null, config: { isNativeTag: ku, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: Object.create(null), optionsCache: new WeakMap(), propsCache: new WeakMap(), emitsCache: new WeakMap() }
}
let oh = 0
function ah(e, t) {
  return function (r, s = null) {
    Z(r) || (r = Object.assign({}, r)), s != null && !me(s) && (s = null)
    const i = Gl(),
      o = new Set()
    let a = !1
    const l = (i.app = {
      _uid: oh++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: cc,
      get config() {
        return i.config
      },
      set config(c) {},
      use(c, ...u) {
        return o.has(c) || (c && Z(c.install) ? (o.add(c), c.install(l, ...u)) : Z(c) && (o.add(c), c(l, ...u))), l
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), l
      },
      component(c, u) {
        return u ? ((i.components[c] = u), l) : i.components[c]
      },
      directive(c, u) {
        return u ? ((i.directives[c] = u), l) : i.directives[c]
      },
      mount(c, u, f) {
        if (!a) {
          const h = ye(r, s)
          return (h.appContext = i), u && t ? t(h, c) : e(h, c, f), (a = !0), (l._container = c), (c.__vue_app__ = l), Cs(h.component) || h.component.proxy
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__)
      },
      provide(c, u) {
        return (i.provides[c] = u), l
      }
    })
    return l
  }
}
function Yr(e, t, n, r, s = !1) {
  if (q(e)) {
    e.forEach((h, y) => Yr(h, t && (q(t) ? t[y] : t), n, r, s))
    return
  }
  if (on(r) && !s) return
  const i = r.shapeFlag & 4 ? Cs(r.component) || r.component.proxy : r.el,
    o = s ? null : i,
    { i: a, r: l } = e,
    c = t && t.r,
    u = a.refs === pe ? (a.refs = {}) : a.refs,
    f = a.setupState
  if ((c != null && c !== l && (ve(c) ? ((u[c] = null), ce(f, c) && (f[c] = null)) : Ee(c) && (c.value = null)), Z(l))) Ht(l, a, 12, [o, u])
  else {
    const h = ve(l),
      y = Ee(l)
    if (h || y) {
      const m = () => {
        if (e.f) {
          const w = h ? (ce(f, l) ? f[l] : u[l]) : l.value
          s ? q(w) && Vi(w, i) : q(w) ? w.includes(i) || w.push(i) : h ? ((u[l] = [i]), ce(f, l) && (f[l] = u[l])) : ((l.value = [i]), e.k && (u[e.k] = l.value))
        } else h ? ((u[l] = o), ce(f, l) && (f[l] = o)) : y && ((l.value = o), e.k && (u[e.k] = o))
      }
      o ? ((m.id = -1), Se(m, n)) : m()
    }
  }
}
let Pt = !1
const jr = (e) => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
  Ir = (e) => e.nodeType === 8
function lh(e) {
  const {
      mt: t,
      p: n,
      o: { patchProp: r, createText: s, nextSibling: i, parentNode: o, remove: a, insert: l, createComment: c }
    } = e,
    u = (v, p) => {
      if (!p.hasChildNodes()) {
        n(null, v, p), Qr(), (p._vnode = v)
        return
      }
      ;(Pt = !1), f(p.firstChild, v, null, null, null), Qr(), (p._vnode = v), Pt && console.error('Hydration completed but contains mismatches.')
    },
    f = (v, p, b, R, O, j = !1) => {
      const A = Ir(v) && v.data === '[',
        T = () => w(v, p, b, R, O, A),
        { type: D, ref: F, shapeFlag: B, patchFlag: U } = p
      let X = v.nodeType
      ;(p.el = v), U === -2 && ((j = !1), (p.dynamicChildren = null))
      let g = null
      switch (D) {
        case xn:
          X !== 3 ? (p.children === '' ? (l((p.el = s('')), o(v), v), (g = v)) : (g = T())) : (v.data !== p.children && ((Pt = !0), (v.data = p.children)), (g = i(v)))
          break
        case Le:
          X !== 8 || A ? (g = T()) : (g = i(v))
          break
        case On:
          if ((A && ((v = i(v)), (X = v.nodeType)), X === 1 || X === 3)) {
            g = v
            const S = !p.children.length
            for (let M = 0; M < p.staticCount; M++) S && (p.children += g.nodeType === 1 ? g.outerHTML : g.data), M === p.staticCount - 1 && (p.anchor = g), (g = i(g))
            return A ? i(g) : g
          } else T()
          break
        case xe:
          A ? (g = m(v, p, b, R, O, j)) : (g = T())
          break
        default:
          if (B & 1) X !== 1 || p.type.toLowerCase() !== v.tagName.toLowerCase() ? (g = T()) : (g = h(v, p, b, R, O, j))
          else if (B & 6) {
            p.slotScopeIds = O
            const S = o(v)
            if ((t(p, S, null, b, R, jr(S), j), (g = A ? E(v) : i(v)), g && Ir(g) && g.data === 'teleport end' && (g = i(g)), on(p))) {
              let M
              A ? ((M = ye(xe)), (M.anchor = g ? g.previousSibling : S.lastChild)) : (M = v.nodeType === 3 ? nc('') : ye('div')), (M.el = v), (p.component.subTree = M)
            }
          } else B & 64 ? (X !== 8 ? (g = T()) : (g = p.type.hydrate(v, p, b, R, O, j, e, y))) : B & 128 && (g = p.type.hydrate(v, p, b, R, jr(o(v)), O, j, e, f))
      }
      return F != null && Yr(F, null, R, p), g
    },
    h = (v, p, b, R, O, j) => {
      j = j || !!p.dynamicChildren
      const { type: A, props: T, patchFlag: D, shapeFlag: F, dirs: B } = p,
        U = (A === 'input' && B) || A === 'option'
      if (U || D !== -1) {
        if ((B && ut(p, null, b, 'created'), T))
          if (U || !j || D & 48) for (const g in T) ((U && g.endsWith('value')) || (yr(g) && !Yn(g))) && r(v, g, null, T[g], !1, void 0, b)
          else T.onClick && r(v, 'onClick', null, T.onClick, !1, void 0, b)
        let X
        if (
          ((X = T && T.onVnodeBeforeMount) && De(X, b, p),
          B && ut(p, null, b, 'beforeMount'),
          ((X = T && T.onVnodeMounted) || B) &&
            $l(() => {
              X && De(X, b, p), B && ut(p, null, b, 'mounted')
            }, R),
          F & 16 && !(T && (T.innerHTML || T.textContent)))
        ) {
          let g = y(v.firstChild, p, v, b, R, O, j)
          for (; g; ) {
            Pt = !0
            const S = g
            ;(g = g.nextSibling), a(S)
          }
        } else F & 8 && v.textContent !== p.children && ((Pt = !0), (v.textContent = p.children))
      }
      return v.nextSibling
    },
    y = (v, p, b, R, O, j, A) => {
      A = A || !!p.dynamicChildren
      const T = p.children,
        D = T.length
      for (let F = 0; F < D; F++) {
        const B = A ? T[F] : (T[F] = qe(T[F]))
        if (v) v = f(v, B, R, O, j, A)
        else {
          if (B.type === xn && !B.children) continue
          ;(Pt = !0), n(null, B, b, null, R, O, jr(b), j)
        }
      }
      return v
    },
    m = (v, p, b, R, O, j) => {
      const { slotScopeIds: A } = p
      A && (O = O ? O.concat(A) : A)
      const T = o(v),
        D = y(i(v), p, T, b, R, O, j)
      return D && Ir(D) && D.data === ']' ? i((p.anchor = D)) : ((Pt = !0), l((p.anchor = c(']')), T, D), D)
    },
    w = (v, p, b, R, O, j) => {
      if (((Pt = !0), (p.el = null), j)) {
        const D = E(v)
        for (;;) {
          const F = i(v)
          if (F && F !== D) a(F)
          else break
        }
      }
      const A = i(v),
        T = o(v)
      return a(v), n(null, p, T, A, b, R, jr(T), O), A
    },
    E = (v) => {
      let p = 0
      for (; v; )
        if (((v = i(v)), v && Ir(v) && (v.data === '[' && p++, v.data === ']'))) {
          if (p === 0) return i(v)
          p--
        }
      return v
    }
  return [u, f]
}
const Se = $l
function ch(e) {
  return Ql(e)
}
function uh(e) {
  return Ql(e, lh)
}
function Ql(e, t) {
  const n = Du()
  n.__VUE__ = !0
  const { insert: r, remove: s, patchProp: i, createElement: o, createText: a, createComment: l, setText: c, setElementText: u, parentNode: f, nextSibling: h, setScopeId: y = rt, insertStaticContent: m } = e,
    w = (d, _, C, P = null, x = null, L = null, V = !1, I = null, H = !!_.dynamicChildren) => {
      if (d === _) return
      d && !nt(d, _) && ((P = N(d)), Ce(d, x, L, !0), (d = null)), _.patchFlag === -2 && ((H = !1), (_.dynamicChildren = null))
      const { type: $, ref: J, shapeFlag: W } = _
      switch ($) {
        case xn:
          E(d, _, C, P)
          break
        case Le:
          v(d, _, C, P)
          break
        case On:
          d == null && p(_, C, P, V)
          break
        case xe:
          U(d, _, C, P, x, L, V, I, H)
          break
        default:
          W & 1 ? O(d, _, C, P, x, L, V, I, H) : W & 6 ? X(d, _, C, P, x, L, V, I, H) : (W & 64 || W & 128) && $.process(d, _, C, P, x, L, V, I, H, le)
      }
      J != null && x && Yr(J, d && d.ref, L, _ || d, !_)
    },
    E = (d, _, C, P) => {
      if (d == null) r((_.el = a(_.children)), C, P)
      else {
        const x = (_.el = d.el)
        _.children !== d.children && c(x, _.children)
      }
    },
    v = (d, _, C, P) => {
      d == null ? r((_.el = l(_.children || '')), C, P) : (_.el = d.el)
    },
    p = (d, _, C, P) => {
      ;[d.el, d.anchor] = m(d.children, _, C, P, d.el, d.anchor)
    },
    b = ({ el: d, anchor: _ }, C, P) => {
      let x
      for (; d && d !== _; ) (x = h(d)), r(d, C, P), (d = x)
      r(_, C, P)
    },
    R = ({ el: d, anchor: _ }) => {
      let C
      for (; d && d !== _; ) (C = h(d)), s(d), (d = C)
      s(_)
    },
    O = (d, _, C, P, x, L, V, I, H) => {
      ;(V = V || _.type === 'svg'), d == null ? j(_, C, P, x, L, V, I, H) : D(d, _, x, L, V, I, H)
    },
    j = (d, _, C, P, x, L, V, I) => {
      let H, $
      const { type: J, props: W, shapeFlag: G, transition: ee, dirs: ie } = d
      if (((H = d.el = o(d.type, L, W && W.is, W)), G & 8 ? u(H, d.children) : G & 16 && T(d.children, H, null, P, x, L && J !== 'foreignObject', V, I), ie && ut(d, null, P, 'created'), A(H, d, d.scopeId, V, P), W)) {
        for (const he in W) he !== 'value' && !Yn(he) && i(H, he, null, W[he], L, d.children, P, x, K)
        'value' in W && i(H, 'value', null, W.value), ($ = W.onVnodeBeforeMount) && De($, P, d)
      }
      ie && ut(d, null, P, 'beforeMount')
      const ge = (!x || (x && !x.pendingBranch)) && ee && !ee.persisted
      ge && ee.beforeEnter(H),
        r(H, _, C),
        (($ = W && W.onVnodeMounted) || ge || ie) &&
          Se(() => {
            $ && De($, P, d), ge && ee.enter(H), ie && ut(d, null, P, 'mounted')
          }, x)
    },
    A = (d, _, C, P, x) => {
      if ((C && y(d, C), P)) for (let L = 0; L < P.length; L++) y(d, P[L])
      if (x) {
        let L = x.subTree
        if (_ === L) {
          const V = x.vnode
          A(d, V, V.scopeId, V.slotScopeIds, x.parent)
        }
      }
    },
    T = (d, _, C, P, x, L, V, I, H = 0) => {
      for (let $ = H; $ < d.length; $++) {
        const J = (d[$] = I ? $t(d[$]) : qe(d[$]))
        w(null, J, _, C, P, x, L, V, I)
      }
    },
    D = (d, _, C, P, x, L, V) => {
      const I = (_.el = d.el)
      let { patchFlag: H, dynamicChildren: $, dirs: J } = _
      H |= d.patchFlag & 16
      const W = d.props || pe,
        G = _.props || pe
      let ee
      C && qt(C, !1), (ee = G.onVnodeBeforeUpdate) && De(ee, C, _, d), J && ut(_, d, C, 'beforeUpdate'), C && qt(C, !0)
      const ie = x && _.type !== 'foreignObject'
      if (($ ? F(d.dynamicChildren, $, I, C, P, ie, L) : V || Y(d, _, I, null, C, P, ie, L, !1), H > 0)) {
        if (H & 16) B(I, _, W, G, C, P, x)
        else if ((H & 2 && W.class !== G.class && i(I, 'class', null, G.class, x), H & 4 && i(I, 'style', W.style, G.style, x), H & 8)) {
          const ge = _.dynamicProps
          for (let he = 0; he < ge.length; he++) {
            const Re = ge[he],
              Ze = W[Re],
              dn = G[Re]
            ;(dn !== Ze || Re === 'value') && i(I, Re, Ze, dn, x, d.children, C, P, K)
          }
        }
        H & 1 && d.children !== _.children && u(I, _.children)
      } else !V && $ == null && B(I, _, W, G, C, P, x)
      ;((ee = G.onVnodeUpdated) || J) &&
        Se(() => {
          ee && De(ee, C, _, d), J && ut(_, d, C, 'updated')
        }, P)
    },
    F = (d, _, C, P, x, L, V) => {
      for (let I = 0; I < _.length; I++) {
        const H = d[I],
          $ = _[I],
          J = H.el && (H.type === xe || !nt(H, $) || H.shapeFlag & 70) ? f(H.el) : C
        w(H, $, J, null, P, x, L, V, !0)
      }
    },
    B = (d, _, C, P, x, L, V) => {
      if (C !== P) {
        if (C !== pe) for (const I in C) !Yn(I) && !(I in P) && i(d, I, C[I], null, V, _.children, x, L, K)
        for (const I in P) {
          if (Yn(I)) continue
          const H = P[I],
            $ = C[I]
          H !== $ && I !== 'value' && i(d, I, $, H, V, _.children, x, L, K)
        }
        'value' in P && i(d, 'value', C.value, P.value)
      }
    },
    U = (d, _, C, P, x, L, V, I, H) => {
      const $ = (_.el = d ? d.el : a('')),
        J = (_.anchor = d ? d.anchor : a(''))
      let { patchFlag: W, dynamicChildren: G, slotScopeIds: ee } = _
      ee && (I = I ? I.concat(ee) : ee), d == null ? (r($, C, P), r(J, C, P), T(_.children, C, J, x, L, V, I, H)) : W > 0 && W & 64 && G && d.dynamicChildren ? (F(d.dynamicChildren, G, C, x, L, V, I), (_.key != null || (x && _ === x.subTree)) && ao(d, _, !0)) : Y(d, _, C, J, x, L, V, I, H)
    },
    X = (d, _, C, P, x, L, V, I, H) => {
      ;(_.slotScopeIds = I), d == null ? (_.shapeFlag & 512 ? x.ctx.activate(_, C, P, V, H) : g(_, C, P, x, L, V, H)) : S(d, _, H)
    },
    g = (d, _, C, P, x, L, V) => {
      const I = (d.component = rc(d, P, x))
      if ((br(d) && (I.ctx.renderer = le), ic(I), I.asyncDep)) {
        if ((x && x.registerDep(I, M), !d.el)) {
          const H = (I.subTree = ye(Le))
          v(null, H, _, C)
        }
        return
      }
      M(I, d, _, C, x, L, V)
    },
    S = (d, _, C) => {
      const P = (_.component = d.component)
      if (Af(d, _, C))
        if (P.asyncDep && !P.asyncResolved) {
          te(P, _, C)
          return
        } else (P.next = _), Tf(P.update), P.update()
      else (_.el = d.el), (P.vnode = _)
    },
    M = (d, _, C, P, x, L, V) => {
      const I = () => {
          if (d.isMounted) {
            let { next: J, bu: W, u: G, parent: ee, vnode: ie } = d,
              ge = J,
              he
            qt(d, !1), J ? ((J.el = ie.el), te(d, J, V)) : (J = ie), W && Tn(W), (he = J.props && J.props.onVnodeBeforeUpdate) && De(he, ee, J, ie), qt(d, !0)
            const Re = Vr(d),
              Ze = d.subTree
            ;(d.subTree = Re), w(Ze, Re, f(Ze.el), N(Ze), d, x, L), (J.el = Re.el), ge === null && Yi(d, Re.el), G && Se(G, x), (he = J.props && J.props.onVnodeUpdated) && Se(() => De(he, ee, J, ie), x)
          } else {
            let J
            const { el: W, props: G } = _,
              { bm: ee, m: ie, parent: ge } = d,
              he = on(_)
            if ((qt(d, !1), ee && Tn(ee), !he && (J = G && G.onVnodeBeforeMount) && De(J, ge, _), qt(d, !0), W && se)) {
              const Re = () => {
                ;(d.subTree = Vr(d)), se(W, d.subTree, d, x, null)
              }
              he ? _.type.__asyncLoader().then(() => !d.isUnmounted && Re()) : Re()
            } else {
              const Re = (d.subTree = Vr(d))
              w(null, Re, C, P, d, x, L), (_.el = Re.el)
            }
            if ((ie && Se(ie, x), !he && (J = G && G.onVnodeMounted))) {
              const Re = _
              Se(() => De(J, ge, Re), x)
            }
            ;(_.shapeFlag & 256 || (ge && on(ge.vnode) && ge.vnode.shapeFlag & 256)) && d.a && Se(d.a, x), (d.isMounted = !0), (_ = C = P = null)
          }
        },
        H = (d.effect = new fs(I, () => _s($), d.scope)),
        $ = (d.update = () => H.run())
      ;($.id = d.uid), qt(d, !0), $()
    },
    te = (d, _, C) => {
      _.component = d
      const P = d.vnode.props
      ;(d.vnode = _), (d.next = null), nh(d, _.props, P, C), ih(d, _.children, C), Un(), jo(), Mn()
    },
    Y = (d, _, C, P, x, L, V, I, H = !1) => {
      const $ = d && d.children,
        J = d ? d.shapeFlag : 0,
        W = _.children,
        { patchFlag: G, shapeFlag: ee } = _
      if (G > 0) {
        if (G & 128) {
          ze($, W, C, P, x, L, V, I, H)
          return
        } else if (G & 256) {
          re($, W, C, P, x, L, V, I, H)
          return
        }
      }
      ee & 8 ? (J & 16 && K($, x, L), W !== $ && u(C, W)) : J & 16 ? (ee & 16 ? ze($, W, C, P, x, L, V, I, H) : K($, x, L, !0)) : (J & 8 && u(C, ''), ee & 16 && T(W, C, P, x, L, V, I, H))
    },
    re = (d, _, C, P, x, L, V, I, H) => {
      ;(d = d || wn), (_ = _ || wn)
      const $ = d.length,
        J = _.length,
        W = Math.min($, J)
      let G
      for (G = 0; G < W; G++) {
        const ee = (_[G] = H ? $t(_[G]) : qe(_[G]))
        w(d[G], ee, C, null, x, L, V, I, H)
      }
      $ > J ? K(d, x, L, !0, !1, W) : T(_, C, P, x, L, V, I, H, W)
    },
    ze = (d, _, C, P, x, L, V, I, H) => {
      let $ = 0
      const J = _.length
      let W = d.length - 1,
        G = J - 1
      for (; $ <= W && $ <= G; ) {
        const ee = d[$],
          ie = (_[$] = H ? $t(_[$]) : qe(_[$]))
        if (nt(ee, ie)) w(ee, ie, C, null, x, L, V, I, H)
        else break
        $++
      }
      for (; $ <= W && $ <= G; ) {
        const ee = d[W],
          ie = (_[G] = H ? $t(_[G]) : qe(_[G]))
        if (nt(ee, ie)) w(ee, ie, C, null, x, L, V, I, H)
        else break
        W--, G--
      }
      if ($ > W) {
        if ($ <= G) {
          const ee = G + 1,
            ie = ee < J ? _[ee].el : P
          for (; $ <= G; ) w(null, (_[$] = H ? $t(_[$]) : qe(_[$])), C, ie, x, L, V, I, H), $++
        }
      } else if ($ > G) for (; $ <= W; ) Ce(d[$], x, L, !0), $++
      else {
        const ee = $,
          ie = $,
          ge = new Map()
        for ($ = ie; $ <= G; $++) {
          const Fe = (_[$] = H ? $t(_[$]) : qe(_[$]))
          Fe.key != null && ge.set(Fe.key, $)
        }
        let he,
          Re = 0
        const Ze = G - ie + 1
        let dn = !1,
          wo = 0
        const Vn = new Array(Ze)
        for ($ = 0; $ < Ze; $++) Vn[$] = 0
        for ($ = ee; $ <= W; $++) {
          const Fe = d[$]
          if (Re >= Ze) {
            Ce(Fe, x, L, !0)
            continue
          }
          let at
          if (Fe.key != null) at = ge.get(Fe.key)
          else
            for (he = ie; he <= G; he++)
              if (Vn[he - ie] === 0 && nt(Fe, _[he])) {
                at = he
                break
              }
          at === void 0 ? Ce(Fe, x, L, !0) : ((Vn[at - ie] = $ + 1), at >= wo ? (wo = at) : (dn = !0), w(Fe, _[at], C, null, x, L, V, I, H), Re++)
        }
        const Eo = dn ? fh(Vn) : wn
        for (he = Eo.length - 1, $ = Ze - 1; $ >= 0; $--) {
          const Fe = ie + $,
            at = _[Fe],
            To = Fe + 1 < J ? _[Fe + 1].el : P
          Vn[$] === 0 ? w(null, at, C, To, x, L, V, I, H) : dn && (he < 0 || $ !== Eo[he] ? Oe(at, C, To, 2) : he--)
        }
      }
    },
    Oe = (d, _, C, P, x = null) => {
      const { el: L, type: V, transition: I, children: H, shapeFlag: $ } = d
      if ($ & 6) {
        Oe(d.component.subTree, _, C, P)
        return
      }
      if ($ & 128) {
        d.suspense.move(_, C, P)
        return
      }
      if ($ & 64) {
        V.move(d, _, C, le)
        return
      }
      if (V === xe) {
        r(L, _, C)
        for (let W = 0; W < H.length; W++) Oe(H[W], _, C, P)
        r(d.anchor, _, C)
        return
      }
      if (V === On) {
        b(d, _, C)
        return
      }
      if (P !== 2 && $ & 1 && I)
        if (P === 0) I.beforeEnter(L), r(L, _, C), Se(() => I.enter(L), x)
        else {
          const { leave: W, delayLeave: G, afterLeave: ee } = I,
            ie = () => r(L, _, C),
            ge = () => {
              W(L, () => {
                ie(), ee && ee()
              })
            }
          G ? G(L, ie, ge) : ge()
        }
      else r(L, _, C)
    },
    Ce = (d, _, C, P = !1, x = !1) => {
      const { type: L, props: V, ref: I, children: H, dynamicChildren: $, shapeFlag: J, patchFlag: W, dirs: G } = d
      if ((I != null && Yr(I, null, C, d, !0), J & 256)) {
        _.ctx.deactivate(d)
        return
      }
      const ee = J & 1 && G,
        ie = !on(d)
      let ge
      if ((ie && (ge = V && V.onVnodeBeforeUnmount) && De(ge, _, d), J & 6)) k(d.component, C, P)
      else {
        if (J & 128) {
          d.suspense.unmount(C, P)
          return
        }
        ee && ut(d, null, _, 'beforeUnmount'), J & 64 ? d.type.remove(d, _, C, x, le, P) : $ && (L !== xe || (W > 0 && W & 64)) ? K($, _, C, !1, !0) : ((L === xe && W & 384) || (!x && J & 16)) && K(H, _, C), P && hn(d)
      }
      ;((ie && (ge = V && V.onVnodeUnmounted)) || ee) &&
        Se(() => {
          ge && De(ge, _, d), ee && ut(d, null, _, 'unmounted')
        }, C)
    },
    hn = (d) => {
      const { type: _, el: C, anchor: P, transition: x } = d
      if (_ === xe) {
        Cr(C, P)
        return
      }
      if (_ === On) {
        R(d)
        return
      }
      const L = () => {
        s(C), x && !x.persisted && x.afterLeave && x.afterLeave()
      }
      if (d.shapeFlag & 1 && x && !x.persisted) {
        const { leave: V, delayLeave: I } = x,
          H = () => V(C, L)
        I ? I(d.el, L, H) : H()
      } else L()
    },
    Cr = (d, _) => {
      let C
      for (; d !== _; ) (C = h(d)), s(d), (d = C)
      s(_)
    },
    k = (d, _, C) => {
      const { bum: P, scope: x, update: L, subTree: V, um: I } = d
      P && Tn(P),
        x.stop(),
        L && ((L.active = !1), Ce(V, d, _, C)),
        I && Se(I, _),
        Se(() => {
          d.isUnmounted = !0
        }, _),
        _ && _.pendingBranch && !_.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve())
    },
    K = (d, _, C, P = !1, x = !1, L = 0) => {
      for (let V = L; V < d.length; V++) Ce(d[V], _, C, P, x)
    },
    N = (d) => (d.shapeFlag & 6 ? N(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : h(d.anchor || d.el)),
    z = (d, _, C) => {
      d == null ? _._vnode && Ce(_._vnode, null, null, !0) : w(_._vnode || null, d, _, null, null, null, C), jo(), Qr(), (_._vnode = d)
    },
    le = { p: w, um: Ce, m: Oe, r: hn, mt: g, mc: T, pc: Y, pbc: F, n: N, o: e }
  let be, se
  return t && ([be, se] = t(le)), { render: z, hydrate: be, createApp: ah(z, be) }
}
function qt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function ao(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (q(r) && q(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i]
      let a = s[i]
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = s[i] = $t(s[i])), (a.el = o.el)), n || ao(o, a)), a.type === xn && (a.el = o.el)
    }
}
function fh(e) {
  const t = e.slice(),
    n = [0]
  let r, s, i, o, a
  const l = e.length
  for (r = 0; r < l; r++) {
    const c = e[r]
    if (c !== 0) {
      if (((s = n[n.length - 1]), e[s] < c)) {
        ;(t[r] = s), n.push(r)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; ) (a = (i + o) >> 1), e[n[a]] < c ? (i = a + 1) : (o = a)
      c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o])
  return n
}
const hh = (e) => e.__isTeleport,
  er = (e) => e && (e.disabled || e.disabled === ''),
  Ko = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
  pi = (e, t) => {
    const n = e && e.to
    return ve(n) ? (t ? t(n) : null) : n
  },
  dh = {
    __isTeleport: !0,
    process(e, t, n, r, s, i, o, a, l, c) {
      const {
          mc: u,
          pc: f,
          pbc: h,
          o: { insert: y, querySelector: m, createText: w, createComment: E }
        } = c,
        v = er(t.props)
      let { shapeFlag: p, children: b, dynamicChildren: R } = t
      if (e == null) {
        const O = (t.el = w('')),
          j = (t.anchor = w(''))
        y(O, n, r), y(j, n, r)
        const A = (t.target = pi(t.props, m)),
          T = (t.targetAnchor = w(''))
        A && (y(T, A), (o = o || Ko(A)))
        const D = (F, B) => {
          p & 16 && u(b, F, B, s, i, o, a, l)
        }
        v ? D(n, j) : A && D(A, T)
      } else {
        t.el = e.el
        const O = (t.anchor = e.anchor),
          j = (t.target = e.target),
          A = (t.targetAnchor = e.targetAnchor),
          T = er(e.props),
          D = T ? n : j,
          F = T ? O : A
        if (((o = o || Ko(j)), R ? (h(e.dynamicChildren, R, D, s, i, o, a), ao(e, t, !0)) : l || f(e, t, D, F, s, i, o, a, !1), v)) T || Lr(t, n, O, c, 1)
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const B = (t.target = pi(t.props, m))
          B && Lr(t, B, null, c, 0)
        } else T && Lr(t, j, A, c, 1)
      }
      Xl(t)
    },
    remove(e, t, n, r, { um: s, o: { remove: i } }, o) {
      const { shapeFlag: a, children: l, anchor: c, targetAnchor: u, target: f, props: h } = e
      if ((f && i(u), (o || !er(h)) && (i(c), a & 16)))
        for (let y = 0; y < l.length; y++) {
          const m = l[y]
          s(m, t, n, !0, !!m.dynamicChildren)
        }
    },
    move: Lr,
    hydrate: ph
  }
function Lr(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n)
  const { el: o, anchor: a, shapeFlag: l, children: c, props: u } = e,
    f = i === 2
  if ((f && r(o, t, n), (!f || er(u)) && l & 16)) for (let h = 0; h < c.length; h++) s(c[h], t, n, 2)
  f && r(a, t, n)
}
function ph(e, t, n, r, s, i, { o: { nextSibling: o, parentNode: a, querySelector: l } }, c) {
  const u = (t.target = pi(t.props, l))
  if (u) {
    const f = u._lpa || u.firstChild
    if (t.shapeFlag & 16)
      if (er(t.props)) (t.anchor = c(o(e), t, a(e), n, r, s, i)), (t.targetAnchor = f)
      else {
        t.anchor = o(e)
        let h = f
        for (; h; )
          if (((h = o(h)), h && h.nodeType === 8 && h.data === 'teleport anchor')) {
            ;(t.targetAnchor = h), (u._lpa = t.targetAnchor && o(t.targetAnchor))
            break
          }
        c(f, t, u, n, r, s, i)
      }
    Xl(t)
  }
  return t.anchor && o(t.anchor)
}
const Bv = dh
function Xl(e) {
  const t = e.ctx
  if (t && t.ut) {
    let n = e.children[0].el
    for (; n !== e.targetAnchor; ) n.nodeType === 1 && n.setAttribute('data-v-owner', t.uid), (n = n.nextSibling)
    t.ut()
  }
}
const xe = Symbol(void 0),
  xn = Symbol(void 0),
  Le = Symbol(void 0),
  On = Symbol(void 0),
  tr = []
let Ue = null
function It(e = !1) {
  tr.push((Ue = e ? null : []))
}
function Yl() {
  tr.pop(), (Ue = tr[tr.length - 1] || null)
}
let ln = 1
function qo(e) {
  ln += e
}
function Zl(e) {
  return (e.dynamicChildren = ln > 0 ? Ue || wn : null), Yl(), ln > 0 && Ue && Ue.push(e), e
}
function Vv(e, t, n, r, s, i) {
  return Zl(tc(e, t, n, r, s, i, !0))
}
function rn(e, t, n, r, s) {
  return Zl(ye(e, t, n, r, s, !0))
}
function cn(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function nt(e, t) {
  return e.type === t.type && e.key === t.key
}
function Kv(e) {}
const Rs = '__vInternal',
  ec = ({ key: e }) => e ?? null,
  Kr = ({ ref: e, ref_key: t, ref_for: n }) => (e != null ? (ve(e) || Ee(e) || Z(e) ? { i: Ae, r: e, k: t, f: !!n } : e) : null)
function tc(e, t = null, n = null, r = 0, s = null, i = e === xe ? 0 : 1, o = !1, a = !1) {
  const l = { __v_isVNode: !0, __v_skip: !0, type: e, props: t, key: t && ec(t), ref: t && Kr(t), scopeId: vs, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: i, patchFlag: r, dynamicProps: s, dynamicChildren: null, appContext: null, ctx: Ae }
  return a ? (lo(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= ve(n) ? 8 : 16), ln > 0 && !o && Ue && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && Ue.push(l), l
}
const ye = mh
function mh(e, t = null, n = null, r = 0, s = null, i = !1) {
  if (((!e || e === Fl) && (e = Le), cn(e))) {
    const a = wt(e, t, !0)
    return n && lo(a, n), ln > 0 && !i && Ue && (a.shapeFlag & 6 ? (Ue[Ue.indexOf(e)] = a) : Ue.push(a)), (a.patchFlag |= -2), a
  }
  if ((Eh(e) && (e = e.__vccOpts), t)) {
    t = gh(t)
    let { class: a, style: l } = t
    a && !ve(a) && (t.class = as(a)), me(l) && (wl(l) && !q(l) && (l = Te({}, l)), (t.style = os(l)))
  }
  const o = ve(e) ? 1 : Al(e) ? 128 : hh(e) ? 64 : me(e) ? 4 : Z(e) ? 2 : 0
  return tc(e, t, n, r, s, o, i, !0)
}
function gh(e) {
  return e ? (wl(e) || Rs in e ? Te({}, e) : e) : null
}
function wt(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: i, children: o } = e,
    a = t ? _h(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && ec(a),
    ref: t && t.ref ? (n && s ? (q(s) ? s.concat(Kr(t)) : [s, Kr(t)]) : Kr(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== xe ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && wt(e.ssContent),
    ssFallback: e.ssFallback && wt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}
function nc(e = ' ', t = 0) {
  return ye(xn, null, e, t)
}
function qv(e, t) {
  const n = ye(On, null, e)
  return (n.staticCount = t), n
}
function Wv(e = '', t = !1) {
  return t ? (It(), rn(Le, null, e)) : ye(Le, null, e)
}
function qe(e) {
  return e == null || typeof e == 'boolean' ? ye(Le) : q(e) ? ye(xe, null, e.slice()) : typeof e == 'object' ? $t(e) : ye(xn, null, String(e))
}
function $t(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : wt(e)
}
function lo(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (q(t)) n = 16
  else if (typeof t == 'object')
    if (r & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), lo(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !(Rs in t) ? (t._ctx = Ae) : s === 3 && Ae && (Ae.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else Z(t) ? ((t = { default: t, _ctx: Ae }), (n = 32)) : ((t = String(t)), r & 64 ? ((n = 16), (t = [nc(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function _h(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === 'class') t.class !== r.class && (t.class = as([t.class, r.class]))
      else if (s === 'style') t.style = os([t.style, r.style])
      else if (yr(s)) {
        const i = t[s],
          o = r[s]
        o && i !== o && !(q(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o)
      } else s !== '' && (t[s] = r[s])
  }
  return t
}
function De(e, t, n, r = null) {
  Xe(e, t, 7, [n, r])
}
const yh = Gl()
let vh = 0
function rc(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || yh,
    i = {
      uid: vh++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new sl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: ql(r, s),
      emitsOptions: kl(r, s),
      emit: null,
      emitted: null,
      propsDefaults: pe,
      inheritAttrs: r.inheritAttrs,
      ctx: pe,
      data: pe,
      props: pe,
      attrs: pe,
      slots: pe,
      refs: pe,
      setupState: pe,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (i.ctx = { _: i }), (i.root = t ? t.root : i), (i.emit = Pf.bind(null, i)), e.ce && e.ce(i), i
}
let we = null
const Ye = () => we || Ae,
  Bt = (e) => {
    ;(we = e), e.scope.on()
  },
  Mt = () => {
    we && we.scope.off(), (we = null)
  }
function sc(e) {
  return e.vnode.shapeFlag & 4
}
let $n = !1
function ic(e, t = !1) {
  $n = t
  const { props: n, children: r } = e.vnode,
    s = sc(e)
  th(e, n, s, t), sh(e, r)
  const i = s ? bh(e, t) : void 0
  return ($n = !1), i
}
function bh(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = kn(new Proxy(e.ctx, ui)))
  const { setup: r } = n
  if (r) {
    const s = (e.setupContext = r.length > 1 ? ac(e) : null)
    Bt(e), Un()
    const i = Ht(r, e, 0, [e.props, s])
    if ((Mn(), Mt(), Ki(i))) {
      if ((i.then(Mt, Mt), t))
        return i
          .then((o) => {
            mi(e, o, t)
          })
          .catch((o) => {
            Nn(o, e, 0)
          })
      e.asyncDep = i
    } else mi(e, i, t)
  } else oc(e, t)
}
function mi(e, t, n) {
  Z(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : me(t) && (e.setupState = Tl(t)), oc(e, n)
}
let Zr, gi
function zv(e) {
  ;(Zr = e),
    (gi = (t) => {
      t.render._rc && (t.withProxy = new Proxy(t.ctx, Gf))
    })
}
const Jv = () => !Zr
function oc(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Zr && !r.render) {
      const s = r.template || io(e).template
      if (s) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = r,
          c = Te(Te({ isCustomElement: i, delimiters: a }, o), l)
        r.render = Zr(s, c)
      }
    }
    ;(e.render = r.render || rt), gi && gi(e)
  }
  Bt(e), Un(), Qf(e), Mn(), Mt()
}
function wh(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Ne(e, 'get', '$attrs'), t[n]
    }
  })
}
function ac(e) {
  const t = (r) => {
    e.exposed = r || {}
  }
  let n
  return {
    get attrs() {
      return n || (n = wh(e))
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}
function Cs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Tl(kn(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Zn) return Zn[n](e)
        },
        has(t, n) {
          return n in t || n in Zn
        }
      }))
    )
}
function _i(e, t = !0) {
  return Z(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Eh(e) {
  return Z(e) && '__vccOpts' in e
}
const je = (e, t) => bf(e, t, $n)
function Gv() {
  return null
}
function Qv() {
  return null
}
function Xv(e) {}
function Yv(e, t) {
  return null
}
function Zv() {
  return lc().slots
}
function eb() {
  return lc().attrs
}
function lc() {
  const e = Ye()
  return e.setupContext || (e.setupContext = ac(e))
}
function tb(e, t) {
  const n = q(e) ? e.reduce((r, s) => ((r[s] = {}), r), {}) : e
  for (const r in t) {
    const s = n[r]
    s ? (q(s) || Z(s) ? (n[r] = { type: s, default: t[r] }) : (s.default = t[r])) : s === null && (n[r] = { default: t[r] })
  }
  return n
}
function nb(e, t) {
  const n = {}
  for (const r in e) t.includes(r) || Object.defineProperty(n, r, { enumerable: !0, get: () => e[r] })
  return n
}
function rb(e) {
  const t = Ye()
  let n = e()
  return (
    Mt(),
    Ki(n) &&
      (n = n.catch((r) => {
        throw (Bt(t), r)
      })),
    [n, () => Bt(t)]
  )
}
function st(e, t, n) {
  const r = arguments.length
  return r === 2 ? (me(t) && !q(t) ? (cn(t) ? ye(e, null, [t]) : ye(e, t)) : ye(e, null, t)) : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && cn(n) && (n = [n]), ye(e, t, n))
}
const Th = Symbol(''),
  Rh = () => Me(Th)
function sb() {}
function ib(e, t, n, r) {
  const s = n[r]
  if (s && Ch(s, e)) return s
  const i = t()
  return (i.memo = e.slice()), (n[r] = i)
}
function Ch(e, t) {
  const n = e.memo
  if (n.length != t.length) return !1
  for (let r = 0; r < n.length; r++) if (Sn(n[r], t[r])) return !1
  return ln > 0 && Ue && Ue.push(e), !0
}
const cc = '3.2.47',
  Ph = { createComponentInstance: rc, setupComponent: ic, renderComponentRoot: Vr, setCurrentRenderingInstance: dr, isVNode: cn, normalizeVNode: qe },
  ob = Ph,
  ab = null,
  lb = null,
  Oh = 'http://www.w3.org/2000/svg',
  Xt = typeof document < 'u' ? document : null,
  Wo = Xt && Xt.createElement('template'),
  Sh = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const s = t ? Xt.createElementNS(Oh, e) : Xt.createElement(e, n ? { is: n } : void 0)
      return e === 'select' && r && r.multiple != null && s.setAttribute('multiple', r.multiple), s
    },
    createText: (e) => Xt.createTextNode(e),
    createComment: (e) => Xt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Xt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, r, s, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (s && (s === i || s.nextSibling)) for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); );
      else {
        Wo.innerHTML = r ? `<svg>${e}</svg>` : e
        const a = Wo.content
        if (r) {
          const l = a.firstChild
          for (; l.firstChild; ) a.appendChild(l.firstChild)
          a.removeChild(l)
        }
        t.insertBefore(a, n)
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  }
function kh(e, t, n) {
  const r = e._vtc
  r && (t = (t ? [t, ...r] : [...r]).join(' ')), t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
function Ah(e, t, n) {
  const r = e.style,
    s = ve(n)
  if (n && !s) {
    if (t && !ve(t)) for (const i in t) n[i] == null && yi(r, i, '')
    for (const i in n) yi(r, i, n[i])
  } else {
    const i = r.display
    s ? t !== n && (r.cssText = n) : t && e.removeAttribute('style'), '_vod' in e && (r.display = i)
  }
}
const zo = /\s*!important$/
function yi(e, t, n) {
  if (q(n)) n.forEach((r) => yi(e, t, r))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const r = xh(e, t)
    zo.test(n) ? e.setProperty(Qe(r), n.replace(zo, ''), 'important') : (e[r] = n)
  }
}
const Jo = ['Webkit', 'Moz', 'ms'],
  Ms = {}
function xh(e, t) {
  const n = Ms[t]
  if (n) return n
  let r = We(t)
  if (r !== 'filter' && r in e) return (Ms[t] = r)
  r = us(r)
  for (let s = 0; s < Jo.length; s++) {
    const i = Jo[s] + r
    if (i in e) return (Ms[t] = i)
  }
  return t
}
const Go = 'http://www.w3.org/1999/xlink'
function $h(e, t, n, r, s) {
  if (r && t.startsWith('xlink:')) n == null ? e.removeAttributeNS(Go, t.slice(6, t.length)) : e.setAttributeNS(Go, t, n)
  else {
    const i = Ou(t)
    n == null || (i && !el(n)) ? e.removeAttribute(t) : e.setAttribute(t, i ? '' : n)
  }
}
function jh(e, t, n, r, s, i, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    r && o(r, s, i), (e[t] = n ?? '')
    return
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n
    const l = n ?? ''
    ;(e.value !== l || e.tagName === 'OPTION') && (e.value = l), n == null && e.removeAttribute(t)
    return
  }
  let a = !1
  if (n === '' || n == null) {
    const l = typeof e[t]
    l === 'boolean' ? (n = el(n)) : n == null && l === 'string' ? ((n = ''), (a = !0)) : l === 'number' && ((n = 0), (a = !0))
  }
  try {
    e[t] = n
  } catch {}
  a && e.removeAttribute(t)
}
function yt(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function Ih(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
function Lh(e, t, n, r, s = null) {
  const i = e._vei || (e._vei = {}),
    o = i[t]
  if (r && o) o.value = r
  else {
    const [a, l] = Dh(t)
    if (r) {
      const c = (i[t] = Mh(r, s))
      yt(e, a, c, l)
    } else o && (Ih(e, a, o, l), (i[t] = void 0))
  }
}
const Qo = /(?:Once|Passive|Capture)$/
function Dh(e) {
  let t
  if (Qo.test(e)) {
    t = {}
    let r
    for (; (r = e.match(Qo)); ) (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Qe(e.slice(2)), t]
}
let Ns = 0
const Hh = Promise.resolve(),
  Uh = () => Ns || (Hh.then(() => (Ns = 0)), (Ns = Date.now()))
function Mh(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    Xe(Nh(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = Uh()), n
}
function Nh(e, t) {
  if (q(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    )
  } else return t
}
const Xo = /^on[a-z]/,
  Fh = (e, t, n, r, s = !1, i, o, a, l) => {
    t === 'class' ? kh(e, r, s) : t === 'style' ? Ah(e, n, r) : yr(t) ? Bi(t) || Lh(e, t, n, r, o) : (t[0] === '.' ? ((t = t.slice(1)), !0) : t[0] === '^' ? ((t = t.slice(1)), !1) : Bh(e, t, r, s)) ? jh(e, t, r, i, o, a, l) : (t === 'true-value' ? (e._trueValue = r) : t === 'false-value' && (e._falseValue = r), $h(e, t, r, s))
  }
function Bh(e, t, n, r) {
  return r ? !!(t === 'innerHTML' || t === 'textContent' || (t in e && Xo.test(t) && Z(n))) : t === 'spellcheck' || t === 'draggable' || t === 'translate' || t === 'form' || (t === 'list' && e.tagName === 'INPUT') || (t === 'type' && e.tagName === 'TEXTAREA') || (Xo.test(t) && ve(n)) ? !1 : t in e
}
function Vh(e, t) {
  const n = Et(e)
  class r extends co {
    constructor(i) {
      super(n, i, t)
    }
  }
  return (r.def = n), r
}
const cb = (e) => Vh(e, ld),
  Kh = typeof HTMLElement < 'u' ? HTMLElement : class {}
class co extends Kh {
  constructor(t, n = {}, r) {
    super(), (this._def = t), (this._props = n), (this._instance = null), (this._connected = !1), (this._resolved = !1), (this._numberProps = null), this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: 'open' }), this._def.__asyncLoader || this._resolveProps(this._def))
  }
  connectedCallback() {
    ;(this._connected = !0), this._instance || (this._resolved ? this._update() : this._resolveDef())
  }
  disconnectedCallback() {
    ;(this._connected = !1),
      Kt(() => {
        this._connected || (aa(null, this.shadowRoot), (this._instance = null))
      })
  }
  _resolveDef() {
    this._resolved = !0
    for (let r = 0; r < this.attributes.length; r++) this._setAttr(this.attributes[r].name)
    new MutationObserver((r) => {
      for (const s of r) this._setAttr(s.attributeName)
    }).observe(this, { attributes: !0 })
    const t = (r, s = !1) => {
        const { props: i, styles: o } = r
        let a
        if (i && !q(i))
          for (const l in i) {
            const c = i[l]
            ;(c === Number || (c && c.type === Number)) && (l in this._props && (this._props[l] = zr(this._props[l])), ((a || (a = Object.create(null)))[We(l)] = !0))
          }
        ;(this._numberProps = a), s && this._resolveProps(r), this._applyStyles(o), this._update()
      },
      n = this._def.__asyncLoader
    n ? n().then((r) => t(r, !0)) : t(this._def)
  }
  _resolveProps(t) {
    const { props: n } = t,
      r = q(n) ? n : Object.keys(n || {})
    for (const s of Object.keys(this)) s[0] !== '_' && r.includes(s) && this._setProp(s, this[s], !0, !1)
    for (const s of r.map(We))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s)
        },
        set(i) {
          this._setProp(s, i)
        }
      })
  }
  _setAttr(t) {
    let n = this.getAttribute(t)
    const r = We(t)
    this._numberProps && this._numberProps[r] && (n = zr(n)), this._setProp(r, n, !1)
  }
  _getProp(t) {
    return this._props[t]
  }
  _setProp(t, n, r = !0, s = !0) {
    n !== this._props[t] && ((this._props[t] = n), s && this._instance && this._update(), r && (n === !0 ? this.setAttribute(Qe(t), '') : typeof n == 'string' || typeof n == 'number' ? this.setAttribute(Qe(t), n + '') : n || this.removeAttribute(Qe(t))))
  }
  _update() {
    aa(this._createVNode(), this.shadowRoot)
  }
  _createVNode() {
    const t = ye(this._def, Te({}, this._props))
    return (
      this._instance ||
        (t.ce = (n) => {
          ;(this._instance = n), (n.isCE = !0)
          const r = (i, o) => {
            this.dispatchEvent(new CustomEvent(i, { detail: o }))
          }
          n.emit = (i, ...o) => {
            r(i, o), Qe(i) !== i && r(Qe(i), o)
          }
          let s = this
          for (; (s = s && (s.parentNode || s.host)); )
            if (s instanceof co) {
              ;(n.parent = s._instance), (n.provides = s._instance.provides)
              break
            }
        }),
      t
    )
  }
  _applyStyles(t) {
    t &&
      t.forEach((n) => {
        const r = document.createElement('style')
        ;(r.textContent = n), this.shadowRoot.appendChild(r)
      })
  }
}
function ub(e = '$style') {
  {
    const t = Ye()
    if (!t) return pe
    const n = t.type.__cssModules
    if (!n) return pe
    const r = n[e]
    return r || pe
  }
}
function fb(e) {
  const t = Ye()
  if (!t) return
  const n = (t.ut = (s = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((i) => bi(i, s))
    }),
    r = () => {
      const s = e(t.proxy)
      vi(t.subTree, s), n(s)
    }
  Hf(r),
    Es(() => {
      const s = new MutationObserver(r)
      s.observe(t.subTree.el.parentNode, { childList: !0 }), no(() => s.disconnect())
    })
}
function vi(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense
    ;(e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          vi(n.activeBranch, t)
        })
  }
  for (; e.component; ) e = e.component.subTree
  if (e.shapeFlag & 1 && e.el) bi(e.el, t)
  else if (e.type === xe) e.children.forEach((n) => vi(n, t))
  else if (e.type === On) {
    let { el: n, anchor: r } = e
    for (; n && (bi(n, t), n !== r); ) n = n.nextSibling
  }
}
function bi(e, t) {
  if (e.nodeType === 1) {
    const n = e.style
    for (const r in t) n.setProperty(`--${r}`, t[r])
  }
}
const Ot = 'transition',
  qn = 'animation',
  Ps = (e, { slots: t }) => st(Ll, fc(e), t)
Ps.displayName = 'Transition'
const uc = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String },
  qh = (Ps.props = Te({}, Ll.props, uc)),
  Wt = (e, t = []) => {
    q(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  Yo = (e) => (e ? (q(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function fc(e) {
  const t = {}
  for (const U in e) U in uc || (t[U] = e[U])
  if (e.css === !1) return t
  const { name: n = 'v', type: r, duration: s, enterFromClass: i = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = i, appearActiveClass: c = o, appearToClass: u = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: y = `${n}-leave-to` } = e,
    m = Wh(s),
    w = m && m[0],
    E = m && m[1],
    { onBeforeEnter: v, onEnter: p, onEnterCancelled: b, onLeave: R, onLeaveCancelled: O, onBeforeAppear: j = v, onAppear: A = p, onAppearCancelled: T = b } = t,
    D = (U, X, g) => {
      At(U, X ? u : a), At(U, X ? c : o), g && g()
    },
    F = (U, X) => {
      ;(U._isLeaving = !1), At(U, f), At(U, y), At(U, h), X && X()
    },
    B = (U) => (X, g) => {
      const S = U ? A : p,
        M = () => D(X, U, g)
      Wt(S, [X, M]),
        Zo(() => {
          At(X, U ? l : i), mt(X, U ? u : a), Yo(S) || ea(X, r, w, M)
        })
    }
  return Te(t, {
    onBeforeEnter(U) {
      Wt(v, [U]), mt(U, i), mt(U, o)
    },
    onBeforeAppear(U) {
      Wt(j, [U]), mt(U, l), mt(U, c)
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(U, X) {
      U._isLeaving = !0
      const g = () => F(U, X)
      mt(U, f),
        dc(),
        mt(U, h),
        Zo(() => {
          U._isLeaving && (At(U, f), mt(U, y), Yo(R) || ea(U, r, E, g))
        }),
        Wt(R, [U, g])
    },
    onEnterCancelled(U) {
      D(U, !1), Wt(b, [U])
    },
    onAppearCancelled(U) {
      D(U, !0), Wt(T, [U])
    },
    onLeaveCancelled(U) {
      F(U), Wt(O, [U])
    }
  })
}
function Wh(e) {
  if (e == null) return null
  if (me(e)) return [Fs(e.enter), Fs(e.leave)]
  {
    const t = Fs(e)
    return [t, t]
  }
}
function Fs(e) {
  return zr(e)
}
function mt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set())).add(t)
}
function At(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r))
  const { _vtc: n } = e
  n && (n.delete(t), n.size || (e._vtc = void 0))
}
function Zo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let zh = 0
function ea(e, t, n, r) {
  const s = (e._endId = ++zh),
    i = () => {
      s === e._endId && r()
    }
  if (n) return setTimeout(i, n)
  const { type: o, timeout: a, propCount: l } = hc(e, t)
  if (!o) return r()
  const c = o + 'end'
  let u = 0
  const f = () => {
      e.removeEventListener(c, h), i()
    },
    h = (y) => {
      y.target === e && ++u >= l && f()
    }
  setTimeout(() => {
    u < l && f()
  }, a + 1),
    e.addEventListener(c, h)
}
function hc(e, t) {
  const n = window.getComputedStyle(e),
    r = (m) => (n[m] || '').split(', '),
    s = r(`${Ot}Delay`),
    i = r(`${Ot}Duration`),
    o = ta(s, i),
    a = r(`${qn}Delay`),
    l = r(`${qn}Duration`),
    c = ta(a, l)
  let u = null,
    f = 0,
    h = 0
  t === Ot ? o > 0 && ((u = Ot), (f = o), (h = i.length)) : t === qn ? c > 0 && ((u = qn), (f = c), (h = l.length)) : ((f = Math.max(o, c)), (u = f > 0 ? (o > c ? Ot : qn) : null), (h = u ? (u === Ot ? i.length : l.length) : 0))
  const y = u === Ot && /\b(transform|all)(,|$)/.test(r(`${Ot}Property`).toString())
  return { type: u, timeout: f, propCount: h, hasTransform: y }
}
function ta(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, r) => na(n) + na(e[r])))
}
function na(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function dc() {
  return document.body.offsetHeight
}
const pc = new WeakMap(),
  mc = new WeakMap(),
  gc = {
    name: 'TransitionGroup',
    props: Te({}, qh, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Ye(),
        r = Il()
      let s, i
      return (
        to(() => {
          if (!s.length) return
          const o = e.moveClass || `${e.name || 'v'}-move`
          if (!Yh(s[0].el, n.vnode.el, o)) return
          s.forEach(Gh), s.forEach(Qh)
          const a = s.filter(Xh)
          dc(),
            a.forEach((l) => {
              const c = l.el,
                u = c.style
              mt(c, o), (u.transform = u.webkitTransform = u.transitionDuration = '')
              const f = (c._moveCb = (h) => {
                ;(h && h.target !== c) || ((!h || /transform$/.test(h.propertyName)) && (c.removeEventListener('transitionend', f), (c._moveCb = null), At(c, o)))
              })
              c.addEventListener('transitionend', f)
            })
        }),
        () => {
          const o = ae(e),
            a = fc(o)
          let l = o.tag || xe
          ;(s = i), (i = t.default ? eo(t.default()) : [])
          for (let c = 0; c < i.length; c++) {
            const u = i[c]
            u.key != null && An(u, mr(u, a, r, n))
          }
          if (s)
            for (let c = 0; c < s.length; c++) {
              const u = s[c]
              An(u, mr(u, a, r, n)), pc.set(u, u.el.getBoundingClientRect())
            }
          return ye(l, null, i)
        }
      )
    }
  },
  Jh = (e) => delete e.mode
gc.props
const hb = gc
function Gh(e) {
  const t = e.el
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb()
}
function Qh(e) {
  mc.set(e, e.el.getBoundingClientRect())
}
function Xh(e) {
  const t = pc.get(e),
    n = mc.get(e),
    r = t.left - n.left,
    s = t.top - n.top
  if (r || s) {
    const i = e.el.style
    return (i.transform = i.webkitTransform = `translate(${r}px,${s}px)`), (i.transitionDuration = '0s'), e
  }
}
function Yh(e, t, n) {
  const r = e.cloneNode()
  e._vtc &&
    e._vtc.forEach((o) => {
      o.split(/\s+/).forEach((a) => a && r.classList.remove(a))
    }),
    n.split(/\s+/).forEach((o) => o && r.classList.add(o)),
    (r.style.display = 'none')
  const s = t.nodeType === 1 ? t : t.parentNode
  s.appendChild(r)
  const { hasTransform: i } = hc(r)
  return s.removeChild(r), i
}
const Vt = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1
  return q(t) ? (n) => Tn(t, n) : t
}
function Zh(e) {
  e.target.composing = !0
}
function ra(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const wi = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e._assign = Vt(s)
      const i = r || (s.props && s.props.type === 'number')
      yt(e, t ? 'change' : 'input', (o) => {
        if (o.target.composing) return
        let a = e.value
        n && (a = a.trim()), i && (a = Wr(a)), e._assign(a)
      }),
        n &&
          yt(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t || (yt(e, 'compositionstart', Zh), yt(e, 'compositionend', ra), yt(e, 'change', ra))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: s } }, i) {
      if (((e._assign = Vt(i)), e.composing || (document.activeElement === e && e.type !== 'range' && (n || (r && e.value.trim() === t) || ((s || e.type === 'number') && Wr(e.value) === t))))) return
      const o = t ?? ''
      e.value !== o && (e.value = o)
    }
  },
  _c = {
    deep: !0,
    created(e, t, n) {
      ;(e._assign = Vt(n)),
        yt(e, 'change', () => {
          const r = e._modelValue,
            s = jn(e),
            i = e.checked,
            o = e._assign
          if (q(r)) {
            const a = ls(r, s),
              l = a !== -1
            if (i && !l) o(r.concat(s))
            else if (!i && l) {
              const c = [...r]
              c.splice(a, 1), o(c)
            }
          } else if (un(r)) {
            const a = new Set(r)
            i ? a.add(s) : a.delete(s), o(a)
          } else o(vc(e, i))
        })
    },
    mounted: sa,
    beforeUpdate(e, t, n) {
      ;(e._assign = Vt(n)), sa(e, t, n)
    }
  }
function sa(e, { value: t, oldValue: n }, r) {
  ;(e._modelValue = t), q(t) ? (e.checked = ls(t, r.props.value) > -1) : un(t) ? (e.checked = t.has(r.props.value)) : t !== n && (e.checked = Nt(t, vc(e, !0)))
}
const yc = {
    created(e, { value: t }, n) {
      ;(e.checked = Nt(t, n.props.value)),
        (e._assign = Vt(n)),
        yt(e, 'change', () => {
          e._assign(jn(e))
        })
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      ;(e._assign = Vt(r)), t !== n && (e.checked = Nt(t, r.props.value))
    }
  },
  ed = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const s = un(t)
      yt(e, 'change', () => {
        const i = Array.prototype.filter.call(e.options, (o) => o.selected).map((o) => (n ? Wr(jn(o)) : jn(o)))
        e._assign(e.multiple ? (s ? new Set(i) : i) : i[0])
      }),
        (e._assign = Vt(r))
    },
    mounted(e, { value: t }) {
      ia(e, t)
    },
    beforeUpdate(e, t, n) {
      e._assign = Vt(n)
    },
    updated(e, { value: t }) {
      ia(e, t)
    }
  }
function ia(e, t) {
  const n = e.multiple
  if (!(n && !q(t) && !un(t))) {
    for (let r = 0, s = e.options.length; r < s; r++) {
      const i = e.options[r],
        o = jn(i)
      if (n) q(t) ? (i.selected = ls(t, o) > -1) : (i.selected = t.has(o))
      else if (Nt(jn(i), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r)
        return
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
  }
}
function jn(e) {
  return '_value' in e ? e._value : e.value
}
function vc(e, t) {
  const n = t ? '_trueValue' : '_falseValue'
  return n in e ? e[n] : t
}
const td = {
  created(e, t, n) {
    Dr(e, t, n, null, 'created')
  },
  mounted(e, t, n) {
    Dr(e, t, n, null, 'mounted')
  },
  beforeUpdate(e, t, n, r) {
    Dr(e, t, n, r, 'beforeUpdate')
  },
  updated(e, t, n, r) {
    Dr(e, t, n, r, 'updated')
  }
}
function bc(e, t) {
  switch (e) {
    case 'SELECT':
      return ed
    case 'TEXTAREA':
      return wi
    default:
      switch (t) {
        case 'checkbox':
          return _c
        case 'radio':
          return yc
        default:
          return wi
      }
  }
}
function Dr(e, t, n, r, s) {
  const o = bc(e.tagName, n.props && n.props.type)[s]
  o && o(e, t, n, r)
}
function nd() {
  ;(wi.getSSRProps = ({ value: e }) => ({ value: e })),
    (yc.getSSRProps = ({ value: e }, t) => {
      if (t.props && Nt(t.props.value, e)) return { checked: !0 }
    }),
    (_c.getSSRProps = ({ value: e }, t) => {
      if (q(e)) {
        if (t.props && ls(e, t.props.value) > -1) return { checked: !0 }
      } else if (un(e)) {
        if (t.props && e.has(t.props.value)) return { checked: !0 }
      } else if (e) return { checked: !0 }
    }),
    (td.getSSRProps = (e, t) => {
      if (typeof t.type != 'string') return
      const n = bc(t.type.toUpperCase(), t.props && t.props.type)
      if (n.getSSRProps) return n.getSSRProps(e, t)
    })
}
const rd = ['ctrl', 'shift', 'alt', 'meta'],
  sd = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => 'button' in e && e.button !== 0, middle: (e) => 'button' in e && e.button !== 1, right: (e) => 'button' in e && e.button !== 2, exact: (e, t) => rd.some((n) => e[`${n}Key`] && !t.includes(n)) },
  db =
    (e, t) =>
    (n, ...r) => {
      for (let s = 0; s < t.length; s++) {
        const i = sd[t[s]]
        if (i && i(n, t)) return
      }
      return e(n, ...r)
    },
  id = { esc: 'escape', space: ' ', up: 'arrow-up', left: 'arrow-left', right: 'arrow-right', down: 'arrow-down', delete: 'backspace' },
  pb = (e, t) => (n) => {
    if (!('key' in n)) return
    const r = Qe(n.key)
    if (t.some((s) => s === r || id[s] === r)) return e(n)
  },
  od = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e._vod = e.style.display === 'none' ? '' : e.style.display), n && t ? n.beforeEnter(e) : Wn(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), Wn(e, !0), r.enter(e))
            : r.leave(e, () => {
                Wn(e, !1)
              })
          : Wn(e, t))
    },
    beforeUnmount(e, { value: t }) {
      Wn(e, t)
    }
  }
function Wn(e, t) {
  e.style.display = t ? e._vod : 'none'
}
function ad() {
  od.getSSRProps = ({ value: e }) => {
    if (!e) return { style: { display: 'none' } }
  }
}
const wc = Te({ patchProp: Fh }, Sh)
let nr,
  oa = !1
function Ec() {
  return nr || (nr = ch(wc))
}
function Tc() {
  return (nr = oa ? nr : uh(wc)), (oa = !0), nr
}
const aa = (...e) => {
    Ec().render(...e)
  },
  ld = (...e) => {
    Tc().hydrate(...e)
  },
  cd = (...e) => {
    const t = Ec().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (r) => {
        const s = Rc(r)
        if (!s) return
        const i = t._component
        !Z(i) && !i.render && !i.template && (i.template = s.innerHTML), (s.innerHTML = '')
        const o = n(s, !1, s instanceof SVGElement)
        return s instanceof Element && (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')), o
      }),
      t
    )
  },
  ud = (...e) => {
    const t = Tc().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (r) => {
        const s = Rc(r)
        if (s) return n(s, !0, s instanceof SVGElement)
      }),
      t
    )
  }
function Rc(e) {
  return ve(e) ? document.querySelector(e) : e
}
let la = !1
const mb = () => {
    la || ((la = !0), nd(), ad())
  },
  fd = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  hd = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  dd = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/
function pd(e, t) {
  if (e !== '__proto__' && !(e === 'constructor' && t && typeof t == 'object' && 'prototype' in t)) return t
}
function Cc(e, t = {}) {
  if (typeof e != 'string') return e
  const n = e.toLowerCase().trim()
  if (n === 'true') return !0
  if (n === 'false') return !1
  if (n === 'null') return null
  if (n === 'nan') return Number.NaN
  if (n === 'infinity') return Number.POSITIVE_INFINITY
  if (n !== 'undefined') {
    if (!dd.test(e)) {
      if (t.strict) throw new SyntaxError('Invalid JSON')
      return e
    }
    try {
      return fd.test(e) || hd.test(e) ? JSON.parse(e, pd) : JSON.parse(e)
    } catch (r) {
      if (t.strict) throw r
      return e
    }
  }
}
const md = /#/g,
  gd = /&/g,
  _d = /=/g,
  Pc = /\+/g,
  yd = /%5e/gi,
  vd = /%60/gi,
  bd = /%7c/gi,
  wd = /%20/gi
function Ed(e) {
  return encodeURI('' + e).replace(bd, '|')
}
function Ei(e) {
  return Ed(typeof e == 'string' ? e : JSON.stringify(e))
    .replace(Pc, '%2B')
    .replace(wd, '+')
    .replace(md, '%23')
    .replace(gd, '%26')
    .replace(vd, '`')
    .replace(yd, '^')
}
function Bs(e) {
  return Ei(e).replace(_d, '%3D')
}
function Oc(e = '') {
  try {
    return decodeURIComponent('' + e)
  } catch {
    return '' + e
  }
}
function Td(e) {
  return Oc(e.replace(Pc, ' '))
}
function Rd(e = '') {
  const t = {}
  e[0] === '?' && (e = e.slice(1))
  for (const n of e.split('&')) {
    const r = n.match(/([^=]+)=?(.*)/) || []
    if (r.length < 2) continue
    const s = Oc(r[1])
    if (s === '__proto__' || s === 'constructor') continue
    const i = Td(r[2] || '')
    typeof t[s] < 'u' ? (Array.isArray(t[s]) ? t[s].push(i) : (t[s] = [t[s], i])) : (t[s] = i)
  }
  return t
}
function Cd(e, t) {
  return (typeof t == 'number' || typeof t == 'boolean') && (t = String(t)), t ? (Array.isArray(t) ? t.map((n) => `${Bs(e)}=${Ei(n)}`).join('&') : `${Bs(e)}=${Ei(t)}`) : Bs(e)
}
function Pd(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => Cd(t, e[t]))
    .join('&')
}
const Od = /^\w{2,}:([/\\]{1,2})/,
  Sd = /^\w{2,}:([/\\]{2})?/,
  kd = /^([/\\]\s*){2,}[^/\\]/
function wr(e, t = {}) {
  return typeof t == 'boolean' && (t = { acceptRelative: t }), t.strict ? Od.test(e) : Sd.test(e) || (t.acceptRelative ? kd.test(e) : !1)
}
const Ad = /\/$|\/\?/
function Ti(e = '', t = !1) {
  return t ? Ad.test(e) : e.endsWith('/')
}
function Sc(e = '', t = !1) {
  if (!t) return (Ti(e) ? e.slice(0, -1) : e) || '/'
  if (!Ti(e, !0)) return e || '/'
  const [n, ...r] = e.split('?')
  return (n.slice(0, -1) || '/') + (r.length > 0 ? `?${r.join('?')}` : '')
}
function xd(e = '', t = !1) {
  if (!t) return e.endsWith('/') ? e : e + '/'
  if (Ti(e, !0)) return e || '/'
  const [n, ...r] = e.split('?')
  return n + '/' + (r.length > 0 ? `?${r.join('?')}` : '')
}
function kc(e = '') {
  return e.startsWith('/')
}
function $d(e = '') {
  return (kc(e) ? e.slice(1) : e) || '/'
}
function gb(e = '') {
  return kc(e) ? e : '/' + e
}
function jd(e, t) {
  if (Ac(t) || wr(e)) return e
  const n = Sc(t)
  return e.startsWith(n) ? e : Er(n, e)
}
function ca(e, t) {
  if (Ac(t)) return e
  const n = Sc(t)
  if (!e.startsWith(n)) return e
  const r = e.slice(n.length)
  return r[0] === '/' ? r : '/' + r
}
function Id(e, t) {
  const n = Os(e),
    r = { ...Rd(n.search), ...t }
  return (n.search = Pd(r)), Dd(n)
}
function Ac(e) {
  return !e || e === '/'
}
function Ld(e) {
  return e && e !== '/'
}
function Er(e, ...t) {
  let n = e || ''
  for (const r of t.filter((s) => Ld(s))) n = n ? xd(n) + $d(r) : r
  return n
}
function Os(e = '', t) {
  if (!wr(e, { acceptRelative: !0 })) return t ? Os(t + e) : ua(e)
  const [n = '', r, s = ''] = (e.replace(/\\/g, '/').match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1),
    [i = '', o = ''] = (s.match(/([^#/?]*)(.*)?/) || []).splice(1),
    { pathname: a, search: l, hash: c } = ua(o.replace(/\/(?=[A-Za-z]:)/, ''))
  return { protocol: n, auth: r ? r.slice(0, Math.max(0, r.length - 1)) : '', host: i, pathname: a, search: l, hash: c }
}
function ua(e = '') {
  const [t = '', n = '', r = ''] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1)
  return { pathname: t, search: n, hash: r }
}
function Dd(e) {
  const t = e.pathname + (e.search ? (e.search.startsWith('?') ? '' : '?') + e.search : '') + e.hash
  return e.protocol ? e.protocol + '//' + (e.auth ? e.auth + '@' : '') + e.host + t : t
}
class Hd extends Error {
  constructor() {
    super(...arguments), (this.name = 'FetchError')
  }
}
function Ud(e, t, n) {
  let r = ''
  t && (r = t.message), e && n ? (r = `${r} (${n.status} ${n.statusText} (${e.toString()}))`) : e && (r = `${r} (${e.toString()})`)
  const s = new Hd(r)
  return (
    Object.defineProperty(s, 'request', {
      get() {
        return e
      }
    }),
    Object.defineProperty(s, 'response', {
      get() {
        return n
      }
    }),
    Object.defineProperty(s, 'data', {
      get() {
        return n && n._data
      }
    }),
    Object.defineProperty(s, 'status', {
      get() {
        return n && n.status
      }
    }),
    Object.defineProperty(s, 'statusText', {
      get() {
        return n && n.statusText
      }
    }),
    Object.defineProperty(s, 'statusCode', {
      get() {
        return n && n.status
      }
    }),
    Object.defineProperty(s, 'statusMessage', {
      get() {
        return n && n.statusText
      }
    }),
    s
  )
}
const Md = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']))
function fa(e = 'GET') {
  return Md.has(e.toUpperCase())
}
function Nd(e) {
  if (e === void 0) return !1
  const t = typeof e
  return t === 'string' || t === 'number' || t === 'boolean' || t === null ? !0 : t !== 'object' ? !1 : Array.isArray(e) ? !0 : (e.constructor && e.constructor.name === 'Object') || typeof e.toJSON == 'function'
}
const Fd = new Set(['image/svg', 'application/xml', 'application/xhtml', 'application/html']),
  Bd = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i
function Vd(e = '') {
  if (!e) return 'json'
  const t = e.split(';').shift() || ''
  return Bd.test(t) ? 'json' : Fd.has(t) || t.startsWith('text/') ? 'text' : 'blob'
}
const Kd = new Set([408, 409, 425, 429, 500, 502, 503, 504])
function xc(e) {
  const { fetch: t, Headers: n } = e
  function r(o) {
    const a = (o.error && o.error.name === 'AbortError') || !1
    if (o.options.retry !== !1 && !a) {
      let c
      typeof o.options.retry == 'number' ? (c = o.options.retry) : (c = fa(o.options.method) ? 0 : 1)
      const u = (o.response && o.response.status) || 500
      if (c > 0 && Kd.has(u)) return s(o.request, { ...o.options, retry: c - 1 })
    }
    const l = Ud(o.request, o.error, o.response)
    throw (Error.captureStackTrace && Error.captureStackTrace(l, s), l)
  }
  const s = async function (a, l = {}) {
      const c = { request: a, options: { ...e.defaults, ...l }, response: void 0, error: void 0 }
      c.options.onRequest && (await c.options.onRequest(c)),
        typeof c.request == 'string' &&
          (c.options.baseURL && (c.request = jd(c.request, c.options.baseURL)),
          (c.options.query || c.options.params) && (c.request = Id(c.request, { ...c.options.params, ...c.options.query })),
          c.options.body && fa(c.options.method) && Nd(c.options.body) && ((c.options.body = typeof c.options.body == 'string' ? c.options.body : JSON.stringify(c.options.body)), (c.options.headers = new n(c.options.headers)), c.options.headers.has('content-type') || c.options.headers.set('content-type', 'application/json'), c.options.headers.has('accept') || c.options.headers.set('accept', 'application/json'))),
        (c.response = await t(c.request, c.options).catch(async (f) => ((c.error = f), c.options.onRequestError && (await c.options.onRequestError(c)), r(c))))
      const u = (c.options.parseResponse ? 'json' : c.options.responseType) || Vd(c.response.headers.get('content-type') || '')
      if (u === 'json') {
        const f = await c.response.text(),
          h = c.options.parseResponse || Cc
        c.response._data = h(f)
      } else u === 'stream' ? (c.response._data = c.response.body) : (c.response._data = await c.response[u]())
      return c.options.onResponse && (await c.options.onResponse(c)), c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && (await c.options.onResponseError(c)), r(c)) : c.response
    },
    i = function (a, l) {
      return s(a, l).then((c) => c._data)
    }
  return (i.raw = s), (i.native = t), (i.create = (o = {}) => xc({ ...e, defaults: { ...e.defaults, ...o } })), i
}
const $c = (function () {
    if (typeof globalThis < 'u') return globalThis
    if (typeof self < 'u') return self
    if (typeof window < 'u') return window
    if (typeof global < 'u') return global
    throw new Error('unable to locate global object')
  })(),
  qd = $c.fetch || (() => Promise.reject(new Error('[ofetch] global.fetch is not supported!'))),
  Wd = $c.Headers,
  zd = xc({ fetch: qd, Headers: Wd }),
  Jd = zd,
  Gd = () => {
    var e
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
  },
  es = Gd().app,
  Qd = () => es.baseURL,
  Xd = () => es.buildAssetsDir,
  Yd = (...e) => Er(jc(), Xd(), ...e),
  jc = (...e) => {
    const t = es.cdnURL || es.baseURL
    return e.length ? Er(t, ...e) : t
  }
;(globalThis.__buildAssetsURL = Yd), (globalThis.__publicAssetsURL = jc)
function Ri(e, t = {}, n) {
  for (const r in e) {
    const s = e[r],
      i = n ? `${n}:${r}` : r
    typeof s == 'object' && s !== null ? Ri(s, t, i) : typeof s == 'function' && (t[i] = s)
  }
  return t
}
const Zd = { run: (e) => e() },
  ep = () => Zd,
  Ic = typeof console.createTask < 'u' ? console.createTask : ep
function tp(e, t) {
  const n = t.shift(),
    r = Ic(n)
  return e.reduce((s, i) => s.then(() => r.run(() => i(...t))), Promise.resolve())
}
function np(e, t) {
  const n = t.shift(),
    r = Ic(n)
  return Promise.all(e.map((s) => r.run(() => s(...t))))
}
function Vs(e, t) {
  for (const n of [...e]) n(t)
}
class rp {
  constructor() {
    ;(this._hooks = {}), (this._before = void 0), (this._after = void 0), (this._deprecatedMessages = void 0), (this._deprecatedHooks = {}), (this.hook = this.hook.bind(this)), (this.callHook = this.callHook.bind(this)), (this.callHookWith = this.callHookWith.bind(this))
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != 'function') return () => {}
    const s = t
    let i
    for (; this._deprecatedHooks[t]; ) (i = this._deprecatedHooks[t]), (t = i.to)
    if (i && !r.allowDeprecated) {
      let o = i.message
      o || (o = `${s} hook has been deprecated` + (i.to ? `, please use ${i.to}` : '')), this._deprecatedMessages || (this._deprecatedMessages = new Set()), this._deprecatedMessages.has(o) || (console.warn(o), this._deprecatedMessages.add(o))
    }
    if (!n.name)
      try {
        Object.defineProperty(n, 'name', { get: () => '_' + t.replace(/\W+/g, '_') + '_hook_cb', configurable: !0 })
      } catch {}
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0))
      }
    )
  }
  hookOnce(t, n) {
    let r,
      s = (...i) => (typeof r == 'function' && r(), (r = void 0), (s = void 0), n(...i))
    return (r = this.hook(t, s)), r
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n)
      r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t]
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == 'string' ? { to: n } : n
    const r = this._hooks[t] || []
    delete this._hooks[t]
    for (const s of r) this.hook(t, s)
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t)
    for (const n in t) this.deprecateHook(n, t[n])
  }
  addHooks(t) {
    const n = Ri(t),
      r = Object.keys(n).map((s) => this.hook(s, n[s]))
    return () => {
      for (const s of r.splice(0, r.length)) s()
    }
  }
  removeHooks(t) {
    const n = Ri(t)
    for (const r in n) this.removeHook(r, n[r])
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t]
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(tp, t, ...n)
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(np, t, ...n)
  }
  callHookWith(t, n, ...r) {
    const s = this._before || this._after ? { name: n, args: r, context: {} } : void 0
    this._before && Vs(this._before, s)
    const i = t(n in this._hooks ? [...this._hooks[n]] : [], r)
    return i instanceof Promise
      ? i.finally(() => {
          this._after && s && Vs(this._after, s)
        })
      : (this._after && s && Vs(this._after, s), i)
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(t)
          n !== -1 && this._before.splice(n, 1)
        }
      }
    )
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(t)
          n !== -1 && this._after.splice(n, 1)
        }
      }
    )
  }
}
function Lc() {
  return new rp()
}
function sp() {
  let e,
    t = !1
  const n = (r) => {
    if (e && e !== r) throw new Error('Context conflict')
  }
  return {
    use: () => {
      if (e === void 0) throw new Error('Context is not available')
      return e
    },
    tryUse: () => e,
    set: (r, s) => {
      s || n(r), (e = r), (t = !0)
    },
    unset: () => {
      ;(e = void 0), (t = !1)
    },
    call: (r, s) => {
      n(r), (e = r)
      try {
        return s()
      } finally {
        t || (e = void 0)
      }
    },
    async callAsync(r, s) {
      e = r
      const i = () => {
          e = r
        },
        o = () => (e === r ? i : void 0)
      Ci.add(o)
      try {
        const a = s()
        return t || (e = void 0), await a
      } finally {
        Ci.delete(o)
      }
    }
  }
}
function ip() {
  const e = {}
  return {
    get(t) {
      return e[t] || (e[t] = sp()), e[t], e[t]
    }
  }
}
const ts = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof global < 'u' ? global : typeof window < 'u' ? window : {},
  ha = '__unctx__',
  op = ts[ha] || (ts[ha] = ip()),
  ap = (e) => op.get(e),
  da = '__unctx_async_handlers__',
  Ci = ts[da] || (ts[da] = new Set())
function ns(e) {
  const t = []
  for (const s of Ci) {
    const i = s()
    i && t.push(i)
  }
  const n = () => {
    for (const s of t) s()
  }
  let r = e()
  return (
    r &&
      typeof r == 'object' &&
      'catch' in r &&
      (r = r.catch((s) => {
        throw (n(), s)
      })),
    [r, n]
  )
}
const Dc = ap('nuxt-app'),
  lp = '__nuxt_plugin'
function cp(e) {
  let t = 0
  const n = {
    provide: void 0,
    globalName: 'nuxt',
    versions: {
      get nuxt() {
        return '3.3.3'
      },
      get vue() {
        return n.vueApp.version
      }
    },
    payload: it({ data: {}, state: {}, _errors: {}, ...window.__NUXT__ }),
    static: { data: {} },
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {}
      t++
      let i = !1
      return () => {
        if (!i && ((i = !0), t--, t === 0)) return (n.isHydrating = !1), n.callHook('app:suspense:resolve')
      }
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...e
  }
  ;(n.hooks = Lc()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (i, o) => {
      const a = '$' + i
      Hr(n, a, o), Hr(n.vueApp.config.globalProperties, a, o)
    }),
    Hr(n.vueApp, '$nuxt', n),
    Hr(n.vueApp.config.globalProperties, '$nuxt', n)
  {
    window.addEventListener('nuxt.preloadError', (o) => {
      n.callHook('app:chunkError', { error: o.payload })
    })
    const i = n.hook('app:error', (...o) => {
      console.error('[nuxt] error caught during app initialization', ...o)
    })
    n.hook('app:mounted', i)
  }
  const r = it(n.payload.config),
    s = new Proxy(r, {
      get(i, o) {
        return o === 'public' ? i.public : i[o] ?? i.public[o]
      },
      set(i, o, a) {
        return o === 'public' || o === 'app' ? !1 : ((i[o] = a), (i.public[o] = a), !0)
      }
    })
  return n.provide('config', s), n
}
async function up(e, t) {
  if (typeof t != 'function') return
  const { provide: n } = (await _t(e, t, [e])) || {}
  if (n && typeof n == 'object') for (const r in n) e.provide(r, n[r])
}
async function fp(e, t) {
  for (const n of t) await up(e, n)
}
function hp(e) {
  return e.map((n) => (typeof n != 'function' ? null : n.length > 1 ? (r) => n(r, r.provide) : n)).filter(Boolean)
}
function Rt(e) {
  return (e[lp] = !0), e
}
function _t(e, t, n) {
  const r = () => (n ? t(...n) : t())
  return Dc.set(e), r()
}
function Pe() {
  const e = Dc.tryUse()
  if (!e) {
    const t = Ye()
    if (!t) throw new Error('nuxt instance unavailable')
    return t.appContext.app.$nuxt
  }
  return e
}
function Tr() {
  return Pe().$config
}
function Hr(e, t, n) {
  Object.defineProperty(e, t, { get: () => n })
}
const dp = !1
/*!
 * pinia v2.0.33
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let Hc
const Rr = (e) => (Hc = e),
  Uc = Symbol()
function Pi(e) {
  return e && typeof e == 'object' && Object.prototype.toString.call(e) === '[object Object]' && typeof e.toJSON != 'function'
}
var rr
;(function (e) {
  ;(e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function')
})(rr || (rr = {}))
function pp() {
  const e = il(!0),
    t = e.run(() => vt({}))
  let n = [],
    r = []
  const s = kn({
    install(i) {
      Rr(s), (s._a = i), i.provide(Uc, s), (i.config.globalProperties.$pinia = s), r.forEach((o) => n.push(o)), (r = [])
    },
    use(i) {
      return !this._a && !dp ? r.push(i) : n.push(i), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t
  })
  return s
}
const Mc = () => {}
function pa(e, t, n, r = Mc) {
  e.push(t)
  const s = () => {
    const i = e.indexOf(t)
    i > -1 && (e.splice(i, 1), r())
  }
  return !n && al() && Hu(s), s
}
function pn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t)
  })
}
function Oi(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e)
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue
    const r = t[n],
      s = e[n]
    Pi(s) && Pi(r) && e.hasOwnProperty(n) && !Ee(r) && !Dt(r) ? (e[n] = Oi(s, r)) : (e[n] = r)
  }
  return e
}
const mp = Symbol()
function gp(e) {
  return !Pi(e) || !e.hasOwnProperty(mp)
}
const { assign: xt } = Object
function _p(e) {
  return !!(Ee(e) && e.effect)
}
function yp(e, t, n, r) {
  const { state: s, actions: i, getters: o } = t,
    a = n.state.value[e]
  let l
  function c() {
    a || (n.state.value[e] = s ? s() : {})
    const u = _f(n.state.value[e])
    return xt(
      u,
      i,
      Object.keys(o || {}).reduce(
        (f, h) => (
          (f[h] = kn(
            je(() => {
              Rr(n)
              const y = n._s.get(e)
              return o[h].call(y, y)
            })
          )),
          f
        ),
        {}
      )
    )
  }
  return (l = Nc(e, c, t, n, r, !0)), l
}
function Nc(e, t, n = {}, r, s, i) {
  let o
  const a = xt({ actions: {} }, n),
    l = { deep: !0 }
  let c,
    u,
    f = kn([]),
    h = kn([]),
    y
  const m = r.state.value[e]
  !i && !m && (r.state.value[e] = {}), vt({})
  let w
  function E(A) {
    let T
    ;(c = u = !1), typeof A == 'function' ? (A(r.state.value[e]), (T = { type: rr.patchFunction, storeId: e, events: y })) : (Oi(r.state.value[e], A), (T = { type: rr.patchObject, payload: A, storeId: e, events: y }))
    const D = (w = Symbol())
    Kt().then(() => {
      w === D && (c = !0)
    }),
      (u = !0),
      pn(f, T, r.state.value[e])
  }
  const v = i
    ? function () {
        const { state: T } = n,
          D = T ? T() : {}
        this.$patch((F) => {
          xt(F, D)
        })
      }
    : Mc
  function p() {
    o.stop(), (f = []), (h = []), r._s.delete(e)
  }
  function b(A, T) {
    return function () {
      Rr(r)
      const D = Array.from(arguments),
        F = [],
        B = []
      function U(S) {
        F.push(S)
      }
      function X(S) {
        B.push(S)
      }
      pn(h, { args: D, name: A, store: O, after: U, onError: X })
      let g
      try {
        g = T.apply(this && this.$id === e ? this : O, D)
      } catch (S) {
        throw (pn(B, S), S)
      }
      return g instanceof Promise ? g.then((S) => (pn(F, S), S)).catch((S) => (pn(B, S), Promise.reject(S))) : (pn(F, g), g)
    }
  }
  const R = {
      _p: r,
      $id: e,
      $onAction: pa.bind(null, h),
      $patch: E,
      $reset: v,
      $subscribe(A, T = {}) {
        const D = pa(f, A, T.detached, () => F()),
          F = o.run(() =>
            Ut(
              () => r.state.value[e],
              (B) => {
                ;(T.flush === 'sync' ? u : c) && A({ storeId: e, type: rr.direct, events: y }, B)
              },
              xt({}, l, T)
            )
          )
        return D
      },
      $dispose: p
    },
    O = it(R)
  r._s.set(e, O)
  const j = r._e.run(() => ((o = il()), o.run(() => t())))
  for (const A in j) {
    const T = j[A]
    if ((Ee(T) && !_p(T)) || Dt(T)) i || (m && gp(T) && (Ee(T) ? (T.value = m[A]) : Oi(T, m[A])), (r.state.value[e][A] = T))
    else if (typeof T == 'function') {
      const D = b(A, T)
      ;(j[A] = D), (a.actions[A] = T)
    }
  }
  return (
    xt(O, j),
    xt(ae(O), j),
    Object.defineProperty(O, '$state', {
      get: () => r.state.value[e],
      set: (A) => {
        E((T) => {
          xt(T, A)
        })
      }
    }),
    r._p.forEach((A) => {
      xt(
        O,
        o.run(() => A({ store: O, app: r._a, pinia: r, options: a }))
      )
    }),
    m && i && n.hydrate && n.hydrate(O.$state, m),
    (c = !0),
    (u = !0),
    O
  )
}
function _b(e, t, n) {
  let r, s
  const i = typeof t == 'function'
  typeof e == 'string' ? ((r = e), (s = i ? n : t)) : ((s = e), (r = e.id))
  function o(a, l) {
    const c = Ye()
    return (a = a || (c && Me(Uc, null))), a && Rr(a), (a = Hc), a._s.has(r) || (i ? Nc(r, t, s, a) : yp(r, s, a)), a._s.get(r)
  }
  return (o.$id = r), o
}
function vp(e) {
  return Array.isArray(e) ? e : [e]
}
const Fc = ['title', 'script', 'style', 'noscript'],
  bp = ['base', 'meta', 'link', 'style', 'script', 'noscript'],
  wp = ['title', 'titleTemplate', 'templateParams', 'base', 'htmlAttrs', 'bodyAttrs', 'meta', 'link', 'style', 'script', 'noscript'],
  Ep = ['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs', 'templateParams'],
  Tp = ['tagPosition', 'tagPriority', 'tagDuplicateStrategy', 'innerHTML', 'textContent']
function Bc(e) {
  let t = 9
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9)
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function Si(e) {
  return Bc(
    `${e.tag}:${e.textContent || e.innerHTML || ''}:${Object.entries(e.props)
      .map(([t, n]) => `${t}:${String(n)}`)
      .join(',')}`
  )
}
function Rp(e) {
  let t = 9
  for (const n of e) for (let r = 0; r < n.length; ) t = Math.imul(t ^ n.charCodeAt(r++), 9 ** 9)
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function Vc(e, t) {
  const { props: n, tag: r } = e
  if (Ep.includes(r)) return r
  if (r === 'link' && n.rel === 'canonical') return 'canonical'
  if (n.charset) return 'charset'
  const s = ['id']
  r === 'meta' && s.push('name', 'property', 'http-equiv')
  for (const i of s)
    if (typeof n[i] < 'u') {
      const o = String(n[i])
      return t && !t(o) ? !1 : `${r}:${i}:${o}`
    }
  return !1
}
const ma = (e, t) => (e == null ? t || null : typeof e == 'function' ? e(t) : e),
  Ur = (e, t = !1, n) => {
    const { tag: r, $el: s } = e
    s &&
      (Object.entries(r.props).forEach(([i, o]) => {
        o = String(o)
        const a = `attr:${i}`
        if (i === 'class') {
          if (!o) return
          for (const l of o.split(' ')) {
            const c = `${a}:${l}`
            n && n(e, c, () => s.classList.remove(l)), s.classList.contains(l) || s.classList.add(l)
          }
          return
        }
        n && !i.startsWith('data-h-') && n(e, a, () => s.removeAttribute(i)), (t || s.getAttribute(i) !== o) && s.setAttribute(i, o)
      }),
      Fc.includes(r.tag) && (r.textContent && r.textContent !== s.textContent ? (s.textContent = r.textContent) : r.innerHTML && r.innerHTML !== s.innerHTML && (s.innerHTML = r.innerHTML)))
  }
let zn = !1
async function Cp(e, t = {}) {
  var h, y
  const n = { shouldRender: !0 }
  if ((await e.hooks.callHook('dom:beforeRender', n), !n.shouldRender)) return
  const r = t.document || e.resolvedOptions.document || window.document,
    s = (await e.resolveTags()).map(a)
  if (e.resolvedOptions.experimentalHashHydration && ((zn = zn || e._hash || !1), zn)) {
    const m = Rp(s.map((w) => w.tag._h))
    if (zn === m) return
    zn = m
  }
  const i = e._popSideEffectQueue()
  e.headEntries()
    .map((m) => m._sde)
    .forEach((m) => {
      Object.entries(m).forEach(([w, E]) => {
        i[w] = E
      })
    })
  const o = (m, w, E) => {
    ;(w = `${m.renderId}:${w}`), m.entry && (m.entry._sde[w] = E), delete i[w]
  }
  function a(m) {
    const w = e.headEntries().find((v) => v._i === m._e),
      E = { renderId: !m.key && m._d ? m._d : Si(m), $el: null, shouldRender: !0, tag: m, entry: w, markSideEffect: (v, p) => o(E, v, p) }
    return E
  }
  const l = [],
    c = { body: [], head: [] },
    u = (m) => {
      ;(e._elMap[m.renderId] = m.$el),
        l.push(m),
        o(m, 'el', () => {
          var w
          ;(w = m.$el) == null || w.remove(), delete e._elMap[m.renderId]
        })
    }
  for (const m of s) {
    if ((await e.hooks.callHook('dom:beforeRenderTag', m), !m.shouldRender)) continue
    const { tag: w } = m
    if (w.tag === 'title') {
      ;(r.title = w.textContent || ''), l.push(m)
      continue
    }
    if (w.tag === 'htmlAttrs' || w.tag === 'bodyAttrs') {
      ;(m.$el = r[w.tag === 'htmlAttrs' ? 'documentElement' : 'body']), Ur(m, !1, o), l.push(m)
      continue
    }
    if (((m.$el = e._elMap[m.renderId]), !m.$el && w.key && (m.$el = r.querySelector(`${(h = w.tagPosition) != null && h.startsWith('body') ? 'body' : 'head'} > ${w.tag}[data-h-${w._h}]`)), m.$el)) {
      m.tag._d && Ur(m), u(m)
      continue
    }
    c[(y = w.tagPosition) != null && y.startsWith('body') ? 'body' : 'head'].push(m)
  }
  const f = { bodyClose: void 0, bodyOpen: void 0, head: void 0 }
  Object.entries(c).forEach(([m, w]) => {
    var v
    if (!w.length) return
    const E = (v = r == null ? void 0 : r[m]) == null ? void 0 : v.children
    if (E) {
      for (const p of [...E].reverse()) {
        const b = p.tagName.toLowerCase()
        if (!bp.includes(b)) continue
        const R = p.getAttributeNames().reduce((T, D) => ({ ...T, [D]: p.getAttribute(D) }), {}),
          O = { tag: b, props: R }
        p.innerHTML && (O.innerHTML = p.innerHTML)
        const j = Si(O)
        let A = w.findIndex((T) => (T == null ? void 0 : T.renderId) === j)
        if (A === -1) {
          const T = Vc(O)
          A = w.findIndex((D) => (D == null ? void 0 : D.tag._d) && D.tag._d === T)
        }
        if (A !== -1) {
          const T = w[A]
          ;(T.$el = p), Ur(T), u(T), delete w[A]
        }
      }
      w.forEach((p) => {
        const b = p.tag.tagPosition || 'head'
        ;(f[b] = f[b] || r.createDocumentFragment()), p.$el || ((p.$el = r.createElement(p.tag.tag)), Ur(p, !0)), f[b].appendChild(p.$el), u(p)
      })
    }
  }),
    f.head && r.head.appendChild(f.head),
    f.bodyOpen && r.body.insertBefore(f.bodyOpen, r.body.firstChild),
    f.bodyClose && r.body.appendChild(f.bodyClose)
  for (const m of l) await e.hooks.callHook('dom:renderTag', m)
  Object.values(i).forEach((m) => m())
}
let Ks = null
async function Pp(e, t = {}) {
  function n() {
    return (Ks = null), Cp(e, t)
  }
  const r = t.delayFn || ((s) => setTimeout(s, 10))
  return (Ks = Ks || new Promise((s) => r(() => s(n()))))
}
const Op = (e) => ({
  hooks: {
    'entries:updated': function (t) {
      if (typeof (e == null ? void 0 : e.document) > 'u' && typeof window > 'u') return
      let n = e == null ? void 0 : e.delayFn
      !n && typeof requestAnimationFrame < 'u' && (n = requestAnimationFrame), Pp(t, { document: (e == null ? void 0 : e.document) || window.document, delayFn: n })
    }
  }
})
function Sp(e) {
  var t
  return ((t = e == null ? void 0 : e.head.querySelector('meta[name="unhead:ssr"]')) == null ? void 0 : t.getAttribute('content')) || !1
}
const ga = { critical: 2, high: 9, low: 12, base: -1, title: 1, meta: 10 }
function _a(e) {
  if (typeof e.tagPriority == 'number') return e.tagPriority
  if (e.tag === 'meta') {
    if (e.props.charset) return -2
    if (e.props['http-equiv'] === 'content-security-policy') return 0
  }
  const t = e.tagPriority || e.tag
  return t in ga ? ga[t] : 10
}
const kp = [
  { prefix: 'before:', offset: -1 },
  { prefix: 'after:', offset: 1 }
]
function Ap() {
  return {
    hooks: {
      'tags:resolve': (e) => {
        const t = (n) => {
          var r
          return (r = e.tags.find((s) => s._d === n)) == null ? void 0 : r._p
        }
        for (const { prefix: n, offset: r } of kp)
          for (const s of e.tags.filter((i) => typeof i.tagPriority == 'string' && i.tagPriority.startsWith(n))) {
            const i = t(s.tagPriority.replace(n, ''))
            typeof i < 'u' && (s._p = i + r)
          }
        e.tags.sort((n, r) => n._p - r._p).sort((n, r) => _a(n) - _a(r))
      }
    }
  }
}
const xp = () => ({
    hooks: {
      'tags:resolve': (e) => {
        const { tags: t } = e
        let n = t.findIndex((s) => s.tag === 'titleTemplate')
        const r = t.findIndex((s) => s.tag === 'title')
        if (r !== -1 && n !== -1) {
          const s = ma(t[n].textContent, t[r].textContent)
          s !== null ? (t[r].textContent = s || t[r].textContent) : delete t[r]
        } else if (n !== -1) {
          const s = ma(t[n].textContent)
          s !== null && ((t[n].textContent = s), (t[n].tag = 'title'), (n = -1))
        }
        n !== -1 && delete t[n], (e.tags = t.filter(Boolean))
      }
    }
  }),
  $p = () => ({
    hooks: {
      'tag:normalise': function ({ tag: e }) {
        typeof e.props.body < 'u' && ((e.tagPosition = 'bodyClose'), delete e.props.body)
      }
    }
  }),
  jp = ['link', 'style', 'script', 'noscript'],
  Ip = () => ({
    hooks: {
      'tag:normalise': ({ tag: e, resolvedOptions: t }) => {
        t.experimentalHashHydration === !0 && (e._h = Si(e)), e.key && jp.includes(e.tag) && ((e._h = Bc(e.key)), (e.props[`data-h-${e._h}`] = ''))
      }
    }
  }),
  ya = ['script', 'link', 'bodyAttrs'],
  Lp = () => {
    const e = (t, n) => {
      const r = {},
        s = {}
      Object.entries(n.props).forEach(([o, a]) => {
        o.startsWith('on') && typeof a == 'function' ? (s[o] = a) : (r[o] = a)
      })
      let i
      return t === 'dom' && n.tag === 'script' && typeof r.src == 'string' && typeof s.onload < 'u' && ((i = r.src), delete r.src), { props: r, eventHandlers: s, delayedSrc: i }
    }
    return {
      hooks: {
        'ssr:render': function (t) {
          t.tags = t.tags.map((n) => (!ya.includes(n.tag) || !Object.entries(n.props).find(([r, s]) => r.startsWith('on') && typeof s == 'function') || (n.props = e('ssr', n).props), n))
        },
        'dom:beforeRenderTag': function (t) {
          if (!ya.includes(t.tag.tag) || !Object.entries(t.tag.props).find(([i, o]) => i.startsWith('on') && typeof o == 'function')) return
          const { props: n, eventHandlers: r, delayedSrc: s } = e('dom', t.tag)
          Object.keys(r).length && ((t.tag.props = n), (t.tag._eventHandlers = r), (t.tag._delayedSrc = s))
        },
        'dom:renderTag': function (t) {
          const n = t.$el
          if (!t.tag._eventHandlers || !n) return
          const r = t.tag.tag === 'bodyAttrs' && typeof window < 'u' ? window : n
          Object.entries(t.tag._eventHandlers).forEach(([s, i]) => {
            const o = `${t.tag._d || t.tag._p}:${s}`,
              a = s.slice(2).toLowerCase(),
              l = `data-h-${a}`
            if ((t.markSideEffect(o, () => {}), n.hasAttribute(l))) return
            const c = i
            n.setAttribute(l, ''),
              r.addEventListener(a, c),
              t.entry &&
                (t.entry._sde[o] = () => {
                  r.removeEventListener(a, c), n.removeAttribute(l)
                })
          }),
            t.tag._delayedSrc && n.setAttribute('src', t.tag._delayedSrc)
        }
      }
    }
  },
  Dp = ['templateParams', 'htmlAttrs', 'bodyAttrs'],
  Hp = () => ({
    hooks: {
      'tag:normalise': function ({ tag: e }) {
        ;['hid', 'vmid', 'key'].forEach((n) => {
          e.props[n] && ((e.key = e.props[n]), delete e.props[n])
        })
        const t = e.key ? `${e.tag}:${e.key}` : Vc(e)
        t && (e._d = t)
      },
      'tags:resolve': function (e) {
        const t = {}
        e.tags.forEach((r) => {
          const s = r._d || r._p,
            i = t[s]
          if (i) {
            let o = r == null ? void 0 : r.tagDuplicateStrategy
            if ((!o && Dp.includes(r.tag) && (o = 'merge'), o === 'merge')) {
              const l = i.props
              ;['class', 'style'].forEach((c) => {
                r.props[c] && l[c] && (c === 'style' && !l[c].endsWith(';') && (l[c] += ';'), (r.props[c] = `${l[c]} ${r.props[c]}`))
              }),
                (t[s].props = { ...l, ...r.props })
              return
            } else if (r._e === i._e) {
              ;(i._duped = i._duped || []), (r._d = `${i._d}:${i._duped.length + 1}`), i._duped.push(r)
              return
            }
            const a = Object.keys(r.props).length
            if ((a === 0 || (a === 1 && typeof r.props['data-h-key'] < 'u')) && !r.innerHTML && !r.textContent) {
              delete t[s]
              return
            }
          }
          t[s] = r
        })
        const n = []
        Object.values(t).forEach((r) => {
          const s = r._duped
          delete r._duped, n.push(r), s && n.push(...s)
        }),
          (e.tags = n)
      }
    }
  })
function Mr(e, t) {
  function n(i) {
    if (['s', 'pageTitle'].includes(i)) return t.pageTitle
    let o
    return i.includes('.') ? (o = i.split('.').reduce((a, l) => (a && a[l]) || void 0, t)) : (o = t[i]), typeof o < 'u' ? o || '' : !1
  }
  let r = e
  try {
    r = decodeURI(e)
  } catch {}
  return (
    (r.match(/%(\w+\.+\w+)|%(\w+)/g) || [])
      .sort()
      .reverse()
      .forEach((i) => {
        const o = n(i.slice(1))
        typeof o == 'string' && (e = e.replaceAll(new RegExp(`\\${i}(\\W|$)`, 'g'), `${o}$1`).trim())
      }),
    t.separator && (e.endsWith(t.separator) && (e = e.slice(0, -t.separator.length).trim()), e.startsWith(t.separator) && (e = e.slice(t.separator.length).trim()), (e = e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`, 'g'), t.separator))),
    e
  )
}
function Up() {
  return {
    hooks: {
      'tags:resolve': (e) => {
        var i
        const { tags: t } = e,
          n = (i = t.find((o) => o.tag === 'title')) == null ? void 0 : i.textContent,
          r = t.findIndex((o) => o.tag === 'templateParams'),
          s = r !== -1 ? t[r].props : {}
        s.pageTitle = s.pageTitle || n || ''
        for (const o of t)
          if (['titleTemplate', 'title'].includes(o.tag) && typeof o.textContent == 'string') o.textContent = Mr(o.textContent, s)
          else if (o.tag === 'meta' && typeof o.props.content == 'string') o.props.content = Mr(o.props.content, s)
          else if (o.tag === 'link' && typeof o.props.href == 'string') o.props.href = Mr(o.props.href, s)
          else if (o.tag === 'script' && ['application/json', 'application/ld+json'].includes(o.props.type) && typeof o.innerHTML == 'string')
            try {
              o.innerHTML = JSON.stringify(JSON.parse(o.innerHTML), (a, l) => (typeof l == 'string' ? Mr(l, s) : l))
            } catch {}
        e.tags = t.filter((o) => o.tag !== 'templateParams')
      }
    }
  }
}
const Mp = typeof window < 'u'
let Kc
const Np = (e) => (Kc = e),
  Fp = () => Kc
async function Bp(e, t) {
  const n = { tag: e, props: {} }
  return e === 'templateParams'
    ? ((n.props = t), n)
    : ['title', 'titleTemplate'].includes(e)
    ? ((n.textContent = t instanceof Promise ? await t : t), n)
    : typeof t == 'string'
    ? ['script', 'noscript', 'style'].includes(e)
      ? (e === 'script' && (/^(https?:)?\/\//.test(t) || t.startsWith('/')) ? (n.props.src = t) : (n.innerHTML = t), n)
      : !1
    : ((n.props = await Kp(e, { ...t })),
      n.props.children && (n.props.innerHTML = n.props.children),
      delete n.props.children,
      Object.keys(n.props)
        .filter((r) => Tp.includes(r))
        .forEach((r) => {
          ;(!['innerHTML', 'textContent'].includes(r) || Fc.includes(n.tag)) && (n[r] = n.props[r]), delete n.props[r]
        }),
      ['innerHTML', 'textContent'].forEach((r) => {
        if (n.tag === 'script' && typeof n[r] == 'string' && ['application/ld+json', 'application/json'].includes(n.props.type))
          try {
            n[r] = JSON.parse(n[r])
          } catch {
            n[r] = ''
          }
        typeof n[r] == 'object' && (n[r] = JSON.stringify(n[r]))
      }),
      n.props.class && (n.props.class = Vp(n.props.class)),
      n.props.content && Array.isArray(n.props.content) ? n.props.content.map((r) => ({ ...n, props: { ...n.props, content: r } })) : n)
}
function Vp(e) {
  return (
    typeof e == 'object' && !Array.isArray(e) && (e = Object.keys(e).filter((t) => e[t])),
    (Array.isArray(e) ? e.join(' ') : e)
      .split(' ')
      .filter((t) => t.trim())
      .filter(Boolean)
      .join(' ')
  )
}
async function Kp(e, t) {
  for (const n of Object.keys(t)) {
    const r = n.startsWith('data-')
    t[n] instanceof Promise && (t[n] = await t[n]), String(t[n]) === 'true' ? (t[n] = r ? 'true' : '') : String(t[n]) === 'false' && (r ? (t[n] = 'false') : delete t[n])
  }
  return t
}
const qp = 10
async function Wp(e) {
  const t = []
  return (
    Object.entries(e.resolvedInput)
      .filter(([n, r]) => typeof r < 'u' && wp.includes(n))
      .forEach(([n, r]) => {
        const s = vp(r)
        t.push(...s.map((i) => Bp(n, i)).flat())
      }),
    (await Promise.all(t))
      .flat()
      .filter(Boolean)
      .map((n, r) => ((n._e = e._i), (n._p = (e._i << qp) + r), n))
  )
}
const zp = () => [Hp(), Ap(), Up(), xp(), Ip(), Lp(), $p()],
  Jp = (e = {}) => [Op({ document: e == null ? void 0 : e.document, delayFn: e == null ? void 0 : e.domDelayFn })]
function Gp(e = {}) {
  const t = Qp({ ...e, plugins: [...Jp(e), ...((e == null ? void 0 : e.plugins) || [])] })
  return e.experimentalHashHydration && t.resolvedOptions.document && (t._hash = Sp(t.resolvedOptions.document)), Np(t), t
}
function Qp(e = {}) {
  let t = [],
    n = {},
    r = 0
  const s = Lc()
  e != null && e.hooks && s.addHooks(e.hooks), (e.plugins = [...zp(), ...((e == null ? void 0 : e.plugins) || [])]), e.plugins.forEach((a) => a.hooks && s.addHooks(a.hooks)), (e.document = e.document || (Mp ? document : void 0))
  const i = () => s.callHook('entries:updated', o),
    o = {
      resolvedOptions: e,
      headEntries() {
        return t
      },
      get hooks() {
        return s
      },
      use(a) {
        a.hooks && s.addHooks(a.hooks)
      },
      push(a, l) {
        const c = { _i: r++, input: a, _sde: {} }
        return (
          l != null && l.mode && (c._m = l == null ? void 0 : l.mode),
          l != null && l.transform && (c._t = l == null ? void 0 : l.transform),
          t.push(c),
          i(),
          {
            dispose() {
              t = t.filter((u) => (u._i !== c._i ? !0 : ((n = { ...n, ...(u._sde || {}) }), (u._sde = {}), i(), !1)))
            },
            patch(u) {
              t = t.map((f) => (f._i === c._i && ((c.input = f.input = u), i()), f))
            }
          }
        )
      },
      async resolveTags() {
        const a = { tags: [], entries: [...t] }
        await s.callHook('entries:resolve', a)
        for (const l of a.entries) {
          const c = l._t || ((u) => u)
          if (((l.resolvedInput = c(l.resolvedInput || l.input)), l.resolvedInput))
            for (const u of await Wp(l)) {
              const f = { tag: u, entry: l, resolvedOptions: o.resolvedOptions }
              await s.callHook('tag:normalise', f), a.tags.push(f.tag)
            }
        }
        return await s.callHook('tags:resolve', a), a.tags
      },
      _popSideEffectQueue() {
        const a = { ...n }
        return (n = {}), a
      },
      _elMap: {}
    }
  return o.hooks.callHook('init', o), o
}
function Xp(e) {
  return typeof e == 'function' ? e() : ke(e)
}
function rs(e, t = '') {
  if (e instanceof Promise) return e
  const n = Xp(e)
  return !e || !n ? n : Array.isArray(n) ? n.map((r) => rs(r, t)) : typeof n == 'object' ? Object.fromEntries(Object.entries(n).map(([r, s]) => (r === 'titleTemplate' || r.startsWith('on') ? [r, ke(s)] : [r, rs(s, r)]))) : n
}
const Yp = cc.startsWith('3'),
  Zp = typeof window < 'u',
  qc = 'usehead'
function uo() {
  return (Ye() && Me(qc)) || Fp()
}
function em(e) {
  return {
    install(n) {
      Yp && ((n.config.globalProperties.$unhead = e), (n.config.globalProperties.$head = e), n.provide(qc, e))
    }
  }.install
}
function tm(e = {}) {
  const t = Gp({ ...e, domDelayFn: (n) => setTimeout(() => Kt(() => n()), 10), plugins: [nm(), ...((e == null ? void 0 : e.plugins) || [])] })
  return (t.install = em(t)), t
}
const nm = () => ({
  hooks: {
    'entries:resolve': function (e) {
      for (const t of e.entries) t.resolvedInput = rs(t.input)
    }
  }
})
function rm(e, t = {}) {
  const n = uo(),
    r = vt(!1),
    s = vt({})
  Df(() => {
    s.value = r.value ? {} : rs(e)
  })
  const i = n.push(s.value, t)
  return (
    Ut(s, (a) => {
      i.patch(a)
    }),
    Ye() &&
      (Ts(() => {
        i.dispose()
      }),
      Ul(() => {
        r.value = !0
      }),
      Hl(() => {
        r.value = !1
      })),
    i
  )
}
function sm(e, t = {}) {
  return uo().push(e, t)
}
function im(e, t = {}) {
  var r
  const n = uo()
  if (n) {
    const s = Zp || !!((r = n.resolvedOptions) != null && r.document)
    return (t.mode === 'server' && s) || (t.mode === 'client' && !s) ? void 0 : s ? rm(e, t) : sm(e, t)
  }
}
const om = decodeURIComponent,
  am = encodeURIComponent,
  lm = /; */,
  Nr = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
function cm(e, t) {
  if (typeof e != 'string') throw new TypeError('argument str must be a string')
  let n = {},
    r = t || {},
    s = e.split(lm),
    i = r.decode || om
  for (let o = 0; o < s.length; o++) {
    let a = s[o],
      l = a.indexOf('=')
    if (l < 0) continue
    let c = a.substr(0, l).trim(),
      u = a.substr(++l, a.length).trim()
    u[0] == '"' && (u = u.slice(1, -1)), n[c] == null && (n[c] = um(u, i))
  }
  return n
}
function va(e, t, n) {
  let r = n || {},
    s = r.encode || am
  if (typeof s != 'function') throw new TypeError('option encode is invalid')
  if (!Nr.test(e)) throw new TypeError('argument name is invalid')
  let i = s(t)
  if (i && !Nr.test(i)) throw new TypeError('argument val is invalid')
  let o = e + '=' + i
  if (r.maxAge != null) {
    let a = r.maxAge - 0
    if (isNaN(a) || !isFinite(a)) throw new TypeError('option maxAge is invalid')
    o += '; Max-Age=' + Math.floor(a)
  }
  if (r.domain) {
    if (!Nr.test(r.domain)) throw new TypeError('option domain is invalid')
    o += '; Domain=' + r.domain
  }
  if (r.path) {
    if (!Nr.test(r.path)) throw new TypeError('option path is invalid')
    o += '; Path=' + r.path
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != 'function') throw new TypeError('option expires is invalid')
    o += '; Expires=' + r.expires.toUTCString()
  }
  if ((r.httpOnly && (o += '; HttpOnly'), r.secure && (o += '; Secure'), r.sameSite))
    switch (typeof r.sameSite == 'string' ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        o += '; SameSite=Strict'
        break
      case 'lax':
        o += '; SameSite=Lax'
        break
      case 'strict':
        o += '; SameSite=Strict'
        break
      case 'none':
        o += '; SameSite=None'
        break
      default:
        throw new TypeError('option sameSite is invalid')
    }
  return o
}
function um(e, t) {
  try {
    return t(e)
  } catch {
    return e
  }
}
function qs(e) {
  return e !== null && typeof e == 'object'
}
function ki(e, t, n = '.', r) {
  if (!qs(t)) return ki(e, {}, n, r)
  const s = Object.assign({}, t)
  for (const i in e) {
    if (i === '__proto__' || i === 'constructor') continue
    const o = e[i]
    o != null && ((r && r(s, i, o, n)) || (Array.isArray(o) && Array.isArray(s[i]) ? (s[i] = [...o, ...s[i]]) : qs(o) && qs(s[i]) ? (s[i] = ki(o, s[i], (n ? `${n}.` : '') + i.toString(), r)) : (s[i] = o)))
  }
  return s
}
function fm(e) {
  return (...t) => t.reduce((n, r) => ki(n, r, '', e), {})
}
const Wc = fm()
class Ai extends Error {
  constructor() {
    super(...arguments), (this.statusCode = 500), (this.fatal = !1), (this.unhandled = !1), (this.statusMessage = void 0)
  }
  toJSON() {
    const t = { message: this.message, statusCode: $i(this.statusCode, 500) }
    return this.statusMessage && (t.statusMessage = zc(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t
  }
}
Ai.__h3_error__ = !0
function xi(e) {
  if (typeof e == 'string') return new Ai(e)
  if (hm(e)) return e
  const t = new Ai(e.message ?? e.statusMessage, e.cause ? { cause: e.cause } : void 0)
  if ('stack' in e)
    try {
      Object.defineProperty(t, 'stack', {
        get() {
          return e.stack
        }
      })
    } catch {
      try {
        t.stack = e.stack
      } catch {}
    }
  if ((e.data && (t.data = e.data), e.statusCode ? (t.statusCode = $i(e.statusCode, t.statusCode)) : e.status && (t.statusCode = $i(e.status, t.statusCode)), e.statusMessage ? (t.statusMessage = e.statusMessage) : e.statusText && (t.statusMessage = e.statusText), t.statusMessage)) {
    const n = t.statusMessage
    zc(t.statusMessage) !== n && console.warn('[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future `statusMessage` will be sanitized by default.')
  }
  return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t
}
function hm(e) {
  var t
  return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const dm = /[^\u0009\u0020-\u007E]/g
function zc(e = '') {
  return e.replace(dm, '')
}
function $i(e, t = 200) {
  return !e || (typeof e == 'string' && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e
}
function Jc(...e) {
  const t = typeof e[e.length - 1] == 'string' ? e.pop() : void 0
  typeof e[0] != 'string' && e.unshift(t)
  const [n, r] = e
  if (!n || typeof n != 'string') throw new TypeError('[nuxt] [useState] key must be a string: ' + n)
  if (r !== void 0 && typeof r != 'function') throw new Error('[nuxt] [useState] init must be a function: ' + r)
  const s = '$s' + n,
    i = Pe(),
    o = Qi(i.payload.state, s)
  if (o.value === void 0 && r) {
    const a = r()
    if (Ee(a)) return (i.payload.state[s] = a), a
    o.value = a
  }
  return o
}
const Fn = () => {
    var e
    return (e = Pe()) == null ? void 0 : e.$router
  },
  Gc = () => (Ye() ? Me('_route', Pe()._route) : Pe()._route),
  pm = (e) => e,
  mm = () => {
    try {
      if (Pe()._processingMiddleware) return !0
    } catch {
      return !0
    }
    return !1
  },
  yb = (e, t) => {
    e || (e = '/')
    const n = typeof e == 'string' ? e : e.path || '/',
      r = (t == null ? void 0 : t.external) || wr(n, { acceptRelative: !0 })
    if (r && !(t != null && t.external)) throw new Error('Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.')
    if (r && Os(n).protocol === 'script:') throw new Error('Cannot navigate to an URL with script protocol.')
    if (!r && mm()) return e
    const s = Fn()
    return r ? (t != null && t.replace ? location.replace(n) : (location.href = n), Promise.resolve()) : t != null && t.replace ? s.replace(e) : s.push(e)
  },
  Ss = () => Qi(Pe().payload, 'error'),
  vn = (e) => {
    const t = Qc(e)
    try {
      Pe().callHook('app:error', t)
      const r = Ss()
      r.value = r.value || t
    } catch {
      throw t
    }
    return t
  },
  gm = async (e = {}) => {
    const t = Pe(),
      n = Ss()
    t.callHook('app:error:cleared', e), e.redirect && (await Fn().replace(e.redirect)), (n.value = null)
  },
  _m = (e) => !!(e && typeof e == 'object' && '__nuxt_error' in e),
  Qc = (e) => {
    const t = xi(e)
    return (t.__nuxt_error = !0), t
  },
  ym = { path: '/', watch: !0, decode: (e) => Cc(decodeURIComponent(e)), encode: (e) => encodeURIComponent(typeof e == 'string' ? e : JSON.stringify(e)) }
function vm(e, t) {
  var i
  const n = { ...ym, ...t },
    r = bm(n) || {},
    s = vt(r[e] ?? ((i = n.default) == null ? void 0 : i.call(n)))
  {
    const o = () => {
      Em(e, s.value, n)
    }
    n.watch ? Ut(s, o, { deep: n.watch !== 'shallow' }) : o()
  }
  return s
}
function bm(e = {}) {
  return cm(document.cookie, e)
}
function wm(e, t, n = {}) {
  return t == null ? va(e, t, { ...n, maxAge: -1 }) : va(e, t, n)
}
function Em(e, t, n = {}) {
  document.cookie = wm(e, t, n)
}
const Tm = 'modulepreload',
  Rm = function (e, t) {
    return e.startsWith('.') ? new URL(e, t).href : e
  },
  ba = {},
  Cm = function (t, n, r) {
    if (!n || n.length === 0) return t()
    const s = document.getElementsByTagName('link')
    return Promise.all(
      n.map((i) => {
        if (((i = Rm(i, r)), i in ba)) return
        ba[i] = !0
        const o = i.endsWith('.css'),
          a = o ? '[rel="stylesheet"]' : ''
        if (!!r)
          for (let u = s.length - 1; u >= 0; u--) {
            const f = s[u]
            if (f.href === i && (!o || f.rel === 'stylesheet')) return
          }
        else if (document.querySelector(`link[href="${i}"]${a}`)) return
        const c = document.createElement('link')
        if (((c.rel = o ? 'stylesheet' : Tm), o || ((c.as = 'script'), (c.crossOrigin = '')), (c.href = i), document.head.appendChild(c), o))
          return new Promise((u, f) => {
            c.addEventListener('load', u), c.addEventListener('error', () => f(new Error(`Unable to preload CSS for ${i}`)))
          })
      })
    ).then(() => t())
  },
  Q = (...e) =>
    Cm(...e).catch((t) => {
      const n = new Event('nuxt.preloadError')
      throw ((n.payload = t), window.dispatchEvent(n), t)
    })
function wa(e, t = {}) {
  const n = Pm(e, t),
    r = Pe(),
    s = (r._payloadCache = r._payloadCache || {})
  return s[n] || (s[n] = Om(n).then((i) => i || (delete s[n], null))), s[n]
}
function Pm(e, t = {}) {
  const n = new URL(e, 'http://localhost')
  if (n.search) throw new Error('Payload URL cannot contain search params: ' + e)
  if (n.host !== 'localhost' || wr(n.pathname, { acceptRelative: !0 })) throw new Error('Payload URL must not include hostname: ' + e)
  const r = t.hash || (t.fresh ? Date.now() : '')
  return Er(Tr().app.baseURL, n.pathname, r ? `_payload.${r}.js` : '_payload.js')
}
async function Om(e) {
  const t = await Q(() => import(e), [], import.meta.url).catch((n) => {
    console.warn('[nuxt] Cannot load payload ', e, n)
  })
  return (t == null ? void 0 : t.default) || null
}
function Sm() {
  return !!Pe().payload.prerenderedAt
}
function km(e = {}) {
  const t = e.path || window.location.pathname
  let n = {}
  try {
    n = JSON.parse(sessionStorage.getItem('nuxt:reload') || '{}')
  } catch {}
  if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
    try {
      sessionStorage.setItem('nuxt:reload', JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) }))
    } catch {}
    if (e.persistState)
      try {
        sessionStorage.setItem('nuxt:reload:state', JSON.stringify({ state: Pe().payload.state }))
      } catch {}
    window.location.pathname !== t ? (window.location.href = t) : window.location.reload()
  }
}
const Am = Rt((e) => {
    const t = pp()
    return e.vueApp.use(t), Rr(t), e.payload && e.payload.pinia && (t.state.value = e.payload.pinia), { provide: { pinia: t } }
  }),
  Ws = {
    ContentDoc: oe(() => Q(() => import('./ContentDoc.59b2ed47.js'), ['./ContentDoc.59b2ed47.js', './ContentRenderer.db64ea76.js', './ContentRendererMarkdown.48214160.js', './index.a6ef77ff.js', './ContentQuery.0c768abb.js', './index.9b013864.js', './query.2810ea24.js', './utils.07f1fbc1.js'], import.meta.url).then((e) => e.default || e)),
    ContentList: oe(() => Q(() => import('./ContentList.c7d998f8.js'), ['./ContentList.c7d998f8.js', './ContentQuery.0c768abb.js', './index.9b013864.js', './query.2810ea24.js', './utils.07f1fbc1.js'], import.meta.url).then((e) => e.default || e)),
    ContentNavigation: oe(() => Q(() => import('./ContentNavigation.778018f5.js'), ['./ContentNavigation.778018f5.js', './index.9b013864.js', './nuxt-link.5a681159.js', './query.2810ea24.js', './utils.07f1fbc1.js', './ContentNavigation.7f0bf8a1.css', './ProseCode.e63e49c6.css'], import.meta.url).then((e) => e.default || e)),
    ContentQuery: oe(() => Q(() => import('./ContentQuery.0c768abb.js'), ['./ContentQuery.0c768abb.js', './index.9b013864.js', './query.2810ea24.js', './utils.07f1fbc1.js'], import.meta.url).then((e) => e.default || e)),
    ContentRenderer: oe(() => Q(() => import('./ContentRenderer.db64ea76.js'), ['./ContentRenderer.db64ea76.js', './ContentRendererMarkdown.48214160.js', './index.a6ef77ff.js'], import.meta.url).then((e) => e.default || e)),
    ContentRendererMarkdown: oe(() => Q(() => import('./ContentRendererMarkdown.48214160.js'), ['./ContentRendererMarkdown.48214160.js', './index.a6ef77ff.js'], import.meta.url).then((e) => e.default || e)),
    ContentSlot: oe(() => Q(() => import('./ContentSlot.9270c38e.js'), ['./ContentSlot.9270c38e.js', './utils.07f1fbc1.js'], import.meta.url).then((e) => e.default || e)),
    DocumentDrivenEmpty: oe(() => Q(() => import('./DocumentDrivenEmpty.76a7d6dc.js'), [], import.meta.url).then((e) => e.default || e)),
    DocumentDrivenNotFound: oe(() => Q(() => import('./DocumentDrivenNotFound.3e34cb8b.js'), [], import.meta.url).then((e) => e.default || e)),
    Markdown: oe(() => Q(() => import('./Markdown.aa472b33.js'), ['./Markdown.aa472b33.js', './ContentSlot.9270c38e.js', './utils.07f1fbc1.js'], import.meta.url).then((e) => e.default || e)),
    ProseA: oe(() => Q(() => import('./ProseA.060a2727.js'), ['./ProseA.060a2727.js', './nuxt-link.5a681159.js'], import.meta.url).then((e) => e.default || e)),
    ProseBlockquote: oe(() => Q(() => import('./ProseBlockquote.353a18a5.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseCode: oe(() => Q(() => import('./ProseCode.f4c967ba.js'), ['./ProseCode.f4c967ba.js', './ProseCode.e63e49c6.css'], import.meta.url).then((e) => e.default || e)),
    ProseCodeInline: oe(() => Q(() => import('./ProseCodeInline.0b48eedc.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseEm: oe(() => Q(() => import('./ProseEm.cbbe8a94.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseH1: oe(() => Q(() => import('./ProseH1.72e247da.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseH2: oe(() => Q(() => import('./ProseH2.a285be88.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseH3: oe(() => Q(() => import('./ProseH3.edba26b0.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseH4: oe(() => Q(() => import('./ProseH4.387718ef.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseH5: oe(() => Q(() => import('./ProseH5.89af6d34.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseH6: oe(() => Q(() => import('./ProseH6.182b59c8.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseHr: oe(() => Q(() => import('./ProseHr.88e93e73.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseImg: oe(() => Q(() => import('./ProseImg.bf65d41e.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseLi: oe(() => Q(() => import('./ProseLi.038fb537.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseOl: oe(() => Q(() => import('./ProseOl.8cb3afc4.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseP: oe(() => Q(() => import('./ProseP.e511186e.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseStrong: oe(() => Q(() => import('./ProseStrong.e4882f7b.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseTable: oe(() => Q(() => import('./ProseTable.a0cffbd5.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseTbody: oe(() => Q(() => import('./ProseTbody.e3f079ac.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseTd: oe(() => Q(() => import('./ProseTd.19a42039.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseTh: oe(() => Q(() => import('./ProseTh.f1b8cab5.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseThead: oe(() => Q(() => import('./ProseThead.35346809.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseTr: oe(() => Q(() => import('./ProseTr.53cf63c8.js'), [], import.meta.url).then((e) => e.default || e)),
    ProseUl: oe(() => Q(() => import('./ProseUl.2673c25d.js'), [], import.meta.url).then((e) => e.default || e))
  },
  xm = Rt((e) => {
    for (const t in Ws) e.vueApp.component(t, Ws[t]), e.vueApp.component('Lazy' + t, Ws[t])
  }),
  $m = { meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }, { charset: 'utf-8' }], link: [], style: [], script: [], noscript: [], charset: 'utf-8', viewport: 'width=device-width, initial-scale=1' },
  ji = { name: 'page', mode: 'out-in' },
  jm = !1,
  Im = !1,
  Lm = '__nuxt',
  Dm = Rt((e) => {
    const n = tm()
    n.push($m), e.vueApp.use(n)
    {
      let r = !0
      const s = () => {
        ;(r = !1), n.hooks.callHook('entries:updated', n)
      }
      n.hooks.hook('dom:beforeRender', (i) => {
        i.shouldRender = !r
      }),
        e.hooks.hook('page:start', () => {
          r = !0
        }),
        e.hooks.hook('page:finish', s),
        e.hooks.hook('app:suspense:resolve', s)
    }
  })
function Hm(e) {
  const t = e
  return (
    (t.headTags = e.resolveTags),
    (t.addEntry = e.push),
    (t.addHeadObjs = e.push),
    (t.addReactiveEntry = (n, r) => {
      const s = im(n, r)
      return typeof s < 'u' ? s.dispose : () => {}
    }),
    (t.removeHeadObjs = () => {}),
    (t.updateDOM = () => {
      e.hooks.callHook('entries:updated', e)
    }),
    (t.unhead = e),
    t
  )
}
const Um = Rt((e) => {
  Hm(e.vueApp._context.provides.usehead)
})
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const _n = typeof window < 'u'
function Mm(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const fe = Object.assign
function zs(e, t) {
  const n = {}
  for (const r in t) {
    const s = t[r]
    n[r] = ot(s) ? s.map(e) : e(s)
  }
  return n
}
const sr = () => {},
  ot = Array.isArray,
  Nm = /\/$/,
  Fm = (e) => e.replace(Nm, '')
function Js(e, t, n = '/') {
  let r,
    s = {},
    i = '',
    o = ''
  const a = t.indexOf('#')
  let l = t.indexOf('?')
  return a < l && a >= 0 && (l = -1), l > -1 && ((r = t.slice(0, l)), (i = t.slice(l + 1, a > -1 ? a : t.length)), (s = e(i))), a > -1 && ((r = r || t.slice(0, a)), (o = t.slice(a, t.length))), (r = qm(r ?? t, n)), { fullPath: r + (i && '?') + i + o, path: r, query: s, hash: o }
}
function Bm(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Ea(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function Vm(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return r > -1 && r === s && In(t.matched[r], n.matched[s]) && Xc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function In(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Xc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Km(e[n], t[n])) return !1
  return !0
}
function Km(e, t) {
  return ot(e) ? Ta(e, t) : ot(t) ? Ta(t, e) : e === t
}
function Ta(e, t) {
  return ot(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function qm(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    r = e.split('/')
  let s = n.length - 1,
    i,
    o
  for (i = 0; i < r.length; i++)
    if (((o = r[i]), o !== '.'))
      if (o === '..') s > 1 && s--
      else break
  return n.slice(0, s).join('/') + '/' + r.slice(i - (i === r.length ? 1 : 0)).join('/')
}
var gr
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(gr || (gr = {}))
var ir
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(ir || (ir = {}))
function Wm(e) {
  if (!e)
    if (_n) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Fm(e)
}
const zm = /^[^#]+#/
function Jm(e, t) {
  return e.replace(zm, '#') + t
}
function Gm(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) }
}
const ks = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function Qm(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      s = typeof n == 'string' ? (r ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n
    if (!s) return
    t = Gm(s, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}
function Ra(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Ii = new Map()
function Xm(e, t) {
  Ii.set(e, t)
}
function Ym(e) {
  const t = Ii.get(e)
  return Ii.delete(e), t
}
let Zm = () => location.protocol + '//' + location.host
function Yc(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let a = s.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = s.slice(a)
    return l[0] !== '/' && (l = '/' + l), Ea(l, '')
  }
  return Ea(n, e) + r + s
}
function eg(e, t, n, r) {
  let s = [],
    i = [],
    o = null
  const a = ({ state: h }) => {
    const y = Yc(e, location),
      m = n.value,
      w = t.value
    let E = 0
    if (h) {
      if (((n.value = y), (t.value = h), o && o === m)) {
        o = null
        return
      }
      E = w ? h.position - w.position : 0
    } else r(y)
    s.forEach((v) => {
      v(n.value, m, { delta: E, type: gr.pop, direction: E ? (E > 0 ? ir.forward : ir.back) : ir.unknown })
    })
  }
  function l() {
    o = n.value
  }
  function c(h) {
    s.push(h)
    const y = () => {
      const m = s.indexOf(h)
      m > -1 && s.splice(m, 1)
    }
    return i.push(y), y
  }
  function u() {
    const { history: h } = window
    h.state && h.replaceState(fe({}, h.state, { scroll: ks() }), '')
  }
  function f() {
    for (const h of i) h()
    ;(i = []), window.removeEventListener('popstate', a), window.removeEventListener('beforeunload', u)
  }
  return window.addEventListener('popstate', a), window.addEventListener('beforeunload', u), { pauseListeners: l, listen: c, destroy: f }
}
function Ca(e, t, n, r = !1, s = !1) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: s ? ks() : null }
}
function tg(e) {
  const { history: t, location: n } = window,
    r = { value: Yc(e, n) },
    s = { value: t.state }
  s.value || i(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: !0, scroll: null }, !0)
  function i(l, c, u) {
    const f = e.indexOf('#'),
      h = f > -1 ? (n.host && document.querySelector('base') ? e : e.slice(f)) + l : Zm() + e + l
    try {
      t[u ? 'replaceState' : 'pushState'](c, '', h), (s.value = c)
    } catch (y) {
      console.error(y), n[u ? 'replace' : 'assign'](h)
    }
  }
  function o(l, c) {
    const u = fe({}, t.state, Ca(s.value.back, l, s.value.forward, !0), c, { position: s.value.position })
    i(l, u, !0), (r.value = l)
  }
  function a(l, c) {
    const u = fe({}, s.value, t.state, { forward: l, scroll: ks() })
    i(u.current, u, !0)
    const f = fe({}, Ca(r.value, l, null), { position: u.position + 1 }, c)
    i(l, f, !1), (r.value = l)
  }
  return { location: r, state: s, push: a, replace: o }
}
function Zc(e) {
  e = Wm(e)
  const t = tg(e),
    n = eg(e, t.state, t.location, t.replace)
  function r(i, o = !0) {
    o || n.pauseListeners(), history.go(i)
  }
  const s = fe({ location: '', base: e, go: r, createHref: Jm.bind(null, e) }, t, n)
  return Object.defineProperty(s, 'location', { enumerable: !0, get: () => t.location.value }), Object.defineProperty(s, 'state', { enumerable: !0, get: () => t.state.value }), s
}
function ng(e) {
  return (e = location.host ? e || location.pathname + location.search : ''), e.includes('#') || (e += '#'), Zc(e)
}
function rg(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function eu(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const St = { path: '/', name: void 0, params: {}, query: {}, hash: '', fullPath: '/', matched: [], meta: {}, redirectedFrom: void 0 },
  tu = Symbol('')
var Pa
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'), (e[(e.cancelled = 8)] = 'cancelled'), (e[(e.duplicated = 16)] = 'duplicated')
})(Pa || (Pa = {}))
function Ln(e, t) {
  return fe(new Error(), { type: e, [tu]: !0 }, t)
}
function ht(e, t) {
  return e instanceof Error && tu in e && (t == null || !!(e.type & t))
}
const Oa = '[^/]+?',
  sg = { sensitive: !1, strict: !1, start: !0, end: !0 },
  ig = /[.+*?^${}()[\]/\\]/g
function og(e, t) {
  const n = fe({}, sg, t),
    r = []
  let s = n.start ? '^' : ''
  const i = []
  for (const c of e) {
    const u = c.length ? [] : [90]
    n.strict && !c.length && (s += '/')
    for (let f = 0; f < c.length; f++) {
      const h = c[f]
      let y = 40 + (n.sensitive ? 0.25 : 0)
      if (h.type === 0) f || (s += '/'), (s += h.value.replace(ig, '\\$&')), (y += 40)
      else if (h.type === 1) {
        const { value: m, repeatable: w, optional: E, regexp: v } = h
        i.push({ name: m, repeatable: w, optional: E })
        const p = v || Oa
        if (p !== Oa) {
          y += 10
          try {
            new RegExp(`(${p})`)
          } catch (R) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${p}): ` + R.message)
          }
        }
        let b = w ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`
        f || (b = E && c.length < 2 ? `(?:/${b})` : '/' + b), E && (b += '?'), (s += b), (y += 20), E && (y += -8), w && (y += -20), p === '.*' && (y += -50)
      }
      u.push(y)
    }
    r.push(u)
  }
  if (n.strict && n.end) {
    const c = r.length - 1
    r[c][r[c].length - 1] += 0.7000000000000001
  }
  n.strict || (s += '/?'), n.end ? (s += '$') : n.strict && (s += '(?:/|$)')
  const o = new RegExp(s, n.sensitive ? '' : 'i')
  function a(c) {
    const u = c.match(o),
      f = {}
    if (!u) return null
    for (let h = 1; h < u.length; h++) {
      const y = u[h] || '',
        m = i[h - 1]
      f[m.name] = y && m.repeatable ? y.split('/') : y
    }
    return f
  }
  function l(c) {
    let u = '',
      f = !1
    for (const h of e) {
      ;(!f || !u.endsWith('/')) && (u += '/'), (f = !1)
      for (const y of h)
        if (y.type === 0) u += y.value
        else if (y.type === 1) {
          const { value: m, repeatable: w, optional: E } = y,
            v = m in c ? c[m] : ''
          if (ot(v) && !w) throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`)
          const p = ot(v) ? v.join('/') : v
          if (!p)
            if (E) h.length < 2 && (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0))
            else throw new Error(`Missing required param "${m}"`)
          u += p
        }
    }
    return u || '/'
  }
  return { re: o, score: r, keys: i, parse: a, stringify: l }
}
function ag(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n]
    if (r) return r
    n++
  }
  return e.length < t.length ? (e.length === 1 && e[0] === 40 + 40 ? -1 : 1) : e.length > t.length ? (t.length === 1 && t[0] === 40 + 40 ? 1 : -1) : 0
}
function lg(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const i = ag(r[n], s[n])
    if (i) return i
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Sa(r)) return 1
    if (Sa(s)) return -1
  }
  return s.length - r.length
}
function Sa(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const cg = { type: 0, value: '' },
  ug = /[a-zA-Z0-9_]/
function fg(e) {
  if (!e) return [[]]
  if (e === '/') return [[cg]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(y) {
    throw new Error(`ERR (${n})/"${c}": ${y}`)
  }
  let n = 0,
    r = n
  const s = []
  let i
  function o() {
    i && s.push(i), (i = [])
  }
  let a = 0,
    l,
    c = '',
    u = ''
  function f() {
    c && (n === 0 ? i.push({ type: 0, value: c }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === '*' || l === '+') && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), i.push({ type: 1, value: c, regexp: u, repeatable: l === '*' || l === '+', optional: l === '*' || l === '?' })) : t('Invalid state to consume buffer'), (c = ''))
  }
  function h() {
    c += l
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== 2)) {
      ;(r = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        l === '/' ? (c && f(), o()) : l === ':' ? (f(), (n = 1)) : h()
        break
      case 4:
        h(), (n = r)
        break
      case 1:
        l === '(' ? (n = 2) : ug.test(l) ? h() : (f(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--)
        break
      case 2:
        l === ')' ? (u[u.length - 1] == '\\' ? (u = u.slice(0, -1) + l) : (n = 3)) : (u += l)
        break
      case 3:
        f(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--, (u = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), o(), s
}
function hg(e, t, n) {
  const r = og(fg(e.path), n),
    s = fe(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function dg(e, t) {
  const n = [],
    r = new Map()
  t = xa({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(u) {
    return r.get(u)
  }
  function i(u, f, h) {
    const y = !h,
      m = pg(u)
    m.aliasOf = h && h.record
    const w = xa(t, u),
      E = [m]
    if ('alias' in u) {
      const b = typeof u.alias == 'string' ? [u.alias] : u.alias
      for (const R of b) E.push(fe({}, m, { components: h ? h.record.components : m.components, path: R, aliasOf: h ? h.record : m }))
    }
    let v, p
    for (const b of E) {
      const { path: R } = b
      if (f && R[0] !== '/') {
        const O = f.record.path,
          j = O[O.length - 1] === '/' ? '' : '/'
        b.path = f.record.path + (R && j + R)
      }
      if (((v = hg(b, f, w)), h ? h.alias.push(v) : ((p = p || v), p !== v && p.alias.push(v), y && u.name && !Aa(v) && o(u.name)), m.children)) {
        const O = m.children
        for (let j = 0; j < O.length; j++) i(O[j], v, h && h.children[j])
      }
      ;(h = h || v), ((v.record.components && Object.keys(v.record.components).length) || v.record.name || v.record.redirect) && l(v)
    }
    return p
      ? () => {
          o(p)
        }
      : sr
  }
  function o(u) {
    if (eu(u)) {
      const f = r.get(u)
      f && (r.delete(u), n.splice(n.indexOf(f), 1), f.children.forEach(o), f.alias.forEach(o))
    } else {
      const f = n.indexOf(u)
      f > -1 && (n.splice(f, 1), u.record.name && r.delete(u.record.name), u.children.forEach(o), u.alias.forEach(o))
    }
  }
  function a() {
    return n
  }
  function l(u) {
    let f = 0
    for (; f < n.length && lg(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !nu(u, n[f])); ) f++
    n.splice(f, 0, u), u.record.name && !Aa(u) && r.set(u.record.name, u)
  }
  function c(u, f) {
    let h,
      y = {},
      m,
      w
    if ('name' in u && u.name) {
      if (((h = r.get(u.name)), !h)) throw Ln(1, { location: u })
      ;(w = h.record.name),
        (y = fe(
          ka(
            f.params,
            h.keys.filter((p) => !p.optional).map((p) => p.name)
          ),
          u.params &&
            ka(
              u.params,
              h.keys.map((p) => p.name)
            )
        )),
        (m = h.stringify(y))
    } else if ('path' in u) (m = u.path), (h = n.find((p) => p.re.test(m))), h && ((y = h.parse(m)), (w = h.record.name))
    else {
      if (((h = f.name ? r.get(f.name) : n.find((p) => p.re.test(f.path))), !h)) throw Ln(1, { location: u, currentLocation: f })
      ;(w = h.record.name), (y = fe({}, f.params, u.params)), (m = h.stringify(y))
    }
    const E = []
    let v = h
    for (; v; ) E.unshift(v.record), (v = v.parent)
    return { name: w, path: m, params: y, matched: E, meta: gg(E) }
  }
  return e.forEach((u) => i(u)), { addRoute: i, resolve: c, removeRoute: o, getRoutes: a, getRecordMatcher: s }
}
function ka(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function pg(e) {
  return { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: void 0, beforeEnter: e.beforeEnter, props: mg(e), children: e.children || [], instances: {}, leaveGuards: new Set(), updateGuards: new Set(), enterCallbacks: {}, components: 'components' in e ? e.components || null : e.component && { default: e.component } }
}
function mg(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == 'boolean' ? n : n[r]
  return t
}
function Aa(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function gg(e) {
  return e.reduce((t, n) => fe(t, n.meta), {})
}
function xa(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function nu(e, t) {
  return t.children.some((n) => n === e || nu(e, n))
}
const ru = /#/g,
  _g = /&/g,
  yg = /\//g,
  vg = /=/g,
  bg = /\?/g,
  su = /\+/g,
  wg = /%5B/g,
  Eg = /%5D/g,
  iu = /%5E/g,
  Tg = /%60/g,
  ou = /%7B/g,
  Rg = /%7C/g,
  au = /%7D/g,
  Cg = /%20/g
function fo(e) {
  return encodeURI('' + e)
    .replace(Rg, '|')
    .replace(wg, '[')
    .replace(Eg, ']')
}
function Pg(e) {
  return fo(e).replace(ou, '{').replace(au, '}').replace(iu, '^')
}
function Li(e) {
  return fo(e).replace(su, '%2B').replace(Cg, '+').replace(ru, '%23').replace(_g, '%26').replace(Tg, '`').replace(ou, '{').replace(au, '}').replace(iu, '^')
}
function Og(e) {
  return Li(e).replace(vg, '%3D')
}
function Sg(e) {
  return fo(e).replace(ru, '%23').replace(bg, '%3F')
}
function kg(e) {
  return e == null ? '' : Sg(e).replace(yg, '%2F')
}
function ss(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function Ag(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const r = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let s = 0; s < r.length; ++s) {
    const i = r[s].replace(su, ' '),
      o = i.indexOf('='),
      a = ss(o < 0 ? i : i.slice(0, o)),
      l = o < 0 ? null : ss(i.slice(o + 1))
    if (a in t) {
      let c = t[a]
      ot(c) || (c = t[a] = [c]), c.push(l)
    } else t[a] = l
  }
  return t
}
function $a(e) {
  let t = ''
  for (let n in e) {
    const r = e[n]
    if (((n = Og(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(ot(r) ? r.map((i) => i && Li(i)) : [r && Li(r)]).forEach((i) => {
      i !== void 0 && ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i))
    })
  }
  return t
}
function xg(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 && (t[n] = ot(r) ? r.map((s) => (s == null ? null : '' + s)) : r == null ? r : '' + r)
  }
  return t
}
const $g = Symbol(''),
  ja = Symbol(''),
  ho = Symbol(''),
  po = Symbol(''),
  Di = Symbol('')
function Jn() {
  let e = []
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r)
        s > -1 && e.splice(s, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e, reset: n }
}
function jt(e, t, n, r, s) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || [])
  return () =>
    new Promise((o, a) => {
      const l = (f) => {
          f === !1 ? a(Ln(4, { from: n, to: t })) : f instanceof Error ? a(f) : rg(f) ? a(Ln(2, { from: t, to: f })) : (i && r.enterCallbacks[s] === i && typeof f == 'function' && i.push(f), o())
        },
        c = e.call(r && r.instances[s], t, n, l)
      let u = Promise.resolve(c)
      e.length < 3 && (u = u.then(l)), u.catch((f) => a(f))
    })
}
function Gs(e, t, n, r) {
  const s = []
  for (const i of e)
    for (const o in i.components) {
      let a = i.components[o]
      if (!(t !== 'beforeRouteEnter' && !i.instances[o]))
        if (jg(a)) {
          const c = (a.__vccOpts || a)[t]
          c && s.push(jt(c, n, r, i, o))
        } else {
          let l = a()
          s.push(() =>
            l.then((c) => {
              if (!c) return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`))
              const u = Mm(c) ? c.default : c
              i.components[o] = u
              const h = (u.__vccOpts || u)[t]
              return h && jt(h, n, r, i, o)()
            })
          )
        }
    }
  return s
}
function jg(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function Ia(e) {
  const t = Me(ho),
    n = Me(po),
    r = je(() => t.resolve(ke(e.to))),
    s = je(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        u = l[c - 1],
        f = n.matched
      if (!u || !f.length) return -1
      const h = f.findIndex(In.bind(null, u))
      if (h > -1) return h
      const y = La(l[c - 2])
      return c > 1 && La(u) === y && f[f.length - 1].path !== y ? f.findIndex(In.bind(null, l[c - 2])) : h
    }),
    i = je(() => s.value > -1 && Hg(n.params, r.value.params)),
    o = je(() => s.value > -1 && s.value === n.matched.length - 1 && Xc(n.params, r.value.params))
  function a(l = {}) {
    return Dg(l) ? t[ke(e.replace) ? 'replace' : 'push'](ke(e.to)).catch(sr) : Promise.resolve()
  }
  return { route: r, href: je(() => r.value.href), isActive: i, isExactActive: o, navigate: a }
}
const Ig = Et({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: { to: { type: [String, Object], required: !0 }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: 'page' } },
    useLink: Ia,
    setup(e, { slots: t }) {
      const n = it(Ia(e)),
        { options: r } = Me(ho),
        s = je(() => ({ [Da(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive, [Da(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]: n.isExactActive }))
      return () => {
        const i = t.default && t.default(n)
        return e.custom ? i : st('a', { 'aria-current': n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: s.value }, i)
      }
    }
  }),
  Lg = Ig
function Dg(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Hg(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n]
    if (typeof r == 'string') {
      if (r !== s) return !1
    } else if (!ot(s) || s.length !== r.length || r.some((i, o) => i !== s[o])) return !1
  }
  return !0
}
function La(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Da = (e, t, n) => e ?? t ?? n,
  Ug = Et({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Me(Di),
        s = je(() => e.route || r.value),
        i = Me(ja, 0),
        o = je(() => {
          let c = ke(i)
          const { matched: u } = s.value
          let f
          for (; (f = u[c]) && !f.components; ) c++
          return c
        }),
        a = je(() => s.value.matched[o.value])
      Pn(
        ja,
        je(() => o.value + 1)
      ),
        Pn($g, a),
        Pn(Di, s)
      const l = vt()
      return (
        Ut(
          () => [l.value, a.value, e.name],
          ([c, u, f], [h, y, m]) => {
            u && ((u.instances[f] = c), y && y !== u && c && c === h && (u.leaveGuards.size || (u.leaveGuards = y.leaveGuards), u.updateGuards.size || (u.updateGuards = y.updateGuards))), c && u && (!y || !In(u, y) || !h) && (u.enterCallbacks[f] || []).forEach((w) => w(c))
          },
          { flush: 'post' }
        ),
        () => {
          const c = s.value,
            u = e.name,
            f = a.value,
            h = f && f.components[u]
          if (!h) return Ha(n.default, { Component: h, route: c })
          const y = f.props[u],
            m = y ? (y === !0 ? c.params : typeof y == 'function' ? y(c) : y) : null,
            E = st(
              h,
              fe({}, m, t, {
                onVnodeUnmounted: (v) => {
                  v.component.isUnmounted && (f.instances[u] = null)
                },
                ref: l
              })
            )
          return Ha(n.default, { Component: E, route: c }) || E
        }
      )
    }
  })
function Ha(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const lu = Ug
function Mg(e) {
  const t = dg(e.routes, e),
    n = e.parseQuery || Ag,
    r = e.stringifyQuery || $a,
    s = e.history,
    i = Jn(),
    o = Jn(),
    a = Jn(),
    l = ai(St)
  let c = St
  _n && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const u = zs.bind(null, (k) => '' + k),
    f = zs.bind(null, kg),
    h = zs.bind(null, ss)
  function y(k, K) {
    let N, z
    return eu(k) ? ((N = t.getRecordMatcher(k)), (z = K)) : (z = k), t.addRoute(z, N)
  }
  function m(k) {
    const K = t.getRecordMatcher(k)
    K && t.removeRoute(K)
  }
  function w() {
    return t.getRoutes().map((k) => k.record)
  }
  function E(k) {
    return !!t.getRecordMatcher(k)
  }
  function v(k, K) {
    if (((K = fe({}, K || l.value)), typeof k == 'string')) {
      const d = Js(n, k, K.path),
        _ = t.resolve({ path: d.path }, K),
        C = s.createHref(d.fullPath)
      return fe(d, _, { params: h(_.params), hash: ss(d.hash), redirectedFrom: void 0, href: C })
    }
    let N
    if ('path' in k) N = fe({}, k, { path: Js(n, k.path, K.path).path })
    else {
      const d = fe({}, k.params)
      for (const _ in d) d[_] == null && delete d[_]
      ;(N = fe({}, k, { params: f(k.params) })), (K.params = f(K.params))
    }
    const z = t.resolve(N, K),
      le = k.hash || ''
    z.params = u(h(z.params))
    const be = Bm(r, fe({}, k, { hash: Pg(le), path: z.path })),
      se = s.createHref(be)
    return fe({ fullPath: be, hash: le, query: r === $a ? xg(k.query) : k.query || {} }, z, { redirectedFrom: void 0, href: se })
  }
  function p(k) {
    return typeof k == 'string' ? Js(n, k, l.value.path) : fe({}, k)
  }
  function b(k, K) {
    if (c !== k) return Ln(8, { from: K, to: k })
  }
  function R(k) {
    return A(k)
  }
  function O(k) {
    return R(fe(p(k), { replace: !0 }))
  }
  function j(k) {
    const K = k.matched[k.matched.length - 1]
    if (K && K.redirect) {
      const { redirect: N } = K
      let z = typeof N == 'function' ? N(k) : N
      return typeof z == 'string' && ((z = z.includes('?') || z.includes('#') ? (z = p(z)) : { path: z }), (z.params = {})), fe({ query: k.query, hash: k.hash, params: 'path' in z ? {} : k.params }, z)
    }
  }
  function A(k, K) {
    const N = (c = v(k)),
      z = l.value,
      le = k.state,
      be = k.force,
      se = k.replace === !0,
      d = j(N)
    if (d) return A(fe(p(d), { state: typeof d == 'object' ? fe({}, le, d.state) : le, force: be, replace: se }), K || N)
    const _ = N
    _.redirectedFrom = K
    let C
    return (
      !be && Vm(r, z, N) && ((C = Ln(16, { to: _, from: z })), ze(z, z, !0, !1)),
      (C ? Promise.resolve(C) : D(_, z))
        .catch((P) => (ht(P) ? (ht(P, 2) ? P : re(P)) : te(P, _, z)))
        .then((P) => {
          if (P) {
            if (ht(P, 2)) return A(fe({ replace: se }, p(P.to), { state: typeof P.to == 'object' ? fe({}, le, P.to.state) : le, force: be }), K || _)
          } else P = B(_, z, !0, se, le)
          return F(_, z, P), P
        })
    )
  }
  function T(k, K) {
    const N = b(k, K)
    return N ? Promise.reject(N) : Promise.resolve()
  }
  function D(k, K) {
    let N
    const [z, le, be] = Ng(k, K)
    N = Gs(z.reverse(), 'beforeRouteLeave', k, K)
    for (const d of z)
      d.leaveGuards.forEach((_) => {
        N.push(jt(_, k, K))
      })
    const se = T.bind(null, k, K)
    return (
      N.push(se),
      mn(N)
        .then(() => {
          N = []
          for (const d of i.list()) N.push(jt(d, k, K))
          return N.push(se), mn(N)
        })
        .then(() => {
          N = Gs(le, 'beforeRouteUpdate', k, K)
          for (const d of le)
            d.updateGuards.forEach((_) => {
              N.push(jt(_, k, K))
            })
          return N.push(se), mn(N)
        })
        .then(() => {
          N = []
          for (const d of k.matched)
            if (d.beforeEnter && !K.matched.includes(d))
              if (ot(d.beforeEnter)) for (const _ of d.beforeEnter) N.push(jt(_, k, K))
              else N.push(jt(d.beforeEnter, k, K))
          return N.push(se), mn(N)
        })
        .then(() => (k.matched.forEach((d) => (d.enterCallbacks = {})), (N = Gs(be, 'beforeRouteEnter', k, K)), N.push(se), mn(N)))
        .then(() => {
          N = []
          for (const d of o.list()) N.push(jt(d, k, K))
          return N.push(se), mn(N)
        })
        .catch((d) => (ht(d, 8) ? d : Promise.reject(d)))
    )
  }
  function F(k, K, N) {
    for (const z of a.list()) z(k, K, N)
  }
  function B(k, K, N, z, le) {
    const be = b(k, K)
    if (be) return be
    const se = K === St,
      d = _n ? history.state : {}
    N && (z || se ? s.replace(k.fullPath, fe({ scroll: se && d && d.scroll }, le)) : s.push(k.fullPath, le)), (l.value = k), ze(k, K, N, se), re()
  }
  let U
  function X() {
    U ||
      (U = s.listen((k, K, N) => {
        if (!Cr.listening) return
        const z = v(k),
          le = j(z)
        if (le) {
          A(fe(le, { replace: !0 }), z).catch(sr)
          return
        }
        c = z
        const be = l.value
        _n && Xm(Ra(be.fullPath, N.delta), ks()),
          D(z, be)
            .catch((se) =>
              ht(se, 12)
                ? se
                : ht(se, 2)
                ? (A(se.to, z)
                    .then((d) => {
                      ht(d, 20) && !N.delta && N.type === gr.pop && s.go(-1, !1)
                    })
                    .catch(sr),
                  Promise.reject())
                : (N.delta && s.go(-N.delta, !1), te(se, z, be))
            )
            .then((se) => {
              ;(se = se || B(z, be, !1)), se && (N.delta && !ht(se, 8) ? s.go(-N.delta, !1) : N.type === gr.pop && ht(se, 20) && s.go(-1, !1)), F(z, be, se)
            })
            .catch(sr)
      }))
  }
  let g = Jn(),
    S = Jn(),
    M
  function te(k, K, N) {
    re(k)
    const z = S.list()
    return z.length ? z.forEach((le) => le(k, K, N)) : console.error(k), Promise.reject(k)
  }
  function Y() {
    return M && l.value !== St
      ? Promise.resolve()
      : new Promise((k, K) => {
          g.add([k, K])
        })
  }
  function re(k) {
    return M || ((M = !k), X(), g.list().forEach(([K, N]) => (k ? N(k) : K())), g.reset()), k
  }
  function ze(k, K, N, z) {
    const { scrollBehavior: le } = e
    if (!_n || !le) return Promise.resolve()
    const be = (!N && Ym(Ra(k.fullPath, 0))) || ((z || !N) && history.state && history.state.scroll) || null
    return Kt()
      .then(() => le(k, K, be))
      .then((se) => se && Qm(se))
      .catch((se) => te(se, k, K))
  }
  const Oe = (k) => s.go(k)
  let Ce
  const hn = new Set(),
    Cr = {
      currentRoute: l,
      listening: !0,
      addRoute: y,
      removeRoute: m,
      hasRoute: E,
      getRoutes: w,
      resolve: v,
      options: e,
      push: R,
      replace: O,
      go: Oe,
      back: () => Oe(-1),
      forward: () => Oe(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: S.add,
      isReady: Y,
      install(k) {
        const K = this
        k.component('RouterLink', Lg), k.component('RouterView', lu), (k.config.globalProperties.$router = K), Object.defineProperty(k.config.globalProperties, '$route', { enumerable: !0, get: () => ke(l) }), _n && !Ce && l.value === St && ((Ce = !0), R(s.location).catch((le) => {}))
        const N = {}
        for (const le in St) N[le] = je(() => l.value[le])
        k.provide(ho, K), k.provide(po, it(N)), k.provide(Di, l)
        const z = k.unmount
        hn.add(k),
          (k.unmount = function () {
            hn.delete(k), hn.size < 1 && ((c = St), U && U(), (U = null), (l.value = St), (Ce = !1), (M = !1)), z()
          })
      }
    }
  return Cr
}
function mn(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve())
}
function Ng(e, t) {
  const n = [],
    r = [],
    s = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < i; o++) {
    const a = t.matched[o]
    a && (e.matched.find((c) => In(c, a)) ? r.push(a) : n.push(a))
    const l = e.matched[o]
    l && (t.matched.find((c) => In(c, l)) || s.push(l))
  }
  return [n, r, s]
}
function Fg() {
  return Me(po)
}
const Be = { middleware: ['auth'] },
  Ua = [
    { name: 'about', path: '/about', meta: {}, alias: [], redirect: void 0, component: () => Q(() => import('./about.478553d8.js'), ['./about.478553d8.js', './user.5eed4219.js'], import.meta.url).then((e) => e.default || e) },
    { name: 'index', path: '/', meta: {}, alias: [], redirect: void 0, component: () => Q(() => import('./index.97dcddb8.js'), [], import.meta.url).then((e) => e.default || e) },
    { name: 'login', path: '/login', meta: {}, alias: [], redirect: void 0, component: () => Q(() => import('./login.2c64d385.js'), ['./login.2c64d385.js', './user.5eed4219.js'], import.meta.url).then((e) => e.default || e) },
    { name: (Be == null ? void 0 : Be.name) ?? 'posts-id', path: (Be == null ? void 0 : Be.path) ?? '/posts/:id', meta: Be || {}, alias: (Be == null ? void 0 : Be.alias) || [], redirect: (Be == null ? void 0 : Be.redirect) || void 0, component: () => Q(() => import('./_id_.570fb217.js'), ['./_id_.570fb217.js', './fetch.cb7ea18b.js', './index.9b013864.js'], import.meta.url).then((e) => e.default || e) },
    { name: 'posts', path: '/posts', meta: {}, alias: [], redirect: void 0, component: () => Q(() => import('./index.455f4b9b.js'), ['./index.455f4b9b.js', './nuxt-link.5a681159.js', './fetch.cb7ea18b.js', './index.9b013864.js'], import.meta.url).then((e) => e.default || e) },
    { name: 'posts-new', path: '/posts/new', meta: {}, alias: [], redirect: void 0, component: () => Q(() => import('./new.902d0617.js'), ['./new.902d0617.js', './user.5eed4219.js'], import.meta.url).then((e) => e.default || e) },
    { name: 'settings', path: '/settings', meta: {}, alias: [], redirect: void 0, component: () => Q(() => import('./settings.3a9a0dc4.js'), ['./settings.3a9a0dc4.js', './user.5eed4219.js'], import.meta.url).then((e) => e.default || e) },
    { name: 'signup', path: '/signup', meta: {}, alias: [], redirect: void 0, component: () => Q(() => import('./signup.a78190ef.js'), ['./signup.a78190ef.js', './user.5eed4219.js'], import.meta.url).then((e) => e.default || e) }
  ],
  Bg = {
    scrollBehavior(e, t, n) {
      const r = Pe()
      let s = n || void 0
      if ((!s && t && e && e.meta.scrollToTop !== !1 && Vg(t, e) && (s = { left: 0, top: 0 }), e.path === t.path)) {
        if (t.hash && !e.hash) return { left: 0, top: 0 }
        if (e.hash) return { el: e.hash, top: Ma(e.hash) }
      }
      const i = (a) => !!(a.meta.pageTransition ?? ji),
        o = i(t) && i(e) ? 'page:transition:finish' : 'page:finish'
      return new Promise((a) => {
        r.hooks.hookOnce(o, async () => {
          await Kt(), e.hash && (s = { el: e.hash, top: Ma(e.hash) }), a(s)
        })
      })
    }
  }
function Ma(e) {
  try {
    const t = document.querySelector(e)
    if (t) return parseFloat(getComputedStyle(t).scrollMarginTop)
  } catch {}
  return 0
}
function Vg(e, t) {
  const n = e.matched[0] === t.matched[0]
  return !!(!n || (n && JSON.stringify(e.params) !== JSON.stringify(t.params)))
}
const Kg = {},
  dt = { ...Kg, ...Bg },
  qg = pm(async (e) => {
    var l
    let t, n
    if (!((l = e.meta) != null && l.validate)) return
    const r = Pe(),
      s = Fn()
    if ((([t, n] = ns(() => Promise.resolve(e.meta.validate(e)))), (t = await t), n(), t) === !0) return
    const o = Qc({ statusCode: 404, statusMessage: `Page Not Found: ${e.fullPath}` }),
      a = s.beforeResolve((c) => {
        if ((a(), c === e)) {
          const u = s.afterEach(async () => {
            u(), await _t(r, vn, [o]), window.history.pushState({}, '', e.fullPath)
          })
          return !1
        }
      })
  }),
  Wg = [qg],
  or = { auth: () => Q(() => import('./auth.996c3287.js'), [], import.meta.url) }
function zg(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    i = e.indexOf('#')
  if (i > -1) {
    const a = s.includes(e.slice(i)) ? e.slice(i).length : 1
    let l = s.slice(a)
    return l[0] !== '/' && (l = '/' + l), ca(l, '')
  }
  return ca(n, e) + r + s
}
const Jg = Rt(async (e) => {
    var m, w
    let t,
      n,
      r = Tr().app.baseURL
    dt.hashMode && !r.includes('#') && (r += '#')
    const s = ((m = dt.history) == null ? void 0 : m.call(dt, r)) ?? (dt.hashMode ? ng(r) : Zc(r)),
      i = ((w = dt.routes) == null ? void 0 : w.call(dt, Ua)) ?? Ua,
      o = zg(r, window.location),
      a = Mg({ ...dt, history: s, routes: i })
    e.vueApp.use(a)
    const l = ai(a.currentRoute.value)
    a.afterEach((E, v) => {
      l.value = v
    }),
      Object.defineProperty(e.vueApp.config.globalProperties, 'previousRoute', { get: () => l.value })
    const c = ai(a.resolve(o)),
      u = () => {
        c.value = a.currentRoute.value
      }
    e.hook('page:finish', u),
      a.afterEach((E, v) => {
        var p, b, R, O
        ;((b = (p = E.matched[0]) == null ? void 0 : p.components) == null ? void 0 : b.default) === ((O = (R = v.matched[0]) == null ? void 0 : R.components) == null ? void 0 : O.default) && u()
      })
    const f = {}
    for (const E in c.value) f[E] = je(() => c.value[E])
    ;(e._route = it(f)), (e._middleware = e._middleware || { global: [], named: {} })
    const h = Ss()
    try {
      ;([t, n] = ns(() => a.isReady())), await t, n()
    } catch (E) {
      ;([t, n] = ns(() => _t(e, vn, [E]))), await t, n()
    }
    const y = Jc('_layout')
    return (
      a.beforeEach(async (E, v) => {
        var b
        ;(E.meta = it(E.meta)), e.isHydrating && y.value && !an(E.meta.layout) && (E.meta.layout = y.value), (e._processingMiddleware = !0)
        const p = new Set([...Wg, ...e._middleware.global])
        for (const R of E.matched) {
          const O = R.meta.middleware
          if (O)
            if (Array.isArray(O)) for (const j of O) p.add(j)
            else p.add(O)
        }
        for (const R of p) {
          const O = typeof R == 'string' ? e._middleware.named[R] || (await ((b = or[R]) == null ? void 0 : b.call(or).then((A) => A.default || A))) : R
          if (!O) throw new Error(`Unknown route middleware: '${R}'.`)
          const j = await _t(e, O, [E, v])
          if (!e.payload.serverRendered && e.isHydrating && (j === !1 || j instanceof Error)) {
            const A = j || xi({ statusCode: 404, statusMessage: `Page Not Found: ${o}` })
            return await _t(e, vn, [A]), !1
          }
          if (j || j === !1) return j
        }
      }),
      a.afterEach(async (E) => {
        delete e._processingMiddleware, !e.isHydrating && h.value && (await _t(e, gm)), E.matched.length === 0 && (await _t(e, vn, [xi({ statusCode: 404, fatal: !1, statusMessage: `Page not found: ${E.fullPath}` })]))
      }),
      e.hooks.hookOnce('app:created', async () => {
        try {
          await a.replace({ ...a.resolve(o), name: void 0, force: !0 })
        } catch (E) {
          await _t(e, vn, [E])
        }
      }),
      { provide: { router: a } }
    )
  }),
  bn = { default: () => Q(() => import('./default.73892043.js'), ['./default.73892043.js', './nuxt-link.5a681159.js'], import.meta.url).then((e) => e.default || e) },
  Gg = Rt(() => {
    const e = Pe(),
      t = Fn()
    e.hooks.hook('app:mounted', () => {
      t.beforeEach(async (n) => {
        var s
        const r = (s = n == null ? void 0 : n.meta) == null ? void 0 : s.layout
        r && typeof bn[r] == 'function' && (await bn[r]())
      })
    }),
      e.hooks.hook('link:prefetch', (n) => {
        var o, a, l, c
        if (wr(n)) return
        const r = t.resolve(n)
        if (!r) return
        const s = (o = r == null ? void 0 : r.meta) == null ? void 0 : o.layout
        let i = Array.isArray((a = r == null ? void 0 : r.meta) == null ? void 0 : a.middleware) ? ((l = r == null ? void 0 : r.meta) == null ? void 0 : l.middleware) : [(c = r == null ? void 0 : r.meta) == null ? void 0 : c.middleware]
        i = i.filter((u) => typeof u == 'string')
        for (const u of i) typeof or[u] == 'function' && or[u]()
        s && typeof bn[s] == 'function' && bn[s]()
      })
  })
var Qg =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i)
          })
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(u) {
        try {
          c(r.next(u))
        } catch (f) {
          o(f)
        }
      }
      function l(u) {
        try {
          c(r.throw(u))
        } catch (f) {
          o(f)
        }
      }
      function c(u) {
        u.done ? i(u.value) : s(u.value).then(a, l)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
const Xg = (e) => {
  let t
  return (
    e
      ? (t = e)
      : typeof fetch > 'u'
      ? (t = (...n) =>
          Qg(void 0, void 0, void 0, function* () {
            return yield (yield Q(() => Promise.resolve().then(() => As), void 0, import.meta.url)).fetch(...n)
          }))
      : (t = fetch),
    (...n) => t(...n)
  )
}
class mo extends Error {
  constructor(t, n = 'FunctionsError', r) {
    super(t), (super.name = n), (this.context = r)
  }
}
class Yg extends mo {
  constructor(t) {
    super('Failed to send a request to the Edge Function', 'FunctionsFetchError', t)
  }
}
class Zg extends mo {
  constructor(t) {
    super('Relay Error invoking the Edge Function', 'FunctionsRelayError', t)
  }
}
class e_ extends mo {
  constructor(t) {
    super('Edge Function returned a non-2xx status code', 'FunctionsHttpError', t)
  }
}
var t_ =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i)
          })
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(u) {
        try {
          c(r.next(u))
        } catch (f) {
          o(f)
        }
      }
      function l(u) {
        try {
          c(r.throw(u))
        } catch (f) {
          o(f)
        }
      }
      function c(u) {
        u.done ? i(u.value) : s(u.value).then(a, l)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
class n_ {
  constructor(t, { headers: n = {}, customFetch: r } = {}) {
    ;(this.url = t), (this.headers = n), (this.fetch = Xg(r))
  }
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`
  }
  invoke(t, n = {}) {
    var r
    return t_(this, void 0, void 0, function* () {
      try {
        const { headers: s, method: i, body: o } = n
        let a = {},
          l
        o && ((s && !Object.prototype.hasOwnProperty.call(s, 'Content-Type')) || !s) && ((typeof Blob < 'u' && o instanceof Blob) || o instanceof ArrayBuffer ? ((a['Content-Type'] = 'application/octet-stream'), (l = o)) : typeof o == 'string' ? ((a['Content-Type'] = 'text/plain'), (l = o)) : typeof FormData < 'u' && o instanceof FormData ? (l = o) : ((a['Content-Type'] = 'application/json'), (l = JSON.stringify(o))))
        const c = yield this.fetch(`${this.url}/${t}`, { method: i || 'POST', headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), s), body: l }).catch((y) => {
            throw new Yg(y)
          }),
          u = c.headers.get('x-relay-error')
        if (u && u === 'true') throw new Zg(c)
        if (!c.ok) throw new e_(c)
        let f = ((r = c.headers.get('Content-Type')) !== null && r !== void 0 ? r : 'text/plain').split(';')[0].trim(),
          h
        return f === 'application/json' ? (h = yield c.json()) : f === 'application/octet-stream' ? (h = yield c.blob()) : f === 'multipart/form-data' ? (h = yield c.formData()) : (h = yield c.text()), { data: h, error: null }
      } catch (s) {
        return { data: null, error: s }
      }
    })
  }
}
var r_ = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {}
function s_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
function vb(e) {
  if (e.__esModule) return e
  var t = e.default
  if (typeof t == 'function') {
    var n = function r() {
      if (this instanceof r) {
        var s = [null]
        s.push.apply(s, arguments)
        var i = Function.bind.apply(t, s)
        return new i()
      }
      return t.apply(this, arguments)
    }
    n.prototype = t.prototype
  } else n = {}
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var s = Object.getOwnPropertyDescriptor(e, r)
      Object.defineProperty(
        n,
        r,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return e[r]
              }
            }
      )
    }),
    n
  )
}
var Dn = {},
  i_ = {
    get exports() {
      return Dn
    },
    set exports(e) {
      Dn = e
    }
  }
;(function (e, t) {
  var n = typeof self < 'u' ? self : r_,
    r = (function () {
      function i() {
        ;(this.fetch = !1), (this.DOMException = n.DOMException)
      }
      return (i.prototype = n), new i()
    })()
  ;(function (i) {
    ;(function (o) {
      var a = {
        searchParams: 'URLSearchParams' in i,
        iterable: 'Symbol' in i && 'iterator' in Symbol,
        blob:
          'FileReader' in i &&
          'Blob' in i &&
          (function () {
            try {
              return new Blob(), !0
            } catch {
              return !1
            }
          })(),
        formData: 'FormData' in i,
        arrayBuffer: 'ArrayBuffer' in i
      }
      function l(g) {
        return g && DataView.prototype.isPrototypeOf(g)
      }
      if (a.arrayBuffer)
        var c = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'],
          u =
            ArrayBuffer.isView ||
            function (g) {
              return g && c.indexOf(Object.prototype.toString.call(g)) > -1
            }
      function f(g) {
        if ((typeof g != 'string' && (g = String(g)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(g))) throw new TypeError('Invalid character in header field name')
        return g.toLowerCase()
      }
      function h(g) {
        return typeof g != 'string' && (g = String(g)), g
      }
      function y(g) {
        var S = {
          next: function () {
            var M = g.shift()
            return { done: M === void 0, value: M }
          }
        }
        return (
          a.iterable &&
            (S[Symbol.iterator] = function () {
              return S
            }),
          S
        )
      }
      function m(g) {
        ;(this.map = {}),
          g instanceof m
            ? g.forEach(function (S, M) {
                this.append(M, S)
              }, this)
            : Array.isArray(g)
            ? g.forEach(function (S) {
                this.append(S[0], S[1])
              }, this)
            : g &&
              Object.getOwnPropertyNames(g).forEach(function (S) {
                this.append(S, g[S])
              }, this)
      }
      ;(m.prototype.append = function (g, S) {
        ;(g = f(g)), (S = h(S))
        var M = this.map[g]
        this.map[g] = M ? M + ', ' + S : S
      }),
        (m.prototype.delete = function (g) {
          delete this.map[f(g)]
        }),
        (m.prototype.get = function (g) {
          return (g = f(g)), this.has(g) ? this.map[g] : null
        }),
        (m.prototype.has = function (g) {
          return this.map.hasOwnProperty(f(g))
        }),
        (m.prototype.set = function (g, S) {
          this.map[f(g)] = h(S)
        }),
        (m.prototype.forEach = function (g, S) {
          for (var M in this.map) this.map.hasOwnProperty(M) && g.call(S, this.map[M], M, this)
        }),
        (m.prototype.keys = function () {
          var g = []
          return (
            this.forEach(function (S, M) {
              g.push(M)
            }),
            y(g)
          )
        }),
        (m.prototype.values = function () {
          var g = []
          return (
            this.forEach(function (S) {
              g.push(S)
            }),
            y(g)
          )
        }),
        (m.prototype.entries = function () {
          var g = []
          return (
            this.forEach(function (S, M) {
              g.push([M, S])
            }),
            y(g)
          )
        }),
        a.iterable && (m.prototype[Symbol.iterator] = m.prototype.entries)
      function w(g) {
        if (g.bodyUsed) return Promise.reject(new TypeError('Already read'))
        g.bodyUsed = !0
      }
      function E(g) {
        return new Promise(function (S, M) {
          ;(g.onload = function () {
            S(g.result)
          }),
            (g.onerror = function () {
              M(g.error)
            })
        })
      }
      function v(g) {
        var S = new FileReader(),
          M = E(S)
        return S.readAsArrayBuffer(g), M
      }
      function p(g) {
        var S = new FileReader(),
          M = E(S)
        return S.readAsText(g), M
      }
      function b(g) {
        for (var S = new Uint8Array(g), M = new Array(S.length), te = 0; te < S.length; te++) M[te] = String.fromCharCode(S[te])
        return M.join('')
      }
      function R(g) {
        if (g.slice) return g.slice(0)
        var S = new Uint8Array(g.byteLength)
        return S.set(new Uint8Array(g)), S.buffer
      }
      function O() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (g) {
            ;(this._bodyInit = g),
              g
                ? typeof g == 'string'
                  ? (this._bodyText = g)
                  : a.blob && Blob.prototype.isPrototypeOf(g)
                  ? (this._bodyBlob = g)
                  : a.formData && FormData.prototype.isPrototypeOf(g)
                  ? (this._bodyFormData = g)
                  : a.searchParams && URLSearchParams.prototype.isPrototypeOf(g)
                  ? (this._bodyText = g.toString())
                  : a.arrayBuffer && a.blob && l(g)
                  ? ((this._bodyArrayBuffer = R(g.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(g) || u(g))
                  ? (this._bodyArrayBuffer = R(g))
                  : (this._bodyText = g = Object.prototype.toString.call(g))
                : (this._bodyText = ''),
              this.headers.get('content-type') || (typeof g == 'string' ? this.headers.set('content-type', 'text/plain;charset=UTF-8') : this._bodyBlob && this._bodyBlob.type ? this.headers.set('content-type', this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(g) && this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'))
          }),
          a.blob &&
            ((this.blob = function () {
              var g = w(this)
              if (g) return g
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
              if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]))
              if (this._bodyFormData) throw new Error('could not read FormData body as blob')
              return Promise.resolve(new Blob([this._bodyText]))
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer ? w(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(v)
            })),
          (this.text = function () {
            var g = w(this)
            if (g) return g
            if (this._bodyBlob) return p(this._bodyBlob)
            if (this._bodyArrayBuffer) return Promise.resolve(b(this._bodyArrayBuffer))
            if (this._bodyFormData) throw new Error('could not read FormData body as text')
            return Promise.resolve(this._bodyText)
          }),
          a.formData &&
            (this.formData = function () {
              return this.text().then(D)
            }),
          (this.json = function () {
            return this.text().then(JSON.parse)
          }),
          this
        )
      }
      var j = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
      function A(g) {
        var S = g.toUpperCase()
        return j.indexOf(S) > -1 ? S : g
      }
      function T(g, S) {
        S = S || {}
        var M = S.body
        if (g instanceof T) {
          if (g.bodyUsed) throw new TypeError('Already read')
          ;(this.url = g.url), (this.credentials = g.credentials), S.headers || (this.headers = new m(g.headers)), (this.method = g.method), (this.mode = g.mode), (this.signal = g.signal), !M && g._bodyInit != null && ((M = g._bodyInit), (g.bodyUsed = !0))
        } else this.url = String(g)
        if (((this.credentials = S.credentials || this.credentials || 'same-origin'), (S.headers || !this.headers) && (this.headers = new m(S.headers)), (this.method = A(S.method || this.method || 'GET')), (this.mode = S.mode || this.mode || null), (this.signal = S.signal || this.signal), (this.referrer = null), (this.method === 'GET' || this.method === 'HEAD') && M)) throw new TypeError('Body not allowed for GET or HEAD requests')
        this._initBody(M)
      }
      T.prototype.clone = function () {
        return new T(this, { body: this._bodyInit })
      }
      function D(g) {
        var S = new FormData()
        return (
          g
            .trim()
            .split('&')
            .forEach(function (M) {
              if (M) {
                var te = M.split('='),
                  Y = te.shift().replace(/\+/g, ' '),
                  re = te.join('=').replace(/\+/g, ' ')
                S.append(decodeURIComponent(Y), decodeURIComponent(re))
              }
            }),
          S
        )
      }
      function F(g) {
        var S = new m(),
          M = g.replace(/\r?\n[\t ]+/g, ' ')
        return (
          M.split(/\r?\n/).forEach(function (te) {
            var Y = te.split(':'),
              re = Y.shift().trim()
            if (re) {
              var ze = Y.join(':').trim()
              S.append(re, ze)
            }
          }),
          S
        )
      }
      O.call(T.prototype)
      function B(g, S) {
        S || (S = {}), (this.type = 'default'), (this.status = S.status === void 0 ? 200 : S.status), (this.ok = this.status >= 200 && this.status < 300), (this.statusText = 'statusText' in S ? S.statusText : 'OK'), (this.headers = new m(S.headers)), (this.url = S.url || ''), this._initBody(g)
      }
      O.call(B.prototype),
        (B.prototype.clone = function () {
          return new B(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new m(this.headers), url: this.url })
        }),
        (B.error = function () {
          var g = new B(null, { status: 0, statusText: '' })
          return (g.type = 'error'), g
        })
      var U = [301, 302, 303, 307, 308]
      ;(B.redirect = function (g, S) {
        if (U.indexOf(S) === -1) throw new RangeError('Invalid status code')
        return new B(null, { status: S, headers: { location: g } })
      }),
        (o.DOMException = i.DOMException)
      try {
        new o.DOMException()
      } catch {
        ;(o.DOMException = function (S, M) {
          ;(this.message = S), (this.name = M)
          var te = Error(S)
          this.stack = te.stack
        }),
          (o.DOMException.prototype = Object.create(Error.prototype)),
          (o.DOMException.prototype.constructor = o.DOMException)
      }
      function X(g, S) {
        return new Promise(function (M, te) {
          var Y = new T(g, S)
          if (Y.signal && Y.signal.aborted) return te(new o.DOMException('Aborted', 'AbortError'))
          var re = new XMLHttpRequest()
          function ze() {
            re.abort()
          }
          ;(re.onload = function () {
            var Oe = { status: re.status, statusText: re.statusText, headers: F(re.getAllResponseHeaders() || '') }
            Oe.url = 'responseURL' in re ? re.responseURL : Oe.headers.get('X-Request-URL')
            var Ce = 'response' in re ? re.response : re.responseText
            M(new B(Ce, Oe))
          }),
            (re.onerror = function () {
              te(new TypeError('Network request failed'))
            }),
            (re.ontimeout = function () {
              te(new TypeError('Network request failed'))
            }),
            (re.onabort = function () {
              te(new o.DOMException('Aborted', 'AbortError'))
            }),
            re.open(Y.method, Y.url, !0),
            Y.credentials === 'include' ? (re.withCredentials = !0) : Y.credentials === 'omit' && (re.withCredentials = !1),
            'responseType' in re && a.blob && (re.responseType = 'blob'),
            Y.headers.forEach(function (Oe, Ce) {
              re.setRequestHeader(Ce, Oe)
            }),
            Y.signal &&
              (Y.signal.addEventListener('abort', ze),
              (re.onreadystatechange = function () {
                re.readyState === 4 && Y.signal.removeEventListener('abort', ze)
              })),
            re.send(typeof Y._bodyInit > 'u' ? null : Y._bodyInit)
        })
      }
      return (X.polyfill = !0), i.fetch || ((i.fetch = X), (i.Headers = m), (i.Request = T), (i.Response = B)), (o.Headers = m), (o.Request = T), (o.Response = B), (o.fetch = X), Object.defineProperty(o, '__esModule', { value: !0 }), o
    })({})
  })(r),
    (r.fetch.ponyfill = !0),
    delete r.fetch.polyfill
  var s = r
  ;(t = s.fetch), (t.default = s.fetch), (t.fetch = s.fetch), (t.Headers = s.Headers), (t.Request = s.Request), (t.Response = s.Response), (e.exports = t)
})(i_, Dn)
const go = s_(Dn),
  As = vu({ __proto__: null, default: go }, [Dn])
class o_ {
  constructor(t) {
    ;(this.shouldThrowOnError = !1), (this.method = t.method), (this.url = t.url), (this.headers = t.headers), (this.schema = t.schema), (this.body = t.body), (this.shouldThrowOnError = t.shouldThrowOnError), (this.signal = t.signal), (this.allowEmpty = t.allowEmpty), t.fetch ? (this.fetch = t.fetch) : typeof fetch > 'u' ? (this.fetch = go) : (this.fetch = fetch)
  }
  throwOnError() {
    return (this.shouldThrowOnError = !0), this
  }
  then(t, n) {
    this.schema === void 0 || (['GET', 'HEAD'].includes(this.method) ? (this.headers['Accept-Profile'] = this.schema) : (this.headers['Content-Profile'] = this.schema)), this.method !== 'GET' && this.method !== 'HEAD' && (this.headers['Content-Type'] = 'application/json')
    const r = this.fetch
    let s = r(this.url.toString(), { method: this.method, headers: this.headers, body: JSON.stringify(this.body), signal: this.signal }).then(async (i) => {
      var o, a, l
      let c = null,
        u = null,
        f = null,
        h = i.status,
        y = i.statusText
      if (i.ok) {
        if (this.method !== 'HEAD') {
          const v = await i.text()
          v === '' || (this.headers.Accept === 'text/csv' || (this.headers.Accept && this.headers.Accept.includes('application/vnd.pgrst.plan+text')) ? (u = v) : (u = JSON.parse(v)))
        }
        const w = (o = this.headers.Prefer) === null || o === void 0 ? void 0 : o.match(/count=(exact|planned|estimated)/),
          E = (a = i.headers.get('content-range')) === null || a === void 0 ? void 0 : a.split('/')
        w && E && E.length > 1 && (f = parseInt(E[1]))
      } else {
        const w = await i.text()
        try {
          ;(c = JSON.parse(w)), Array.isArray(c) && i.status === 404 && ((u = []), (c = null), (h = 200), (y = 'OK'))
        } catch {
          i.status === 404 && w === '' ? ((h = 204), (y = 'No Content')) : (c = { message: w })
        }
        if ((c && this.allowEmpty && !((l = c == null ? void 0 : c.details) === null || l === void 0) && l.includes('Results contain 0 rows') && ((c = null), (h = 200), (y = 'OK')), c && this.shouldThrowOnError)) throw c
      }
      return { error: c, data: u, count: f, status: h, statusText: y }
    })
    return this.shouldThrowOnError || (s = s.catch((i) => ({ error: { message: `FetchError: ${i.message}`, details: '', hint: '', code: i.code || '' }, data: null, count: null, status: 0, statusText: '' }))), s.then(t, n)
  }
}
class a_ extends o_ {
  select(t) {
    let n = !1
    const r = (t ?? '*')
      .split('')
      .map((s) => (/\s/.test(s) && !n ? '' : (s === '"' && (n = !n), s)))
      .join('')
    return this.url.searchParams.set('select', r), this.headers.Prefer && (this.headers.Prefer += ','), (this.headers.Prefer += 'return=representation'), this
  }
  order(t, { ascending: n = !0, nullsFirst: r, foreignTable: s } = {}) {
    const i = s ? `${s}.order` : 'order',
      o = this.url.searchParams.get(i)
    return this.url.searchParams.set(i, `${o ? `${o},` : ''}${t}.${n ? 'asc' : 'desc'}${r === void 0 ? '' : r ? '.nullsfirst' : '.nullslast'}`), this
  }
  limit(t, { foreignTable: n } = {}) {
    const r = typeof n > 'u' ? 'limit' : `${n}.limit`
    return this.url.searchParams.set(r, `${t}`), this
  }
  range(t, n, { foreignTable: r } = {}) {
    const s = typeof r > 'u' ? 'offset' : `${r}.offset`,
      i = typeof r > 'u' ? 'limit' : `${r}.limit`
    return this.url.searchParams.set(s, `${t}`), this.url.searchParams.set(i, `${n - t + 1}`), this
  }
  abortSignal(t) {
    return (this.signal = t), this
  }
  single() {
    return (this.headers.Accept = 'application/vnd.pgrst.object+json'), this
  }
  maybeSingle() {
    return (this.headers.Accept = 'application/vnd.pgrst.object+json'), (this.allowEmpty = !0), this
  }
  csv() {
    return (this.headers.Accept = 'text/csv'), this
  }
  geojson() {
    return (this.headers.Accept = 'application/geo+json'), this
  }
  explain({ analyze: t = !1, verbose: n = !1, settings: r = !1, buffers: s = !1, wal: i = !1, format: o = 'text' } = {}) {
    const a = [t ? 'analyze' : null, n ? 'verbose' : null, r ? 'settings' : null, s ? 'buffers' : null, i ? 'wal' : null].filter(Boolean).join('|'),
      l = this.headers.Accept
    return (this.headers.Accept = `application/vnd.pgrst.plan+${o}; for="${l}"; options=${a};`), o === 'json' ? this : this
  }
  rollback() {
    var t
    return ((t = this.headers.Prefer) !== null && t !== void 0 ? t : '').trim().length > 0 ? (this.headers.Prefer += ',tx=rollback') : (this.headers.Prefer = 'tx=rollback'), this
  }
  returns() {
    return this
  }
}
class yn extends a_ {
  eq(t, n) {
    return this.url.searchParams.append(t, `eq.${n}`), this
  }
  neq(t, n) {
    return this.url.searchParams.append(t, `neq.${n}`), this
  }
  gt(t, n) {
    return this.url.searchParams.append(t, `gt.${n}`), this
  }
  gte(t, n) {
    return this.url.searchParams.append(t, `gte.${n}`), this
  }
  lt(t, n) {
    return this.url.searchParams.append(t, `lt.${n}`), this
  }
  lte(t, n) {
    return this.url.searchParams.append(t, `lte.${n}`), this
  }
  like(t, n) {
    return this.url.searchParams.append(t, `like.${n}`), this
  }
  ilike(t, n) {
    return this.url.searchParams.append(t, `ilike.${n}`), this
  }
  is(t, n) {
    return this.url.searchParams.append(t, `is.${n}`), this
  }
  in(t, n) {
    const r = n.map((s) => (typeof s == 'string' && new RegExp('[,()]').test(s) ? `"${s}"` : `${s}`)).join(',')
    return this.url.searchParams.append(t, `in.(${r})`), this
  }
  contains(t, n) {
    return typeof n == 'string' ? this.url.searchParams.append(t, `cs.${n}`) : Array.isArray(n) ? this.url.searchParams.append(t, `cs.{${n.join(',')}}`) : this.url.searchParams.append(t, `cs.${JSON.stringify(n)}`), this
  }
  containedBy(t, n) {
    return typeof n == 'string' ? this.url.searchParams.append(t, `cd.${n}`) : Array.isArray(n) ? this.url.searchParams.append(t, `cd.{${n.join(',')}}`) : this.url.searchParams.append(t, `cd.${JSON.stringify(n)}`), this
  }
  rangeGt(t, n) {
    return this.url.searchParams.append(t, `sr.${n}`), this
  }
  rangeGte(t, n) {
    return this.url.searchParams.append(t, `nxl.${n}`), this
  }
  rangeLt(t, n) {
    return this.url.searchParams.append(t, `sl.${n}`), this
  }
  rangeLte(t, n) {
    return this.url.searchParams.append(t, `nxr.${n}`), this
  }
  rangeAdjacent(t, n) {
    return this.url.searchParams.append(t, `adj.${n}`), this
  }
  overlaps(t, n) {
    return typeof n == 'string' ? this.url.searchParams.append(t, `ov.${n}`) : this.url.searchParams.append(t, `ov.{${n.join(',')}}`), this
  }
  textSearch(t, n, { config: r, type: s } = {}) {
    let i = ''
    s === 'plain' ? (i = 'pl') : s === 'phrase' ? (i = 'ph') : s === 'websearch' && (i = 'w')
    const o = r === void 0 ? '' : `(${r})`
    return this.url.searchParams.append(t, `${i}fts${o}.${n}`), this
  }
  match(t) {
    return (
      Object.entries(t).forEach(([n, r]) => {
        this.url.searchParams.append(n, `eq.${r}`)
      }),
      this
    )
  }
  not(t, n, r) {
    return this.url.searchParams.append(t, `not.${n}.${r}`), this
  }
  or(t, { foreignTable: n } = {}) {
    const r = n ? `${n}.or` : 'or'
    return this.url.searchParams.append(r, `(${t})`), this
  }
  filter(t, n, r) {
    return this.url.searchParams.append(t, `${n}.${r}`), this
  }
}
class l_ {
  constructor(t, { headers: n = {}, schema: r, fetch: s }) {
    ;(this.url = t), (this.headers = n), (this.schema = r), (this.fetch = s)
  }
  select(t, { head: n = !1, count: r } = {}) {
    const s = n ? 'HEAD' : 'GET'
    let i = !1
    const o = (t ?? '*')
      .split('')
      .map((a) => (/\s/.test(a) && !i ? '' : (a === '"' && (i = !i), a)))
      .join('')
    return this.url.searchParams.set('select', o), r && (this.headers.Prefer = `count=${r}`), new yn({ method: s, url: this.url, headers: this.headers, schema: this.schema, fetch: this.fetch, allowEmpty: !1 })
  }
  insert(t, { count: n } = {}) {
    const r = 'POST',
      s = [],
      i = t
    if ((n && s.push(`count=${n}`), this.headers.Prefer && s.unshift(this.headers.Prefer), (this.headers.Prefer = s.join(',')), Array.isArray(t))) {
      const o = t.reduce((a, l) => a.concat(Object.keys(l)), [])
      if (o.length > 0) {
        const a = [...new Set(o)].map((l) => `"${l}"`)
        this.url.searchParams.set('columns', a.join(','))
      }
    }
    return new yn({ method: r, url: this.url, headers: this.headers, schema: this.schema, body: i, fetch: this.fetch, allowEmpty: !1 })
  }
  upsert(t, { onConflict: n, ignoreDuplicates: r = !1, count: s } = {}) {
    const i = 'POST',
      o = [`resolution=${r ? 'ignore' : 'merge'}-duplicates`]
    n !== void 0 && this.url.searchParams.set('on_conflict', n)
    const a = t
    return s && o.push(`count=${s}`), this.headers.Prefer && o.unshift(this.headers.Prefer), (this.headers.Prefer = o.join(',')), new yn({ method: i, url: this.url, headers: this.headers, schema: this.schema, body: a, fetch: this.fetch, allowEmpty: !1 })
  }
  update(t, { count: n } = {}) {
    const r = 'PATCH',
      s = [],
      i = t
    return n && s.push(`count=${n}`), this.headers.Prefer && s.unshift(this.headers.Prefer), (this.headers.Prefer = s.join(',')), new yn({ method: r, url: this.url, headers: this.headers, schema: this.schema, body: i, fetch: this.fetch, allowEmpty: !1 })
  }
  delete({ count: t } = {}) {
    const n = 'DELETE',
      r = []
    return t && r.push(`count=${t}`), this.headers.Prefer && r.unshift(this.headers.Prefer), (this.headers.Prefer = r.join(',')), new yn({ method: n, url: this.url, headers: this.headers, schema: this.schema, fetch: this.fetch, allowEmpty: !1 })
  }
}
const c_ = '1.5.0',
  u_ = { 'X-Client-Info': `postgrest-js/${c_}` }
class f_ {
  constructor(t, { headers: n = {}, schema: r, fetch: s } = {}) {
    ;(this.url = t), (this.headers = Object.assign(Object.assign({}, u_), n)), (this.schema = r), (this.fetch = s)
  }
  from(t) {
    const n = new URL(`${this.url}/${t}`)
    return new l_(n, { headers: Object.assign({}, this.headers), schema: this.schema, fetch: this.fetch })
  }
  rpc(t, n = {}, { head: r = !1, count: s } = {}) {
    let i
    const o = new URL(`${this.url}/rpc/${t}`)
    let a
    r
      ? ((i = 'HEAD'),
        Object.entries(n).forEach(([c, u]) => {
          o.searchParams.append(c, `${u}`)
        }))
      : ((i = 'POST'), (a = n))
    const l = Object.assign({}, this.headers)
    return s && (l.Prefer = `count=${s}`), new yn({ method: i, url: o, headers: l, schema: this.schema, body: a, fetch: this.fetch, allowEmpty: !1 })
  }
}
var Qs, Na
function h_() {
  if (Na) return Qs
  Na = 1
  var e = function () {
    if (typeof self == 'object' && self) return self
    if (typeof window == 'object' && window) return window
    throw new Error('Unable to resolve global `this`')
  }
  return (
    (Qs = (function () {
      if (this) return this
      if (typeof globalThis == 'object' && globalThis) return globalThis
      try {
        Object.defineProperty(Object.prototype, '__global__', {
          get: function () {
            return this
          },
          configurable: !0
        })
      } catch {
        return e()
      }
      try {
        return __global__ || e()
      } finally {
        delete Object.prototype.__global__
      }
    })()),
    Qs
  )
}
const d_ = 'websocket',
  p_ = 'Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.',
  m_ = ['websocket', 'websockets', 'socket', 'networking', 'comet', 'push', 'RFC-6455', 'realtime', 'server', 'client'],
  g_ = 'Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)',
  __ = ['Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)'],
  y_ = '1.0.34',
  v_ = { type: 'git', url: 'https://github.com/theturtle32/WebSocket-Node.git' },
  b_ = 'https://github.com/theturtle32/WebSocket-Node',
  w_ = { node: '>=4.0.0' },
  E_ = { bufferutil: '^4.0.1', debug: '^2.2.0', 'es5-ext': '^0.10.50', 'typedarray-to-buffer': '^3.1.5', 'utf-8-validate': '^5.0.2', yaeti: '^0.0.6' },
  T_ = { 'buffer-equal': '^1.0.0', gulp: '^4.0.2', 'gulp-jshint': '^2.0.4', 'jshint-stylish': '^2.2.1', jshint: '^2.0.0', tape: '^4.9.1' },
  R_ = { verbose: !1 },
  C_ = { test: 'tape test/unit/*.js', gulp: 'gulp' },
  P_ = 'index',
  O_ = { lib: './lib' },
  S_ = 'lib/browser.js',
  k_ = 'Apache-2.0',
  A_ = { name: d_, description: p_, keywords: m_, author: g_, contributors: __, version: y_, repository: v_, homepage: b_, engines: w_, dependencies: E_, devDependencies: T_, config: R_, scripts: C_, main: P_, directories: O_, browser: S_, license: k_ }
var x_ = A_.version,
  Yt
if (typeof globalThis == 'object') Yt = globalThis
else
  try {
    Yt = h_()
  } catch {
  } finally {
    if ((!Yt && typeof window < 'u' && (Yt = window), !Yt)) throw new Error('Could not determine global this')
  }
var _r = Yt.WebSocket || Yt.MozWebSocket,
  $_ = x_
function cu(e, t) {
  var n
  return t ? (n = new _r(e, t)) : (n = new _r(e)), n
}
_r &&
  ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function (e) {
    Object.defineProperty(cu, e, {
      get: function () {
        return _r[e]
      }
    })
  })
var j_ = { w3cwebsocket: _r ? cu : null, version: $_ }
const I_ = '2.7.1',
  L_ = { 'X-Client-Info': `realtime-js/${I_}` },
  D_ = '1.0.0',
  uu = 1e4,
  H_ = 1e3
var ar
;(function (e) {
  ;(e[(e.connecting = 0)] = 'connecting'), (e[(e.open = 1)] = 'open'), (e[(e.closing = 2)] = 'closing'), (e[(e.closed = 3)] = 'closed')
})(ar || (ar = {}))
var Ve
;(function (e) {
  ;(e.closed = 'closed'), (e.errored = 'errored'), (e.joined = 'joined'), (e.joining = 'joining'), (e.leaving = 'leaving')
})(Ve || (Ve = {}))
var et
;(function (e) {
  ;(e.close = 'phx_close'), (e.error = 'phx_error'), (e.join = 'phx_join'), (e.reply = 'phx_reply'), (e.leave = 'phx_leave'), (e.access_token = 'access_token')
})(et || (et = {}))
var Hi
;(function (e) {
  e.websocket = 'websocket'
})(Hi || (Hi = {}))
var Zt
;(function (e) {
  ;(e.Connecting = 'connecting'), (e.Open = 'open'), (e.Closing = 'closing'), (e.Closed = 'closed')
})(Zt || (Zt = {}))
class fu {
  constructor(t, n) {
    ;(this.callback = t), (this.timerCalc = n), (this.timer = void 0), (this.tries = 0), (this.callback = t), (this.timerCalc = n)
  }
  reset() {
    ;(this.tries = 0), clearTimeout(this.timer)
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(() => {
        ;(this.tries = this.tries + 1), this.callback()
      }, this.timerCalc(this.tries + 1)))
  }
}
class U_ {
  constructor() {
    this.HEADER_LENGTH = 1
  }
  decode(t, n) {
    return t.constructor === ArrayBuffer ? n(this._binaryDecode(t)) : n(typeof t == 'string' ? JSON.parse(t) : {})
  }
  _binaryDecode(t) {
    const n = new DataView(t),
      r = new TextDecoder()
    return this._decodeBroadcast(t, n, r)
  }
  _decodeBroadcast(t, n, r) {
    const s = n.getUint8(1),
      i = n.getUint8(2)
    let o = this.HEADER_LENGTH + 2
    const a = r.decode(t.slice(o, o + s))
    o = o + s
    const l = r.decode(t.slice(o, o + i))
    o = o + i
    const c = JSON.parse(r.decode(t.slice(o, t.byteLength)))
    return { ref: null, topic: a, event: l, payload: c }
  }
}
class Xs {
  constructor(t, n, r = {}, s = uu) {
    ;(this.channel = t), (this.event = n), (this.payload = r), (this.timeout = s), (this.sent = !1), (this.timeoutTimer = void 0), (this.ref = ''), (this.receivedResp = null), (this.recHooks = []), (this.refEvent = null), (this.rateLimited = !1)
  }
  resend(t) {
    ;(this.timeout = t), this._cancelRefEvent(), (this.ref = ''), (this.refEvent = null), (this.receivedResp = null), (this.sent = !1), this.send()
  }
  send() {
    if (this._hasReceived('timeout')) return
    this.startTimeout(), (this.sent = !0), this.channel.socket.push({ topic: this.channel.topic, event: this.event, payload: this.payload, ref: this.ref, join_ref: this.channel._joinRef() }) === 'rate limited' && (this.rateLimited = !0)
  }
  updatePayload(t) {
    this.payload = Object.assign(Object.assign({}, this.payload), t)
  }
  receive(t, n) {
    var r
    return this._hasReceived(t) && n((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response), this.recHooks.push({ status: t, callback: n }), this
  }
  startTimeout() {
    if (this.timeoutTimer) return
    ;(this.ref = this.channel.socket._makeRef()), (this.refEvent = this.channel._replyEventName(this.ref))
    const t = (n) => {
      this._cancelRefEvent(), this._cancelTimeout(), (this.receivedResp = n), this._matchReceive(n)
    }
    this.channel._on(this.refEvent, {}, t),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger('timeout', {})
      }, this.timeout))
  }
  trigger(t, n) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: t, response: n })
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout()
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {})
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0)
  }
  _matchReceive({ status: t, response: n }) {
    this.recHooks.filter((r) => r.status === t).forEach((r) => r.callback(n))
  }
  _hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t
  }
}
var Fa
;(function (e) {
  ;(e.SYNC = 'sync'), (e.JOIN = 'join'), (e.LEAVE = 'leave')
})(Fa || (Fa = {}))
class lr {
  constructor(t, n) {
    ;(this.channel = t), (this.state = {}), (this.pendingDiffs = []), (this.joinRef = null), (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} })
    const r = (n == null ? void 0 : n.events) || { state: 'presence_state', diff: 'presence_diff' }
    this.channel._on(r.state, {}, (s) => {
      const { onJoin: i, onLeave: o, onSync: a } = this.caller
      ;(this.joinRef = this.channel._joinRef()),
        (this.state = lr.syncState(this.state, s, i, o)),
        this.pendingDiffs.forEach((l) => {
          this.state = lr.syncDiff(this.state, l, i, o)
        }),
        (this.pendingDiffs = []),
        a()
    }),
      this.channel._on(r.diff, {}, (s) => {
        const { onJoin: i, onLeave: o, onSync: a } = this.caller
        this.inPendingSyncState() ? this.pendingDiffs.push(s) : ((this.state = lr.syncDiff(this.state, s, i, o)), a())
      }),
      this.onJoin((s, i, o) => {
        this.channel._trigger('presence', { event: 'join', key: s, currentPresences: i, newPresences: o })
      }),
      this.onLeave((s, i, o) => {
        this.channel._trigger('presence', { event: 'leave', key: s, currentPresences: i, leftPresences: o })
      }),
      this.onSync(() => {
        this.channel._trigger('presence', { event: 'sync' })
      })
  }
  static syncState(t, n, r, s) {
    const i = this.cloneDeep(t),
      o = this.transformState(n),
      a = {},
      l = {}
    return (
      this.map(i, (c, u) => {
        o[c] || (l[c] = u)
      }),
      this.map(o, (c, u) => {
        const f = i[c]
        if (f) {
          const h = u.map((E) => E.presence_ref),
            y = f.map((E) => E.presence_ref),
            m = u.filter((E) => y.indexOf(E.presence_ref) < 0),
            w = f.filter((E) => h.indexOf(E.presence_ref) < 0)
          m.length > 0 && (a[c] = m), w.length > 0 && (l[c] = w)
        } else a[c] = u
      }),
      this.syncDiff(i, { joins: a, leaves: l }, r, s)
    )
  }
  static syncDiff(t, n, r, s) {
    const { joins: i, leaves: o } = { joins: this.transformState(n.joins), leaves: this.transformState(n.leaves) }
    return (
      r || (r = () => {}),
      s || (s = () => {}),
      this.map(i, (a, l) => {
        var c
        const u = (c = t[a]) !== null && c !== void 0 ? c : []
        if (((t[a] = this.cloneDeep(l)), u.length > 0)) {
          const f = t[a].map((y) => y.presence_ref),
            h = u.filter((y) => f.indexOf(y.presence_ref) < 0)
          t[a].unshift(...h)
        }
        r(a, u, l)
      }),
      this.map(o, (a, l) => {
        let c = t[a]
        if (!c) return
        const u = l.map((f) => f.presence_ref)
        ;(c = c.filter((f) => u.indexOf(f.presence_ref) < 0)), (t[a] = c), s(a, c, l), c.length === 0 && delete t[a]
      }),
      t
    )
  }
  static map(t, n) {
    return Object.getOwnPropertyNames(t).map((r) => n(r, t[r]))
  }
  static transformState(t) {
    return (
      (t = this.cloneDeep(t)),
      Object.getOwnPropertyNames(t).reduce((n, r) => {
        const s = t[r]
        return 'metas' in s ? (n[r] = s.metas.map((i) => ((i.presence_ref = i.phx_ref), delete i.phx_ref, delete i.phx_ref_prev, i))) : (n[r] = s), n
      }, {})
    )
  }
  static cloneDeep(t) {
    return JSON.parse(JSON.stringify(t))
  }
  onJoin(t) {
    this.caller.onJoin = t
  }
  onLeave(t) {
    this.caller.onLeave = t
  }
  onSync(t) {
    this.caller.onSync = t
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef()
  }
}
var _e
;(function (e) {
  ;(e.abstime = 'abstime'), (e.bool = 'bool'), (e.date = 'date'), (e.daterange = 'daterange'), (e.float4 = 'float4'), (e.float8 = 'float8'), (e.int2 = 'int2'), (e.int4 = 'int4'), (e.int4range = 'int4range'), (e.int8 = 'int8'), (e.int8range = 'int8range'), (e.json = 'json'), (e.jsonb = 'jsonb'), (e.money = 'money'), (e.numeric = 'numeric'), (e.oid = 'oid'), (e.reltime = 'reltime'), (e.text = 'text'), (e.time = 'time'), (e.timestamp = 'timestamp'), (e.timestamptz = 'timestamptz'), (e.timetz = 'timetz'), (e.tsrange = 'tsrange'), (e.tstzrange = 'tstzrange')
})(_e || (_e = {}))
const Ba = (e, t, n = {}) => {
    var r
    const s = (r = n.skipTypes) !== null && r !== void 0 ? r : []
    return Object.keys(t).reduce((i, o) => ((i[o] = M_(o, e, t, s)), i), {})
  },
  M_ = (e, t, n, r) => {
    const s = t.find((a) => a.name === e),
      i = s == null ? void 0 : s.type,
      o = n[e]
    return i && !r.includes(i) ? hu(i, o) : Ui(o)
  },
  hu = (e, t) => {
    if (e.charAt(0) === '_') {
      const n = e.slice(1, e.length)
      return V_(t, n)
    }
    switch (e) {
      case _e.bool:
        return N_(t)
      case _e.float4:
      case _e.float8:
      case _e.int2:
      case _e.int4:
      case _e.int8:
      case _e.numeric:
      case _e.oid:
        return F_(t)
      case _e.json:
      case _e.jsonb:
        return B_(t)
      case _e.timestamp:
        return K_(t)
      case _e.abstime:
      case _e.date:
      case _e.daterange:
      case _e.int4range:
      case _e.int8range:
      case _e.money:
      case _e.reltime:
      case _e.text:
      case _e.time:
      case _e.timestamptz:
      case _e.timetz:
      case _e.tsrange:
      case _e.tstzrange:
        return Ui(t)
      default:
        return Ui(t)
    }
  },
  Ui = (e) => e,
  N_ = (e) => {
    switch (e) {
      case 't':
        return !0
      case 'f':
        return !1
      default:
        return e
    }
  },
  F_ = (e) => {
    if (typeof e == 'string') {
      const t = parseFloat(e)
      if (!Number.isNaN(t)) return t
    }
    return e
  },
  B_ = (e) => {
    if (typeof e == 'string')
      try {
        return JSON.parse(e)
      } catch (t) {
        return console.log(`JSON parse error: ${t}`), e
      }
    return e
  },
  V_ = (e, t) => {
    if (typeof e != 'string') return e
    const n = e.length - 1,
      r = e[n]
    if (e[0] === '{' && r === '}') {
      let i
      const o = e.slice(1, n)
      try {
        i = JSON.parse('[' + o + ']')
      } catch {
        i = o ? o.split(',') : []
      }
      return i.map((a) => hu(t, a))
    }
    return e
  },
  K_ = (e) => (typeof e == 'string' ? e.replace(' ', 'T') : e)
var Va =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, n, r) {
      function s(i) {
        return i instanceof n
          ? i
          : new n(function (o) {
              o(i)
            })
      }
      return new (n || (n = Promise))(function (i, o) {
        function a(u) {
          try {
            c(r.next(u))
          } catch (f) {
            o(f)
          }
        }
        function l(u) {
          try {
            c(r.throw(u))
          } catch (f) {
            o(f)
          }
        }
        function c(u) {
          u.done ? i(u.value) : s(u.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
  Ka
;(function (e) {
  ;(e.ALL = '*'), (e.INSERT = 'INSERT'), (e.UPDATE = 'UPDATE'), (e.DELETE = 'DELETE')
})(Ka || (Ka = {}))
var qa
;(function (e) {
  ;(e.BROADCAST = 'broadcast'), (e.PRESENCE = 'presence'), (e.POSTGRES_CHANGES = 'postgres_changes')
})(qa || (qa = {}))
var Wa
;(function (e) {
  ;(e.SUBSCRIBED = 'SUBSCRIBED'), (e.TIMED_OUT = 'TIMED_OUT'), (e.CLOSED = 'CLOSED'), (e.CHANNEL_ERROR = 'CHANNEL_ERROR')
})(Wa || (Wa = {}))
class _o {
  constructor(t, n = { config: {} }, r) {
    ;(this.topic = t),
      (this.params = n),
      (this.socket = r),
      (this.bindings = {}),
      (this.state = Ve.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.params.config = Object.assign({ broadcast: { ack: !1, self: !1 }, presence: { key: '' } }, n.config)),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new Xs(this, et.join, this.params, this.timeout)),
      (this.rejoinTimer = new fu(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs)),
      this.joinPush.receive('ok', () => {
        ;(this.state = Ve.joined), this.rejoinTimer.reset(), this.pushBuffer.forEach((s) => s.send()), (this.pushBuffer = [])
      }),
      this._onClose(() => {
        this.rejoinTimer.reset(), this.socket.log('channel', `close ${this.topic} ${this._joinRef()}`), (this.state = Ve.closed), this.socket._remove(this)
      }),
      this._onError((s) => {
        this._isLeaving() || this._isClosed() || (this.socket.log('channel', `error ${this.topic}`, s), (this.state = Ve.errored), this.rejoinTimer.scheduleTimeout())
      }),
      this.joinPush.receive('timeout', () => {
        this._isJoining() && (this.socket.log('channel', `timeout ${this.topic}`, this.joinPush.timeout), (this.state = Ve.errored), this.rejoinTimer.scheduleTimeout())
      }),
      this._on(et.reply, {}, (s, i) => {
        this._trigger(this._replyEventName(i), s)
      }),
      (this.presence = new lr(this))
  }
  subscribe(t, n = this.timeout) {
    var r, s
    if (this.joinedOnce) throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance"
    {
      const {
        config: { broadcast: i, presence: o }
      } = this.params
      this._onError((c) => t && t('CHANNEL_ERROR', c)), this._onClose(() => t && t('CLOSED'))
      const a = {},
        l = { broadcast: i, presence: o, postgres_changes: (s = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map((c) => c.filter)) !== null && s !== void 0 ? s : [] }
      this.socket.accessToken && (a.access_token = this.socket.accessToken),
        this.updateJoinPayload(Object.assign({ config: l }, a)),
        (this.joinedOnce = !0),
        this._rejoin(n),
        this.joinPush
          .receive('ok', ({ postgres_changes: c }) => {
            var u
            if ((this.socket.accessToken && this.socket.setAuth(this.socket.accessToken), c === void 0)) {
              t && t('SUBSCRIBED')
              return
            } else {
              const f = this.bindings.postgres_changes,
                h = (u = f == null ? void 0 : f.length) !== null && u !== void 0 ? u : 0,
                y = []
              for (let m = 0; m < h; m++) {
                const w = f[m],
                  {
                    filter: { event: E, schema: v, table: p, filter: b }
                  } = w,
                  R = c && c[m]
                if (R && R.event === E && R.schema === v && R.table === p && R.filter === b) y.push(Object.assign(Object.assign({}, w), { id: R.id }))
                else {
                  this.unsubscribe(), t && t('CHANNEL_ERROR', new Error('mismatch between server and client bindings for postgres changes'))
                  return
                }
              }
              ;(this.bindings.postgres_changes = y), t && t('SUBSCRIBED')
              return
            }
          })
          .receive('error', (c) => {
            t && t('CHANNEL_ERROR', new Error(JSON.stringify(Object.values(c).join(', ') || 'error')))
          })
          .receive('timeout', () => {
            t && t('TIMED_OUT')
          })
    }
    return this
  }
  presenceState() {
    return this.presence.state
  }
  track(t, n = {}) {
    return Va(this, void 0, void 0, function* () {
      return yield this.send({ type: 'presence', event: 'track', payload: t }, n.timeout || this.timeout)
    })
  }
  untrack(t = {}) {
    return Va(this, void 0, void 0, function* () {
      return yield this.send({ type: 'presence', event: 'untrack' }, t)
    })
  }
  on(t, n, r) {
    return this._on(t, n, r)
  }
  send(t, n = {}) {
    return new Promise((r) => {
      var s, i, o
      const a = this._push(t.type, t, n.timeout || this.timeout)
      a.rateLimited && r('rate limited'), t.type === 'broadcast' && !(!((o = (i = (s = this.params) === null || s === void 0 ? void 0 : s.config) === null || i === void 0 ? void 0 : i.broadcast) === null || o === void 0) && o.ack) && r('ok'), a.receive('ok', () => r('ok')), a.receive('timeout', () => r('timed out'))
    })
  }
  updateJoinPayload(t) {
    this.joinPush.updatePayload(t)
  }
  unsubscribe(t = this.timeout) {
    this.state = Ve.leaving
    const n = () => {
      this.socket.log('channel', `leave ${this.topic}`), this._trigger(et.close, 'leave', this._joinRef())
    }
    return (
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      new Promise((r) => {
        const s = new Xs(this, et.leave, {}, t)
        s
          .receive('ok', () => {
            n(), r('ok')
          })
          .receive('timeout', () => {
            n(), r('timed out')
          })
          .receive('error', () => {
            r('error')
          }),
          s.send(),
          this._canPush() || s.trigger('ok', {})
      })
    )
  }
  _push(t, n, r = this.timeout) {
    if (!this.joinedOnce) throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`
    let s = new Xs(this, t, n, r)
    return this._canPush() ? s.send() : (s.startTimeout(), this.pushBuffer.push(s)), s
  }
  _onMessage(t, n, r) {
    return n
  }
  _isMember(t) {
    return this.topic === t
  }
  _joinRef() {
    return this.joinPush.ref
  }
  _trigger(t, n, r) {
    var s, i
    const o = t.toLocaleLowerCase(),
      { close: a, error: l, leave: c, join: u } = et
    if (r && [a, l, c, u].indexOf(o) >= 0 && r !== this._joinRef()) return
    let h = this._onMessage(o, n, r)
    if (n && !h) throw 'channel onMessage callbacks must return the payload, modified or unmodified'
    ;['insert', 'update', 'delete'].includes(o)
      ? (s = this.bindings.postgres_changes) === null ||
        s === void 0 ||
        s
          .filter((y) => {
            var m, w, E
            return ((m = y.filter) === null || m === void 0 ? void 0 : m.event) === '*' || ((E = (w = y.filter) === null || w === void 0 ? void 0 : w.event) === null || E === void 0 ? void 0 : E.toLocaleLowerCase()) === o
          })
          .map((y) => y.callback(h, r))
      : (i = this.bindings[o]) === null ||
        i === void 0 ||
        i
          .filter((y) => {
            var m, w, E, v, p, b
            if (['broadcast', 'presence', 'postgres_changes'].includes(o))
              if ('id' in y) {
                const R = y.id,
                  O = (m = y.filter) === null || m === void 0 ? void 0 : m.event
                return R && ((w = n.ids) === null || w === void 0 ? void 0 : w.includes(R)) && (O === '*' || (O == null ? void 0 : O.toLocaleLowerCase()) === ((E = n.data) === null || E === void 0 ? void 0 : E.type.toLocaleLowerCase()))
              } else {
                const R = (p = (v = y == null ? void 0 : y.filter) === null || v === void 0 ? void 0 : v.event) === null || p === void 0 ? void 0 : p.toLocaleLowerCase()
                return R === '*' || R === ((b = n == null ? void 0 : n.event) === null || b === void 0 ? void 0 : b.toLocaleLowerCase())
              }
            else return y.type.toLocaleLowerCase() === o
          })
          .map((y) => {
            if (typeof h == 'object' && 'ids' in h) {
              const m = h.data,
                { schema: w, table: E, commit_timestamp: v, type: p, errors: b } = m
              h = Object.assign(Object.assign({}, { schema: w, table: E, commit_timestamp: v, eventType: p, new: {}, old: {}, errors: b }), this._getPayloadRecords(m))
            }
            y.callback(h, r)
          })
  }
  _isClosed() {
    return this.state === Ve.closed
  }
  _isJoined() {
    return this.state === Ve.joined
  }
  _isJoining() {
    return this.state === Ve.joining
  }
  _isLeaving() {
    return this.state === Ve.leaving
  }
  _replyEventName(t) {
    return `chan_reply_${t}`
  }
  _on(t, n, r) {
    const s = t.toLocaleLowerCase(),
      i = { type: s, filter: n, callback: r }
    return this.bindings[s] ? this.bindings[s].push(i) : (this.bindings[s] = [i]), this
  }
  _off(t, n) {
    const r = t.toLocaleLowerCase()
    return (
      (this.bindings[r] = this.bindings[r].filter((s) => {
        var i
        return !(((i = s.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === r && _o.isEqual(s.filter, n))
      })),
      this
    )
  }
  static isEqual(t, n) {
    if (Object.keys(t).length !== Object.keys(n).length) return !1
    for (const r in t) if (t[r] !== n[r]) return !1
    return !0
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin()
  }
  _onClose(t) {
    this._on(et.close, {}, t)
  }
  _onError(t) {
    this._on(et.error, {}, (n) => t(n))
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined()
  }
  _rejoin(t = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), (this.state = Ve.joining), this.joinPush.resend(t))
  }
  _getPayloadRecords(t) {
    const n = { new: {}, old: {} }
    return (t.type === 'INSERT' || t.type === 'UPDATE') && (n.new = Ba(t.columns, t.record)), (t.type === 'UPDATE' || t.type === 'DELETE') && (n.old = Ba(t.columns, t.old_record)), n
  }
}
var Ys =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i)
          })
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(u) {
        try {
          c(r.next(u))
        } catch (f) {
          o(f)
        }
      }
      function l(u) {
        try {
          c(r.throw(u))
        } catch (f) {
          o(f)
        }
      }
      function c(u) {
        u.done ? i(u.value) : s(u.value).then(a, l)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
const q_ = () => {}
class W_ {
  constructor(t, n) {
    var r
    ;(this.accessToken = null),
      (this.channels = []),
      (this.endPoint = ''),
      (this.headers = L_),
      (this.params = {}),
      (this.timeout = uu),
      (this.transport = j_.w3cwebsocket),
      (this.heartbeatIntervalMs = 3e4),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.ref = 0),
      (this.logger = q_),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new U_()),
      (this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }),
      (this.eventsPerSecondLimitMs = 100),
      (this.inThrottle = !1),
      (this.endPoint = `${t}/${Hi.websocket}`),
      n != null && n.params && (this.params = n.params),
      n != null && n.headers && (this.headers = Object.assign(Object.assign({}, this.headers), n.headers)),
      n != null && n.timeout && (this.timeout = n.timeout),
      n != null && n.logger && (this.logger = n.logger),
      n != null && n.transport && (this.transport = n.transport),
      n != null && n.heartbeatIntervalMs && (this.heartbeatIntervalMs = n.heartbeatIntervalMs)
    const s = (r = n == null ? void 0 : n.params) === null || r === void 0 ? void 0 : r.eventsPerSecond
    s && (this.eventsPerSecondLimitMs = Math.floor(1e3 / s)),
      (this.reconnectAfterMs = n != null && n.reconnectAfterMs ? n.reconnectAfterMs : (i) => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4),
      (this.encode = n != null && n.encode ? n.encode : (i, o) => o(JSON.stringify(i))),
      (this.decode = n != null && n.decode ? n.decode : this.serializer.decode.bind(this.serializer)),
      (this.reconnectTimer = new fu(
        () =>
          Ys(this, void 0, void 0, function* () {
            this.disconnect(), this.connect()
          }),
        this.reconnectAfterMs
      ))
  }
  connect() {
    this.conn || ((this.conn = new this.transport(this._endPointURL(), [], null, this.headers)), this.conn && ((this.conn.binaryType = 'arraybuffer'), (this.conn.onopen = () => this._onConnOpen()), (this.conn.onerror = (t) => this._onConnError(t)), (this.conn.onmessage = (t) => this._onConnMessage(t)), (this.conn.onclose = (t) => this._onConnClose(t))))
  }
  disconnect(t, n) {
    this.conn && ((this.conn.onclose = function () {}), t ? this.conn.close(t, n ?? '') : this.conn.close(), (this.conn = null), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset())
  }
  getChannels() {
    return this.channels
  }
  removeChannel(t) {
    return Ys(this, void 0, void 0, function* () {
      const n = yield t.unsubscribe()
      return this.channels.length === 0 && this.disconnect(), n
    })
  }
  removeAllChannels() {
    return Ys(this, void 0, void 0, function* () {
      const t = yield Promise.all(this.channels.map((n) => n.unsubscribe()))
      return this.disconnect(), t
    })
  }
  log(t, n, r) {
    this.logger(t, n, r)
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case ar.connecting:
        return Zt.Connecting
      case ar.open:
        return Zt.Open
      case ar.closing:
        return Zt.Closing
      default:
        return Zt.Closed
    }
  }
  isConnected() {
    return this.connectionState() === Zt.Open
  }
  channel(t, n = { config: {} }) {
    this.isConnected() || this.connect()
    const r = new _o(`realtime:${t}`, n, this)
    return this.channels.push(r), r
  }
  push(t) {
    const { topic: n, event: r, payload: s, ref: i } = t
    let o = () => {
      this.encode(t, (a) => {
        var l
        ;(l = this.conn) === null || l === void 0 || l.send(a)
      })
    }
    if ((this.log('push', `${n} ${r} (${i})`, s), this.isConnected()))
      if (['broadcast', 'presence', 'postgres_changes'].includes(r)) {
        if (this._throttle(o)()) return 'rate limited'
      } else o()
    else this.sendBuffer.push(o)
  }
  setAuth(t) {
    ;(this.accessToken = t),
      this.channels.forEach((n) => {
        t && n.updateJoinPayload({ access_token: t }), n.joinedOnce && n._isJoined() && n._push(et.access_token, { access_token: t })
      })
  }
  _makeRef() {
    let t = this.ref + 1
    return t === this.ref ? (this.ref = 0) : (this.ref = t), this.ref.toString()
  }
  _leaveOpenTopic(t) {
    let n = this.channels.find((r) => r.topic === t && (r._isJoined() || r._isJoining()))
    n && (this.log('transport', `leaving duplicate topic "${t}"`), n.unsubscribe())
  }
  _remove(t) {
    this.channels = this.channels.filter((n) => n._joinRef() !== t._joinRef())
  }
  _endPointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: D_ }))
  }
  _onConnMessage(t) {
    this.decode(t.data, (n) => {
      let { topic: r, event: s, payload: i, ref: o } = n
      ;((o && o === this.pendingHeartbeatRef) || s === (i == null ? void 0 : i.type)) && (this.pendingHeartbeatRef = null), this.log('receive', `${i.status || ''} ${r} ${s} ${(o && '(' + o + ')') || ''}`, i), this.channels.filter((a) => a._isMember(r)).forEach((a) => a._trigger(s, i, o)), this.stateChangeCallbacks.message.forEach((a) => a(n))
    })
  }
  _onConnOpen() {
    this.log('transport', `connected to ${this._endPointURL()}`), this._flushSendBuffer(), this.reconnectTimer.reset(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), (this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs)), this.stateChangeCallbacks.open.forEach((t) => t())
  }
  _onConnClose(t) {
    this.log('transport', 'close', t), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((n) => n(t))
  }
  _onConnError(t) {
    this.log('transport', t.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((n) => n(t))
  }
  _triggerChanError() {
    this.channels.forEach((t) => t._trigger(et.error))
  }
  _appendParams(t, n) {
    if (Object.keys(n).length === 0) return t
    const r = t.match(/\?/) ? '&' : '?',
      s = new URLSearchParams(n)
    return `${t}${r}${s}`
  }
  _flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((t) => t()), (this.sendBuffer = []))
  }
  _sendHeartbeat() {
    var t
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        ;(this.pendingHeartbeatRef = null), this.log('transport', 'heartbeat timeout. Attempting to re-establish connection'), (t = this.conn) === null || t === void 0 || t.close(H_, 'hearbeat timeout')
        return
      }
      ;(this.pendingHeartbeatRef = this._makeRef()), this.push({ topic: 'phoenix', event: 'heartbeat', payload: {}, ref: this.pendingHeartbeatRef }), this.setAuth(this.accessToken)
    }
  }
  _throttle(t, n = this.eventsPerSecondLimitMs) {
    return () =>
      this.inThrottle
        ? !0
        : (t(),
          n > 0 &&
            ((this.inThrottle = !0),
            setTimeout(() => {
              this.inThrottle = !1
            }, n)),
          !1)
  }
}
class du extends Error {
  constructor(t) {
    super(t), (this.__isStorageError = !0), (this.name = 'StorageError')
  }
}
function He(e) {
  return typeof e == 'object' && e !== null && '__isStorageError' in e
}
class z_ extends du {
  constructor(t, n) {
    super(t), (this.name = 'StorageApiError'), (this.status = n)
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status }
  }
}
class za extends du {
  constructor(t, n) {
    super(t), (this.name = 'StorageUnknownError'), (this.originalError = n)
  }
}
var pu =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i)
          })
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(u) {
        try {
          c(r.next(u))
        } catch (f) {
          o(f)
        }
      }
      function l(u) {
        try {
          c(r.throw(u))
        } catch (f) {
          o(f)
        }
      }
      function c(u) {
        u.done ? i(u.value) : s(u.value).then(a, l)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
const mu = (e) => {
    let t
    return (
      e
        ? (t = e)
        : typeof fetch > 'u'
        ? (t = (...n) =>
            pu(void 0, void 0, void 0, function* () {
              return yield (yield Q(() => Promise.resolve().then(() => As), void 0, import.meta.url)).fetch(...n)
            }))
        : (t = fetch),
      (...n) => t(...n)
    )
  },
  J_ = () =>
    pu(void 0, void 0, void 0, function* () {
      return typeof Response > 'u' ? (yield Q(() => Promise.resolve().then(() => As), void 0, import.meta.url)).Response : Response
    })
var Bn =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i)
          })
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(u) {
        try {
          c(r.next(u))
        } catch (f) {
          o(f)
        }
      }
      function l(u) {
        try {
          c(r.throw(u))
        } catch (f) {
          o(f)
        }
      }
      function c(u) {
        u.done ? i(u.value) : s(u.value).then(a, l)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
const Zs = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  G_ = (e, t) =>
    Bn(void 0, void 0, void 0, function* () {
      const n = yield J_()
      e instanceof n
        ? e
            .json()
            .then((r) => {
              t(new z_(Zs(r), e.status || 500))
            })
            .catch((r) => {
              t(new za(Zs(r), r))
            })
        : t(new za(Zs(e), e))
    }),
  Q_ = (e, t, n, r) => {
    const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} }
    return e === 'GET' ? s : ((s.headers = Object.assign({ 'Content-Type': 'application/json' }, t == null ? void 0 : t.headers)), (s.body = JSON.stringify(r)), Object.assign(Object.assign({}, s), n))
  }
function xs(e, t, n, r, s, i) {
  return Bn(this, void 0, void 0, function* () {
    return new Promise((o, a) => {
      e(n, Q_(t, r, s, i))
        .then((l) => {
          if (!l.ok) throw l
          return r != null && r.noResolveJson ? l : l.json()
        })
        .then((l) => o(l))
        .catch((l) => G_(l, a))
    })
  })
}
function Mi(e, t, n, r) {
  return Bn(this, void 0, void 0, function* () {
    return xs(e, 'GET', t, n, r)
  })
}
function en(e, t, n, r, s) {
  return Bn(this, void 0, void 0, function* () {
    return xs(e, 'POST', t, r, s, n)
  })
}
function X_(e, t, n, r, s) {
  return Bn(this, void 0, void 0, function* () {
    return xs(e, 'PUT', t, r, s, n)
  })
}
function gu(e, t, n, r, s) {
  return Bn(this, void 0, void 0, function* () {
    return xs(e, 'DELETE', t, r, s, n)
  })
}
var lt =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i)
          })
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(u) {
        try {
          c(r.next(u))
        } catch (f) {
          o(f)
        }
      }
      function l(u) {
        try {
          c(r.throw(u))
        } catch (f) {
          o(f)
        }
      }
      function c(u) {
        u.done ? i(u.value) : s(u.value).then(a, l)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
const Y_ = { limit: 100, offset: 0, sortBy: { column: 'name', order: 'asc' } },
  Z_ = { cacheControl: '3600', contentType: 'text/plain;charset=UTF-8', upsert: !1 }
class ey {
  constructor(t, n = {}, r, s) {
    ;(this.url = t), (this.headers = n), (this.bucketId = r), (this.fetch = mu(s))
  }
  uploadOrUpdate(t, n, r, s) {
    return lt(this, void 0, void 0, function* () {
      try {
        let i
        const o = Object.assign(Object.assign({}, Z_), s),
          a = Object.assign(Object.assign({}, this.headers), t === 'POST' && { 'x-upsert': String(o.upsert) })
        typeof Blob < 'u' && r instanceof Blob ? ((i = new FormData()), i.append('cacheControl', o.cacheControl), i.append('', r)) : typeof FormData < 'u' && r instanceof FormData ? ((i = r), i.append('cacheControl', o.cacheControl)) : ((i = r), (a['cache-control'] = `max-age=${o.cacheControl}`), (a['content-type'] = o.contentType))
        const l = this._removeEmptyFolders(n),
          c = this._getFinalPath(l),
          u = yield this.fetch(`${this.url}/object/${c}`, Object.assign({ method: t, body: i, headers: a }, o != null && o.duplex ? { duplex: o.duplex } : {}))
        return u.ok ? { data: { path: l }, error: null } : { data: null, error: yield u.json() }
      } catch (i) {
        if (He(i)) return { data: null, error: i }
        throw i
      }
    })
  }
  upload(t, n, r) {
    return lt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate('POST', t, n, r)
    })
  }
  update(t, n, r) {
    return lt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate('PUT', t, n, r)
    })
  }
  move(t, n) {
    return lt(this, void 0, void 0, function* () {
      try {
        return { data: yield en(this.fetch, `${this.url}/object/move`, { bucketId: this.bucketId, sourceKey: t, destinationKey: n }, { headers: this.headers }), error: null }
      } catch (r) {
        if (He(r)) return { data: null, error: r }
        throw r
      }
    })
  }
  copy(t, n) {
    return lt(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield en(this.fetch, `${this.url}/object/copy`, { bucketId: this.bucketId, sourceKey: t, destinationKey: n }, { headers: this.headers })).Key }, error: null }
      } catch (r) {
        if (He(r)) return { data: null, error: r }
        throw r
      }
    })
  }
  createSignedUrl(t, n, r) {
    return lt(this, void 0, void 0, function* () {
      try {
        let s = this._getFinalPath(t),
          i = yield en(this.fetch, `${this.url}/object/sign/${s}`, Object.assign({ expiresIn: n }, r != null && r.transform ? { transform: r.transform } : {}), { headers: this.headers })
        const o = r != null && r.download ? `&download=${r.download === !0 ? '' : r.download}` : ''
        return (i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`) }), { data: i, error: null }
      } catch (s) {
        if (He(s)) return { data: null, error: s }
        throw s
      }
    })
  }
  createSignedUrls(t, n, r) {
    return lt(this, void 0, void 0, function* () {
      try {
        const s = yield en(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: n, paths: t }, { headers: this.headers }),
          i = r != null && r.download ? `&download=${r.download === !0 ? '' : r.download}` : ''
        return { data: s.map((o) => Object.assign(Object.assign({}, o), { signedUrl: o.signedURL ? encodeURI(`${this.url}${o.signedURL}${i}`) : null })), error: null }
      } catch (s) {
        if (He(s)) return { data: null, error: s }
        throw s
      }
    })
  }
  download(t, n) {
    return lt(this, void 0, void 0, function* () {
      const s = typeof (n == null ? void 0 : n.transform) < 'u' ? 'render/image/authenticated' : 'object',
        i = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {}),
        o = i ? `?${i}` : ''
      try {
        const a = this._getFinalPath(t)
        return { data: yield (yield Mi(this.fetch, `${this.url}/${s}/${a}${o}`, { headers: this.headers, noResolveJson: !0 })).blob(), error: null }
      } catch (a) {
        if (He(a)) return { data: null, error: a }
        throw a
      }
    })
  }
  getPublicUrl(t, n) {
    const r = this._getFinalPath(t),
      s = [],
      i = n != null && n.download ? `download=${n.download === !0 ? '' : n.download}` : ''
    i !== '' && s.push(i)
    const a = typeof (n == null ? void 0 : n.transform) < 'u' ? 'render/image' : 'object',
      l = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {})
    l !== '' && s.push(l)
    let c = s.join('&')
    return c !== '' && (c = `?${c}`), { data: { publicUrl: encodeURI(`${this.url}/${a}/public/${r}${c}`) } }
  }
  remove(t) {
    return lt(this, void 0, void 0, function* () {
      try {
        return { data: yield gu(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: t }, { headers: this.headers }), error: null }
      } catch (n) {
        if (He(n)) return { data: null, error: n }
        throw n
      }
    })
  }
  list(t, n, r) {
    return lt(this, void 0, void 0, function* () {
      try {
        const s = Object.assign(Object.assign(Object.assign({}, Y_), n), { prefix: t || '' })
        return { data: yield en(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, { headers: this.headers }, r), error: null }
      } catch (s) {
        if (He(s)) return { data: null, error: s }
        throw s
      }
    })
  }
  _getFinalPath(t) {
    return `${this.bucketId}/${t}`
  }
  _removeEmptyFolders(t) {
    return t.replace(/^\/|\/$/g, '').replace(/\/+/g, '/')
  }
  transformOptsToQueryString(t) {
    const n = []
    return t.width && n.push(`width=${t.width}`), t.height && n.push(`height=${t.height}`), t.resize && n.push(`resize=${t.resize}`), t.format && n.push(`format=${t.format}`), t.quality && n.push(`quality=${t.quality}`), n.join('&')
  }
}
const ty = '2.4.0',
  ny = { 'X-Client-Info': `storage-js/${ty}` }
var gn =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i)
          })
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(u) {
        try {
          c(r.next(u))
        } catch (f) {
          o(f)
        }
      }
      function l(u) {
        try {
          c(r.throw(u))
        } catch (f) {
          o(f)
        }
      }
      function c(u) {
        u.done ? i(u.value) : s(u.value).then(a, l)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
class ry {
  constructor(t, n = {}, r) {
    ;(this.url = t), (this.headers = Object.assign(Object.assign({}, ny), n)), (this.fetch = mu(r))
  }
  listBuckets() {
    return gn(this, void 0, void 0, function* () {
      try {
        return { data: yield Mi(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null }
      } catch (t) {
        if (He(t)) return { data: null, error: t }
        throw t
      }
    })
  }
  getBucket(t) {
    return gn(this, void 0, void 0, function* () {
      try {
        return { data: yield Mi(this.fetch, `${this.url}/bucket/${t}`, { headers: this.headers }), error: null }
      } catch (n) {
        if (He(n)) return { data: null, error: n }
        throw n
      }
    })
  }
  createBucket(t, n = { public: !1 }) {
    return gn(this, void 0, void 0, function* () {
      try {
        return { data: yield en(this.fetch, `${this.url}/bucket`, { id: t, name: t, public: n.public, file_size_limit: n.fileSizeLimit, allowed_mime_types: n.allowedMimeTypes }, { headers: this.headers }), error: null }
      } catch (r) {
        if (He(r)) return { data: null, error: r }
        throw r
      }
    })
  }
  updateBucket(t, n) {
    return gn(this, void 0, void 0, function* () {
      try {
        return { data: yield X_(this.fetch, `${this.url}/bucket/${t}`, { id: t, name: t, public: n.public, file_size_limit: n.fileSizeLimit, allowed_mime_types: n.allowedMimeTypes }, { headers: this.headers }), error: null }
      } catch (r) {
        if (He(r)) return { data: null, error: r }
        throw r
      }
    })
  }
  emptyBucket(t) {
    return gn(this, void 0, void 0, function* () {
      try {
        return { data: yield en(this.fetch, `${this.url}/bucket/${t}/empty`, {}, { headers: this.headers }), error: null }
      } catch (n) {
        if (He(n)) return { data: null, error: n }
        throw n
      }
    })
  }
  deleteBucket(t) {
    return gn(this, void 0, void 0, function* () {
      try {
        return { data: yield gu(this.fetch, `${this.url}/bucket/${t}`, {}, { headers: this.headers }), error: null }
      } catch (n) {
        if (He(n)) return { data: null, error: n }
        throw n
      }
    })
  }
}
class sy extends ry {
  constructor(t, n = {}, r) {
    super(t, n, r)
  }
  from(t) {
    return new ey(this.url, this.headers, t, this.fetch)
  }
}
const iy = '2.13.1',
  oy = { 'X-Client-Info': `supabase-js/${iy}` }
var ay =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i)
          })
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(u) {
        try {
          c(r.next(u))
        } catch (f) {
          o(f)
        }
      }
      function l(u) {
        try {
          c(r.throw(u))
        } catch (f) {
          o(f)
        }
      }
      function c(u) {
        u.done ? i(u.value) : s(u.value).then(a, l)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
const ly = (e) => {
    let t
    return e ? (t = e) : typeof fetch > 'u' ? (t = go) : (t = fetch), (...n) => t(...n)
  },
  cy = () => (typeof Headers > 'u' ? Dn.Headers : Headers),
  uy = (e, t, n) => {
    const r = ly(n),
      s = cy()
    return (i, o) =>
      ay(void 0, void 0, void 0, function* () {
        var a
        const l = (a = yield t()) !== null && a !== void 0 ? a : e
        let c = new s(o == null ? void 0 : o.headers)
        return c.has('apikey') || c.set('apikey', e), c.has('Authorization') || c.set('Authorization', `Bearer ${l}`), r(i, Object.assign(Object.assign({}, o), { headers: c }))
      })
  }
function fy(e) {
  return e.replace(/\/$/, '')
}
function hy(e, t) {
  const { db: n, auth: r, realtime: s, global: i } = e,
    { db: o, auth: a, realtime: l, global: c } = t
  return { db: Object.assign(Object.assign({}, o), n), auth: Object.assign(Object.assign({}, a), r), realtime: Object.assign(Object.assign({}, l), s), global: Object.assign(Object.assign({}, c), i) }
}
var fn =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i)
          })
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(u) {
        try {
          c(r.next(u))
        } catch (f) {
          o(f)
        }
      }
      function l(u) {
        try {
          c(r.throw(u))
        } catch (f) {
          o(f)
        }
      }
      function c(u) {
        u.done ? i(u.value) : s(u.value).then(a, l)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
function dy(e) {
  return Math.round(Date.now() / 1e3) + e
}
function py() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
    const t = (Math.random() * 16) | 0
    return (e == 'x' ? t : (t & 3) | 8).toString(16)
  })
}
const Gt = () => typeof document < 'u',
  zt = { tested: !1, writable: !1 },
  ei = () => {
    if (!Gt()) return !1
    try {
      if (typeof globalThis.localStorage != 'object') return !1
    } catch {
      return !1
    }
    if (zt.tested) return zt.writable
    const e = `lswt-${Math.random()}${Math.random()}`
    try {
      globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), (zt.tested = !0), (zt.writable = !0)
    } catch {
      ;(zt.tested = !0), (zt.writable = !1)
    }
    return zt.writable
  }
function Ge(e, t) {
  var n
  t || (t = ((n = window == null ? void 0 : window.location) === null || n === void 0 ? void 0 : n.href) || ''), (e = e.replace(/[\[\]]/g, '\\$&'))
  const r = new RegExp('[?&#]' + e + '(=([^&#]*)|&|#|$)'),
    s = r.exec(t)
  return s ? (s[2] ? decodeURIComponent(s[2].replace(/\+/g, ' ')) : '') : null
}
const _u = (e) => {
    let t
    return (
      e
        ? (t = e)
        : typeof fetch > 'u'
        ? (t = (...n) =>
            fn(void 0, void 0, void 0, function* () {
              return yield (yield Q(() => Promise.resolve().then(() => As), void 0, import.meta.url)).fetch(...n)
            }))
        : (t = fetch),
      (...n) => t(...n)
    )
  },
  my = (e) => typeof e == 'object' && e !== null && 'status' in e && 'ok' in e && 'json' in e && typeof e.json == 'function',
  Ja = (e, t, n) =>
    fn(void 0, void 0, void 0, function* () {
      yield e.setItem(t, JSON.stringify(n))
    }),
  ti = (e, t) =>
    fn(void 0, void 0, void 0, function* () {
      const n = yield e.getItem(t)
      if (!n) return null
      try {
        return JSON.parse(n)
      } catch {
        return n
      }
    }),
  Ga = (e, t) =>
    fn(void 0, void 0, void 0, function* () {
      yield e.removeItem(t)
    })
function gy(e) {
  const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  let n = '',
    r,
    s,
    i,
    o,
    a,
    l,
    c,
    u = 0
  for (e = e.replace('-', '+').replace('_', '/'); u < e.length; ) (o = t.indexOf(e.charAt(u++))), (a = t.indexOf(e.charAt(u++))), (l = t.indexOf(e.charAt(u++))), (c = t.indexOf(e.charAt(u++))), (r = (o << 2) | (a >> 4)), (s = ((a & 15) << 4) | (l >> 2)), (i = ((l & 3) << 6) | c), (n = n + String.fromCharCode(r)), l != 64 && s != 0 && (n = n + String.fromCharCode(s)), c != 64 && i != 0 && (n = n + String.fromCharCode(i))
  return n
}
class $s {
  constructor() {
    this.promise = new $s.promiseConstructor((t, n) => {
      ;(this.resolve = t), (this.reject = n)
    })
  }
}
$s.promiseConstructor = Promise
function Qa(e) {
  const t = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
    n = e.split('.')
  if (n.length !== 3) throw new Error('JWT is not valid: not a JWT structure')
  if (!t.test(n[1])) throw new Error('JWT is not valid: payload is not in base64url format')
  const r = n[1]
  return JSON.parse(gy(r))
}
function _y(e) {
  return new Promise((t) => {
    setTimeout(() => t(null), e)
  })
}
function yy(e, t) {
  return new Promise((r, s) => {
    fn(this, void 0, void 0, function* () {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const o = yield e(i)
          if (!t(i, null, o)) {
            r(o)
            return
          }
        } catch (o) {
          if (!t(i, o)) {
            s(o)
            return
          }
        }
    })
  })
}
function vy(e) {
  return ('0' + e.toString(16)).substr(-2)
}
function by() {
  const t = new Uint32Array(56)
  if (typeof window.crypto > 'u') throw new Error('PKCE is not supported on devices without WebCrypto API support, please add polyfills')
  return window.crypto.getRandomValues(t), Array.from(t, vy).join('')
}
function wy(e) {
  return fn(this, void 0, void 0, function* () {
    const n = new TextEncoder().encode(e)
    if (typeof window.crypto > 'u') throw new Error('PKCE is not supported on devices without WebCrypto API support, please add polyfills')
    const r = yield window.crypto.subtle.digest('SHA-256', n),
      s = new Uint8Array(r)
    return Array.from(s)
      .map((i) => String.fromCharCode(i))
      .join('')
  })
}
function Ey(e) {
  return btoa(e).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}
function Ty(e) {
  return fn(this, void 0, void 0, function* () {
    const t = yield wy(e)
    return Ey(t)
  })
}
class yo extends Error {
  constructor(t, n) {
    super(t), (this.__isAuthError = !0), (this.name = 'AuthError'), (this.status = n)
  }
}
function ue(e) {
  return typeof e == 'object' && e !== null && '__isAuthError' in e
}
class Ry extends yo {
  constructor(t, n) {
    super(t, n), (this.name = 'AuthApiError'), (this.status = n)
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status }
  }
}
function Cy(e) {
  return ue(e) && e.name === 'AuthApiError'
}
class yu extends yo {
  constructor(t, n) {
    super(t), (this.name = 'AuthUnknownError'), (this.originalError = n)
  }
}
class js extends yo {
  constructor(t, n, r) {
    super(t), (this.name = n), (this.status = r)
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status }
  }
}
class Gn extends js {
  constructor() {
    super('Auth session missing!', 'AuthSessionMissingError', 400)
  }
}
class ni extends js {
  constructor(t) {
    super(t, 'AuthInvalidCredentialsError', 400)
  }
}
class pt extends js {
  constructor(t, n = null) {
    super(t, 'AuthImplicitGrantRedirectError', 500), (this.details = null), (this.details = n)
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status, details: this.details }
  }
}
class Ni extends js {
  constructor(t, n) {
    super(t, 'AuthRetryableFetchError', n)
  }
}
var vo =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, n, r) {
      function s(i) {
        return i instanceof n
          ? i
          : new n(function (o) {
              o(i)
            })
      }
      return new (n || (n = Promise))(function (i, o) {
        function a(u) {
          try {
            c(r.next(u))
          } catch (f) {
            o(f)
          }
        }
        function l(u) {
          try {
            c(r.throw(u))
          } catch (f) {
            o(f)
          }
        }
        function c(u) {
          u.done ? i(u.value) : s(u.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
  Py =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {}
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
      if (e != null && typeof Object.getOwnPropertySymbols == 'function') for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
      return n
    }
const Fr = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  Oy = (e, t) =>
    vo(void 0, void 0, void 0, function* () {
      const n = [502, 503, 504]
      my(e)
        ? n.includes(e.status)
          ? t(new Ni(Fr(e), e.status))
          : e
              .json()
              .then((r) => {
                t(new Ry(Fr(r), e.status || 500))
              })
              .catch((r) => {
                t(new yu(Fr(r), r))
              })
        : t(new Ni(Fr(e), 0))
    }),
  Sy = (e, t, n, r) => {
    const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} }
    return e === 'GET' ? s : ((s.headers = Object.assign({ 'Content-Type': 'application/json;charset=UTF-8' }, t == null ? void 0 : t.headers)), (s.body = JSON.stringify(r)), Object.assign(Object.assign({}, s), n))
  }
function de(e, t, n, r) {
  var s
  return vo(this, void 0, void 0, function* () {
    const i = Object.assign({}, r == null ? void 0 : r.headers)
    r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`)
    const o = (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {}
    r != null && r.redirectTo && (o.redirect_to = r.redirectTo)
    const a = Object.keys(o).length ? '?' + new URLSearchParams(o).toString() : '',
      l = yield ky(e, t, n + a, { headers: i, noResolveJson: r == null ? void 0 : r.noResolveJson }, {}, r == null ? void 0 : r.body)
    return r != null && r.xform ? (r == null ? void 0 : r.xform(l)) : { data: Object.assign({}, l), error: null }
  })
}
function ky(e, t, n, r, s, i) {
  return vo(this, void 0, void 0, function* () {
    return new Promise((o, a) => {
      e(n, Sy(t, r, s, i))
        .then((l) => {
          if (!l.ok) throw l
          return r != null && r.noResolveJson ? l : l.json()
        })
        .then((l) => o(l))
        .catch((l) => Oy(l, a))
    })
  })
}
function kt(e) {
  var t
  let n = null
  jy(e) && ((n = Object.assign({}, e)), (n.expires_at = dy(e.expires_in)))
  const r = (t = e.user) !== null && t !== void 0 ? t : e
  return { data: { session: n, user: r }, error: null }
}
function tn(e) {
  var t
  return { data: { user: (t = e.user) !== null && t !== void 0 ? t : e }, error: null }
}
function Ay(e) {
  return { data: e, error: null }
}
function xy(e) {
  const { action_link: t, email_otp: n, hashed_token: r, redirect_to: s, verification_type: i } = e,
    o = Py(e, ['action_link', 'email_otp', 'hashed_token', 'redirect_to', 'verification_type']),
    a = { action_link: t, email_otp: n, hashed_token: r, redirect_to: s, verification_type: i },
    l = Object.assign({}, o)
  return { data: { properties: a, user: l }, error: null }
}
function $y(e) {
  return e
}
function jy(e) {
  return e.access_token && e.refresh_token && e.expires_in
}
var ct =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, n, r) {
      function s(i) {
        return i instanceof n
          ? i
          : new n(function (o) {
              o(i)
            })
      }
      return new (n || (n = Promise))(function (i, o) {
        function a(u) {
          try {
            c(r.next(u))
          } catch (f) {
            o(f)
          }
        }
        function l(u) {
          try {
            c(r.throw(u))
          } catch (f) {
            o(f)
          }
        }
        function c(u) {
          u.done ? i(u.value) : s(u.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
  Iy =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {}
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
      if (e != null && typeof Object.getOwnPropertySymbols == 'function') for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
      return n
    }
class Ly {
  constructor({ url: t = '', headers: n = {}, fetch: r }) {
    ;(this.url = t), (this.headers = n), (this.fetch = _u(r)), (this.mfa = { listFactors: this._listFactors.bind(this), deleteFactor: this._deleteFactor.bind(this) })
  }
  signOut(t) {
    return ct(this, void 0, void 0, function* () {
      try {
        return yield de(this.fetch, 'POST', `${this.url}/logout`, { headers: this.headers, jwt: t, noResolveJson: !0 }), { data: null, error: null }
      } catch (n) {
        if (ue(n)) return { data: null, error: n }
        throw n
      }
    })
  }
  inviteUserByEmail(t, n = {}) {
    return ct(this, void 0, void 0, function* () {
      try {
        return yield de(this.fetch, 'POST', `${this.url}/invite`, { body: { email: t, data: n.data }, headers: this.headers, redirectTo: n.redirectTo, xform: tn })
      } catch (r) {
        if (ue(r)) return { data: { user: null }, error: r }
        throw r
      }
    })
  }
  generateLink(t) {
    return ct(this, void 0, void 0, function* () {
      try {
        const { options: n } = t,
          r = Iy(t, ['options']),
          s = Object.assign(Object.assign({}, r), n)
        return 'newEmail' in r && ((s.new_email = r == null ? void 0 : r.newEmail), delete s.newEmail), yield de(this.fetch, 'POST', `${this.url}/admin/generate_link`, { body: s, headers: this.headers, xform: xy, redirectTo: n == null ? void 0 : n.redirectTo })
      } catch (n) {
        if (ue(n)) return { data: { properties: null, user: null }, error: n }
        throw n
      }
    })
  }
  createUser(t) {
    return ct(this, void 0, void 0, function* () {
      try {
        return yield de(this.fetch, 'POST', `${this.url}/admin/users`, { body: t, headers: this.headers, xform: tn })
      } catch (n) {
        if (ue(n)) return { data: { user: null }, error: n }
        throw n
      }
    })
  }
  listUsers(t) {
    var n, r, s, i, o, a, l
    return ct(this, void 0, void 0, function* () {
      try {
        const c = { nextPage: null, lastPage: 0, total: 0 },
          u = yield de(this.fetch, 'GET', `${this.url}/admin/users`, { headers: this.headers, noResolveJson: !0, query: { page: (r = (n = t == null ? void 0 : t.page) === null || n === void 0 ? void 0 : n.toString()) !== null && r !== void 0 ? r : '', per_page: (i = (s = t == null ? void 0 : t.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : '' }, xform: $y })
        if (u.error) throw u.error
        const f = yield u.json(),
          h = (o = u.headers.get('x-total-count')) !== null && o !== void 0 ? o : 0,
          y = (l = (a = u.headers.get('link')) === null || a === void 0 ? void 0 : a.split(',')) !== null && l !== void 0 ? l : []
        return (
          y.length > 0 &&
            (y.forEach((m) => {
              const w = parseInt(m.split(';')[0].split('=')[1].substring(0, 1)),
                E = JSON.parse(m.split(';')[1].split('=')[1])
              c[`${E}Page`] = w
            }),
            (c.total = parseInt(h))),
          { data: Object.assign(Object.assign({}, f), c), error: null }
        )
      } catch (c) {
        if (ue(c)) return { data: { users: [] }, error: c }
        throw c
      }
    })
  }
  getUserById(t) {
    return ct(this, void 0, void 0, function* () {
      try {
        return yield de(this.fetch, 'GET', `${this.url}/admin/users/${t}`, { headers: this.headers, xform: tn })
      } catch (n) {
        if (ue(n)) return { data: { user: null }, error: n }
        throw n
      }
    })
  }
  updateUserById(t, n) {
    return ct(this, void 0, void 0, function* () {
      try {
        return yield de(this.fetch, 'PUT', `${this.url}/admin/users/${t}`, { body: n, headers: this.headers, xform: tn })
      } catch (r) {
        if (ue(r)) return { data: { user: null }, error: r }
        throw r
      }
    })
  }
  deleteUser(t, n = !1) {
    return ct(this, void 0, void 0, function* () {
      try {
        return yield de(this.fetch, 'DELETE', `${this.url}/admin/users/${t}`, { headers: this.headers, body: { should_soft_delete: n }, xform: tn })
      } catch (r) {
        if (ue(r)) return { data: { user: null }, error: r }
        throw r
      }
    })
  }
  _listFactors(t) {
    return ct(this, void 0, void 0, function* () {
      try {
        const { data: n, error: r } = yield de(this.fetch, 'GET', `${this.url}/admin/users/${t.userId}/factors`, { headers: this.headers, xform: (s) => ({ data: { factors: s }, error: null }) })
        return { data: n, error: r }
      } catch (n) {
        if (ue(n)) return { data: null, error: n }
        throw n
      }
    })
  }
  _deleteFactor(t) {
    return ct(this, void 0, void 0, function* () {
      try {
        return { data: yield de(this.fetch, 'DELETE', `${this.url}/admin/users/${t.userId}/factors/${t.id}`, { headers: this.headers }), error: null }
      } catch (n) {
        if (ue(n)) return { data: null, error: n }
        throw n
      }
    })
  }
}
const Dy = '2.20.1',
  Hy = 'http://localhost:9999',
  Uy = 'supabase.auth.token',
  My = { 'X-Client-Info': `gotrue-js/${Dy}` },
  Ny = 10,
  Fy = {
    getItem: (e) => (ei() ? globalThis.localStorage.getItem(e) : null),
    setItem: (e, t) => {
      ei() && globalThis.localStorage.setItem(e, t)
    },
    removeItem: (e) => {
      ei() && globalThis.localStorage.removeItem(e)
    }
  }
function By() {
  if (typeof globalThis != 'object')
    try {
      Object.defineProperty(Object.prototype, '__magic__', {
        get: function () {
          return this
        },
        configurable: !0
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__
    } catch {
      typeof self < 'u' && (self.globalThis = self)
    }
}
var ne =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i)
          })
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(u) {
        try {
          c(r.next(u))
        } catch (f) {
          o(f)
        }
      }
      function l(u) {
        try {
          c(r.throw(u))
        } catch (f) {
          o(f)
        }
      }
      function c(u) {
        u.done ? i(u.value) : s(u.value).then(a, l)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
By()
const Vy = { url: Hy, storageKey: Uy, autoRefreshToken: !0, persistSession: !0, detectSessionInUrl: !0, headers: My },
  ri = 10 * 1e3,
  Ky = 3
class qy {
  constructor(t) {
    var n
    ;(this.stateChangeEmitters = new Map()), (this.autoRefreshTicker = null), (this.visibilityChangedCallback = null), (this.refreshingDeferred = null), (this.initializePromise = null), (this.detectSessionInUrl = !0), (this.broadcastChannel = null)
    const r = Object.assign(Object.assign({}, Vy), t)
    if (
      ((this.inMemorySession = null),
      (this.storageKey = r.storageKey),
      (this.autoRefreshToken = r.autoRefreshToken),
      (this.persistSession = r.persistSession),
      (this.storage = r.storage || Fy),
      (this.admin = new Ly({ url: r.url, headers: r.headers, fetch: r.fetch })),
      (this.url = r.url),
      (this.headers = r.headers),
      (this.fetch = _u(r.fetch)),
      (this.detectSessionInUrl = r.detectSessionInUrl),
      (this.mfa = { verify: this._verify.bind(this), enroll: this._enroll.bind(this), unenroll: this._unenroll.bind(this), challenge: this._challenge.bind(this), listFactors: this._listFactors.bind(this), challengeAndVerify: this._challengeAndVerify.bind(this), getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this) }),
      Gt() && globalThis.BroadcastChannel && this.persistSession && this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
      } catch (s) {
        console.error('Failed to create a new BroadcastChannel, multi-tab state changes will not be available', s)
      }
      ;(n = this.broadcastChannel) === null ||
        n === void 0 ||
        n.addEventListener('message', (s) => {
          this._notifyAllSubscribers(s.data.event, s.data.session, !1)
        })
    }
    this.initialize()
  }
  initialize() {
    return this.initializePromise || (this.initializePromise = this._initialize()), this.initializePromise
  }
  _initialize() {
    return ne(this, void 0, void 0, function* () {
      if (this.initializePromise) return this.initializePromise
      try {
        if (this.detectSessionInUrl && this._isImplicitGrantFlow()) {
          const { data: t, error: n } = yield this._getSessionFromUrl()
          if (n) return yield this._removeSession(), { error: n }
          const { session: r, redirectType: s } = t
          return (
            yield this._saveSession(r),
            setTimeout(() => {
              s === 'recovery' ? this._notifyAllSubscribers('PASSWORD_RECOVERY', r) : this._notifyAllSubscribers('SIGNED_IN', r)
            }, 0),
            { error: null }
          )
        }
        return yield this._recoverAndRefresh(), { error: null }
      } catch (t) {
        return ue(t) ? { error: t } : { error: new yu('Unexpected error during initialization', t) }
      } finally {
        yield this._handleVisibilityChange()
      }
    })
  }
  signUp(t) {
    var n, r, s
    return ne(this, void 0, void 0, function* () {
      try {
        yield this._removeSession()
        let i
        if ('email' in t) {
          const { email: u, password: f, options: h } = t
          i = yield de(this.fetch, 'POST', `${this.url}/signup`, { headers: this.headers, redirectTo: h == null ? void 0 : h.emailRedirectTo, body: { email: u, password: f, data: (n = h == null ? void 0 : h.data) !== null && n !== void 0 ? n : {}, gotrue_meta_security: { captcha_token: h == null ? void 0 : h.captchaToken } }, xform: kt })
        } else if ('phone' in t) {
          const { phone: u, password: f, options: h } = t
          i = yield de(this.fetch, 'POST', `${this.url}/signup`, { headers: this.headers, body: { phone: u, password: f, data: (r = h == null ? void 0 : h.data) !== null && r !== void 0 ? r : {}, channel: (s = h == null ? void 0 : h.channel) !== null && s !== void 0 ? s : 'sms', gotrue_meta_security: { captcha_token: h == null ? void 0 : h.captchaToken } }, xform: kt })
        } else throw new ni('You must provide either an email or phone number and a password')
        const { data: o, error: a } = i
        if (a || !o) return { data: { user: null, session: null }, error: a }
        const l = o.session,
          c = o.user
        return o.session && (yield this._saveSession(o.session), this._notifyAllSubscribers('SIGNED_IN', l)), { data: { user: c, session: l }, error: null }
      } catch (i) {
        if (ue(i)) return { data: { user: null, session: null }, error: i }
        throw i
      }
    })
  }
  signInWithPassword(t) {
    return ne(this, void 0, void 0, function* () {
      try {
        yield this._removeSession()
        let n
        if ('email' in t) {
          const { email: i, password: o, options: a } = t
          n = yield de(this.fetch, 'POST', `${this.url}/token?grant_type=password`, { headers: this.headers, body: { email: i, password: o, gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken } }, xform: kt })
        } else if ('phone' in t) {
          const { phone: i, password: o, options: a } = t
          n = yield de(this.fetch, 'POST', `${this.url}/token?grant_type=password`, { headers: this.headers, body: { phone: i, password: o, gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken } }, xform: kt })
        } else throw new ni('You must provide either an email or phone number and a password')
        const { data: r, error: s } = n
        return s || !r ? { data: { user: null, session: null }, error: s } : (r.session && (yield this._saveSession(r.session), this._notifyAllSubscribers('SIGNED_IN', r.session)), { data: r, error: s })
      } catch (n) {
        if (ue(n)) return { data: { user: null, session: null }, error: n }
        throw n
      }
    })
  }
  signInWithOAuth(t) {
    var n, r, s, i, o, a
    return ne(this, void 0, void 0, function* () {
      return yield this._removeSession(), yield this._handleProviderSignIn(t.provider, { redirectTo: (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo, scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes, queryParams: (s = t.options) === null || s === void 0 ? void 0 : s.queryParams, skipBrowserRedirect: (i = t.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect, flowType: (a = (o = t.options) === null || o === void 0 ? void 0 : o.flowType) !== null && a !== void 0 ? a : 'implicit' })
    })
  }
  exchangeCodeForSession(t) {
    return ne(this, void 0, void 0, function* () {
      const n = yield ti(this.storage, `${this.storageKey}-oauth-code-verifier`),
        { data: r, error: s } = yield de(this.fetch, 'POST', `${this.url}/token?grant_type=pkce`, { headers: this.headers, body: { auth_code: t, code_verifier: n }, xform: kt })
      return yield Ga(this.storage, `${this.storageKey}-oauth-code-verifier`), s || !r ? { data: { user: null, session: null }, error: s } : (r.session && (yield this._saveSession(r.session), this._notifyAllSubscribers('SIGNED_IN', r.session)), { data: r, error: s })
    })
  }
  signInWithIdToken(t) {
    return ne(this, void 0, void 0, function* () {
      yield this._removeSession()
      try {
        const { options: n, provider: r, token: s, nonce: i } = t,
          o = yield de(this.fetch, 'POST', `${this.url}/token?grant_type=id_token`, { headers: this.headers, body: { provider: r, id_token: s, nonce: i, gotrue_meta_security: { captcha_token: n == null ? void 0 : n.captchaToken } }, xform: kt }),
          { data: a, error: l } = o
        return l || !a ? { data: { user: null, session: null }, error: l } : (a.session && (yield this._saveSession(a.session), this._notifyAllSubscribers('SIGNED_IN', a.session)), { data: a, error: l })
      } catch (n) {
        if (ue(n)) return { data: { user: null, session: null }, error: n }
        throw n
      }
    })
  }
  signInWithOtp(t) {
    var n, r, s, i, o
    return ne(this, void 0, void 0, function* () {
      try {
        if ((yield this._removeSession(), 'email' in t)) {
          const { email: a, options: l } = t,
            { error: c } = yield de(this.fetch, 'POST', `${this.url}/otp`, { headers: this.headers, body: { email: a, data: (n = l == null ? void 0 : l.data) !== null && n !== void 0 ? n : {}, create_user: (r = l == null ? void 0 : l.shouldCreateUser) !== null && r !== void 0 ? r : !0, gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken } }, redirectTo: l == null ? void 0 : l.emailRedirectTo })
          return { data: { user: null, session: null }, error: c }
        }
        if ('phone' in t) {
          const { phone: a, options: l } = t,
            { error: c } = yield de(this.fetch, 'POST', `${this.url}/otp`, { headers: this.headers, body: { phone: a, data: (s = l == null ? void 0 : l.data) !== null && s !== void 0 ? s : {}, create_user: (i = l == null ? void 0 : l.shouldCreateUser) !== null && i !== void 0 ? i : !0, gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken }, channel: (o = l == null ? void 0 : l.channel) !== null && o !== void 0 ? o : 'sms' } })
          return { data: { user: null, session: null }, error: c }
        }
        throw new ni('You must provide either an email or phone number.')
      } catch (a) {
        if (ue(a)) return { data: { user: null, session: null }, error: a }
        throw a
      }
    })
  }
  verifyOtp(t) {
    var n, r
    return ne(this, void 0, void 0, function* () {
      try {
        yield this._removeSession()
        const { data: s, error: i } = yield de(this.fetch, 'POST', `${this.url}/verify`, { headers: this.headers, body: Object.assign(Object.assign({}, t), { gotrue_meta_security: { captcha_token: (n = t.options) === null || n === void 0 ? void 0 : n.captchaToken } }), redirectTo: (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo, xform: kt })
        if (i) throw i
        if (!s) throw new Error('An error occurred on token verification.')
        const o = s.session,
          a = s.user
        return o != null && o.access_token && (yield this._saveSession(o), this._notifyAllSubscribers('SIGNED_IN', o)), { data: { user: a, session: o }, error: null }
      } catch (s) {
        if (ue(s)) return { data: { user: null, session: null }, error: s }
        throw s
      }
    })
  }
  signInWithSSO(t) {
    var n, r, s
    return ne(this, void 0, void 0, function* () {
      try {
        return (
          yield this._removeSession(),
          yield de(this.fetch, 'POST', `${this.url}/sso`, { body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, 'providerId' in t ? { provider_id: t.providerId } : null), 'domain' in t ? { domain: t.domain } : null), { redirect_to: (r = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo) !== null && r !== void 0 ? r : void 0 }), !((s = t == null ? void 0 : t.options) === null || s === void 0) && s.captchaToken ? { gotrue_meta_security: { captcha_token: t.options.captchaToken } } : null), { skip_http_redirect: !0 }), headers: this.headers, xform: Ay })
        )
      } catch (i) {
        if (ue(i)) return { data: null, error: i }
        throw i
      }
    })
  }
  getSession() {
    return ne(this, void 0, void 0, function* () {
      yield this.initializePromise
      let t = null
      if (this.persistSession) {
        const i = yield ti(this.storage, this.storageKey)
        i !== null && (this._isValidSession(i) ? (t = i) : yield this._removeSession())
      } else t = this.inMemorySession
      if (!t) return { data: { session: null }, error: null }
      if (!(t.expires_at ? t.expires_at <= Date.now() / 1e3 : !1)) return { data: { session: t }, error: null }
      const { session: r, error: s } = yield this._callRefreshToken(t.refresh_token)
      return s ? { data: { session: null }, error: s } : { data: { session: r }, error: null }
    })
  }
  getUser(t) {
    var n, r
    return ne(this, void 0, void 0, function* () {
      try {
        if (!t) {
          const { data: s, error: i } = yield this.getSession()
          if (i) throw i
          t = (r = (n = s.session) === null || n === void 0 ? void 0 : n.access_token) !== null && r !== void 0 ? r : void 0
        }
        return yield de(this.fetch, 'GET', `${this.url}/user`, { headers: this.headers, jwt: t, xform: tn })
      } catch (s) {
        if (ue(s)) return { data: { user: null }, error: s }
        throw s
      }
    })
  }
  updateUser(t, n = {}) {
    return ne(this, void 0, void 0, function* () {
      try {
        const { data: r, error: s } = yield this.getSession()
        if (s) throw s
        if (!r.session) throw new Gn()
        const i = r.session,
          { data: o, error: a } = yield de(this.fetch, 'PUT', `${this.url}/user`, { headers: this.headers, redirectTo: n == null ? void 0 : n.emailRedirectTo, body: t, jwt: i.access_token, xform: tn })
        if (a) throw a
        return (i.user = o.user), yield this._saveSession(i), this._notifyAllSubscribers('USER_UPDATED', i), { data: { user: i.user }, error: null }
      } catch (r) {
        if (ue(r)) return { data: { user: null }, error: r }
        throw r
      }
    })
  }
  _decodeJWT(t) {
    return Qa(t)
  }
  setSession(t) {
    return ne(this, void 0, void 0, function* () {
      try {
        if (!t.access_token || !t.refresh_token) throw new Gn()
        const n = Date.now() / 1e3
        let r = n,
          s = !0,
          i = null
        const o = Qa(t.access_token)
        if ((o.exp && ((r = o.exp), (s = r <= n)), s)) {
          const { session: a, error: l } = yield this._callRefreshToken(t.refresh_token)
          if (l) return { data: { user: null, session: null }, error: l }
          if (!a) return { data: { user: null, session: null }, error: null }
          i = a
        } else {
          const { data: a, error: l } = yield this.getUser(t.access_token)
          if (l) throw l
          ;(i = { access_token: t.access_token, refresh_token: t.refresh_token, user: a.user, token_type: 'bearer', expires_in: r - n, expires_at: r }), yield this._saveSession(i), this._notifyAllSubscribers('SIGNED_IN', i)
        }
        return { data: { user: i.user, session: i }, error: null }
      } catch (n) {
        if (ue(n)) return { data: { session: null, user: null }, error: n }
        throw n
      }
    })
  }
  refreshSession(t) {
    var n
    return ne(this, void 0, void 0, function* () {
      try {
        if (!t) {
          const { data: i, error: o } = yield this.getSession()
          if (o) throw o
          t = (n = i.session) !== null && n !== void 0 ? n : void 0
        }
        if (!(t != null && t.refresh_token)) throw new Gn()
        const { session: r, error: s } = yield this._callRefreshToken(t.refresh_token)
        return s ? { data: { user: null, session: null }, error: s } : r ? { data: { user: r.user, session: r }, error: null } : { data: { user: null, session: null }, error: null }
      } catch (r) {
        if (ue(r)) return { data: { user: null, session: null }, error: r }
        throw r
      }
    })
  }
  _getSessionFromUrl() {
    return ne(this, void 0, void 0, function* () {
      try {
        if (!Gt()) throw new pt('No browser detected.')
        if (!this._isImplicitGrantFlow()) throw new pt('Not a valid implicit grant flow url.')
        const t = Ge('error_description')
        if (t) {
          const w = Ge('error_code')
          if (!w) throw new pt('No error_code detected.')
          const E = Ge('error')
          throw E ? new pt(t, { error: E, code: w }) : new pt('No error detected.')
        }
        const n = Ge('provider_token'),
          r = Ge('provider_refresh_token'),
          s = Ge('access_token')
        if (!s) throw new pt('No access_token detected.')
        const i = Ge('expires_in')
        if (!i) throw new pt('No expires_in detected.')
        const o = Ge('refresh_token')
        if (!o) throw new pt('No refresh_token detected.')
        const a = Ge('token_type')
        if (!a) throw new pt('No token_type detected.')
        const c = Math.round(Date.now() / 1e3) + parseInt(i),
          { data: u, error: f } = yield this.getUser(s)
        if (f) throw f
        const h = u.user,
          y = { provider_token: n, provider_refresh_token: r, access_token: s, expires_in: parseInt(i), expires_at: c, refresh_token: o, token_type: a, user: h },
          m = Ge('type')
        return (window.location.hash = ''), { data: { session: y, redirectType: m }, error: null }
      } catch (t) {
        if (ue(t)) return { data: { session: null, redirectType: null }, error: t }
        throw t
      }
    })
  }
  _isImplicitGrantFlow() {
    return Gt() && (!!Ge('access_token') || !!Ge('error_description'))
  }
  signOut() {
    var t
    return ne(this, void 0, void 0, function* () {
      const { data: n, error: r } = yield this.getSession()
      if (r) return { error: r }
      const s = (t = n.session) === null || t === void 0 ? void 0 : t.access_token
      if (s) {
        const { error: i } = yield this.admin.signOut(s)
        if (i && !(Cy(i) && (i.status === 404 || i.status === 401))) return { error: i }
      }
      return yield this._removeSession(), this._notifyAllSubscribers('SIGNED_OUT', null), { error: null }
    })
  }
  onAuthStateChange(t) {
    const n = py(),
      r = {
        id: n,
        callback: t,
        unsubscribe: () => {
          this.stateChangeEmitters.delete(n)
        }
      }
    return this.stateChangeEmitters.set(n, r), this.emitInitialSession(n), { data: { subscription: r } }
  }
  emitInitialSession(t) {
    var n, r
    return ne(this, void 0, void 0, function* () {
      try {
        const {
          data: { session: s },
          error: i
        } = yield this.getSession()
        if (i) throw i
        ;(n = this.stateChangeEmitters.get(t)) === null || n === void 0 || n.callback('INITIAL_SESSION', s)
      } catch (s) {
        ;(r = this.stateChangeEmitters.get(t)) === null || r === void 0 || r.callback('INITIAL_SESSION', null), console.error(s)
      }
    })
  }
  resetPasswordForEmail(t, n = {}) {
    return ne(this, void 0, void 0, function* () {
      try {
        return yield de(this.fetch, 'POST', `${this.url}/recover`, { body: { email: t, gotrue_meta_security: { captcha_token: n.captchaToken } }, headers: this.headers, redirectTo: n.redirectTo })
      } catch (r) {
        if (ue(r)) return { data: null, error: r }
        throw r
      }
    })
  }
  _refreshAccessToken(t) {
    return ne(this, void 0, void 0, function* () {
      try {
        const n = Date.now()
        return yield yy(
          (r) =>
            ne(this, void 0, void 0, function* () {
              return yield _y(r * 200), yield de(this.fetch, 'POST', `${this.url}/token?grant_type=refresh_token`, { body: { refresh_token: t }, headers: this.headers, xform: kt })
            }),
          (r, s, i) => i && i.error && i.error instanceof Ni && Date.now() + (r + 1) * 200 - n < ri
        )
      } catch (n) {
        if (ue(n)) return { data: { session: null, user: null }, error: n }
        throw n
      }
    })
  }
  _isValidSession(t) {
    return typeof t == 'object' && t !== null && 'access_token' in t && 'refresh_token' in t && 'expires_at' in t
  }
  _handleProviderSignIn(t, n) {
    return ne(this, void 0, void 0, function* () {
      const r = yield this._getUrlForProvider(t, { redirectTo: n.redirectTo, scopes: n.scopes, queryParams: n.queryParams, flowType: n.flowType })
      return Gt() && !n.skipBrowserRedirect && window.location.assign(r), { data: { provider: t, url: r }, error: null }
    })
  }
  _recoverAndRefresh() {
    var t
    return ne(this, void 0, void 0, function* () {
      try {
        const n = yield ti(this.storage, this.storageKey)
        if (!this._isValidSession(n)) {
          n !== null && (yield this._removeSession())
          return
        }
        const r = Math.round(Date.now() / 1e3)
        if (((t = n.expires_at) !== null && t !== void 0 ? t : 1 / 0) < r + Ny)
          if (this.autoRefreshToken && n.refresh_token) {
            const { error: s } = yield this._callRefreshToken(n.refresh_token)
            s && (console.log(s.message), yield this._removeSession())
          } else yield this._removeSession()
        else this.persistSession && (yield this._saveSession(n)), this._notifyAllSubscribers('SIGNED_IN', n)
      } catch (n) {
        console.error(n)
        return
      }
    })
  }
  _callRefreshToken(t) {
    var n, r
    return ne(this, void 0, void 0, function* () {
      if (this.refreshingDeferred) return this.refreshingDeferred.promise
      try {
        if (((this.refreshingDeferred = new $s()), !t)) throw new Gn()
        const { data: s, error: i } = yield this._refreshAccessToken(t)
        if (i) throw i
        if (!s.session) throw new Gn()
        yield this._saveSession(s.session), this._notifyAllSubscribers('TOKEN_REFRESHED', s.session)
        const o = { session: s.session, error: null }
        return this.refreshingDeferred.resolve(o), o
      } catch (s) {
        if (ue(s)) {
          const i = { session: null, error: s }
          return (n = this.refreshingDeferred) === null || n === void 0 || n.resolve(i), i
        }
        throw ((r = this.refreshingDeferred) === null || r === void 0 || r.reject(s), s)
      } finally {
        this.refreshingDeferred = null
      }
    })
  }
  _notifyAllSubscribers(t, n, r = !0) {
    this.broadcastChannel && r && this.broadcastChannel.postMessage({ event: t, session: n }), this.stateChangeEmitters.forEach((s) => s.callback(t, n))
  }
  _saveSession(t) {
    return ne(this, void 0, void 0, function* () {
      this.persistSession || (this.inMemorySession = t), this.persistSession && t.expires_at && (yield this._persistSession(t))
    })
  }
  _persistSession(t) {
    return Ja(this.storage, this.storageKey, t)
  }
  _removeSession() {
    return ne(this, void 0, void 0, function* () {
      this.persistSession ? yield Ga(this.storage, this.storageKey) : (this.inMemorySession = null)
    })
  }
  _removeVisibilityChangedCallback() {
    const t = this.visibilityChangedCallback
    this.visibilityChangedCallback = null
    try {
      t && Gt() && window != null && window.removeEventListener && window.removeEventListener('visibilitychange', t)
    } catch (n) {
      console.error('removing visibilitychange callback failed', n)
    }
  }
  _startAutoRefresh() {
    return ne(this, void 0, void 0, function* () {
      yield this._stopAutoRefresh()
      const t = setInterval(() => this._autoRefreshTokenTick(), ri)
      ;(this.autoRefreshTicker = t), t && typeof t == 'object' && typeof t.unref == 'function' && t.unref(), yield this._autoRefreshTokenTick()
    })
  }
  _stopAutoRefresh() {
    return ne(this, void 0, void 0, function* () {
      const t = this.autoRefreshTicker
      ;(this.autoRefreshTicker = null), t && clearInterval(t)
    })
  }
  startAutoRefresh() {
    return ne(this, void 0, void 0, function* () {
      this._removeVisibilityChangedCallback(), yield this._startAutoRefresh()
    })
  }
  stopAutoRefresh() {
    return ne(this, void 0, void 0, function* () {
      this._removeVisibilityChangedCallback(), yield this._stopAutoRefresh()
    })
  }
  _autoRefreshTokenTick() {
    return ne(this, void 0, void 0, function* () {
      const t = Date.now()
      try {
        const {
          data: { session: n }
        } = yield this.getSession()
        if (!n || !n.refresh_token || !n.expires_at) return
        Math.floor((n.expires_at * 1e3 - t) / ri) < Ky && (yield this._callRefreshToken(n.refresh_token))
      } catch (n) {
        console.error('Auto refresh tick failed with error. This is likely a transient error.', n)
      }
    })
  }
  _handleVisibilityChange() {
    return ne(this, void 0, void 0, function* () {
      if (!Gt() || !(window != null && window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), !1
      try {
        ;(this.visibilityChangedCallback = () =>
          ne(this, void 0, void 0, function* () {
            return yield this._onVisibilityChanged(!1)
          })),
          window == null || window.addEventListener('visibilitychange', this.visibilityChangedCallback),
          yield this._onVisibilityChanged(!0)
      } catch (t) {
        console.error('_handleVisibilityChange', t)
      }
    })
  }
  _onVisibilityChanged(t) {
    return ne(this, void 0, void 0, function* () {
      document.visibilityState === 'visible' ? (t || (yield this.initializePromise, yield this._recoverAndRefresh()), this.autoRefreshToken && this._startAutoRefresh()) : document.visibilityState === 'hidden' && this.autoRefreshToken && this._stopAutoRefresh()
    })
  }
  _getUrlForProvider(t, n) {
    return ne(this, void 0, void 0, function* () {
      const r = [`provider=${encodeURIComponent(t)}`]
      if ((n != null && n.redirectTo && r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`), n != null && n.scopes && r.push(`scopes=${encodeURIComponent(n.scopes)}`), (n == null ? void 0 : n.flowType) === 'pkce')) {
        const s = by()
        yield Ja(this.storage, `${this.storageKey}-oauth-code-verifier`, s)
        const i = yield Ty(s),
          o = new URLSearchParams({ flow_type: `${encodeURIComponent(n.flowType)}`, code_challenge: `${encodeURIComponent(i)}`, code_challenge_method: `${encodeURIComponent('s256')}` })
        r.push(o.toString())
      }
      if (n != null && n.queryParams) {
        const s = new URLSearchParams(n.queryParams)
        r.push(s.toString())
      }
      return `${this.url}/authorize?${r.join('&')}`
    })
  }
  _unenroll(t) {
    var n
    return ne(this, void 0, void 0, function* () {
      try {
        const { data: r, error: s } = yield this.getSession()
        return s ? { data: null, error: s } : yield de(this.fetch, 'DELETE', `${this.url}/factors/${t.factorId}`, { headers: this.headers, jwt: (n = r == null ? void 0 : r.session) === null || n === void 0 ? void 0 : n.access_token })
      } catch (r) {
        if (ue(r)) return { data: null, error: r }
        throw r
      }
    })
  }
  _enroll(t) {
    var n, r
    return ne(this, void 0, void 0, function* () {
      try {
        const { data: s, error: i } = yield this.getSession()
        if (i) return { data: null, error: i }
        const { data: o, error: a } = yield de(this.fetch, 'POST', `${this.url}/factors`, { body: { friendly_name: t.friendlyName, factor_type: t.factorType, issuer: t.issuer }, headers: this.headers, jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token })
        return a ? { data: null, error: a } : (!((r = o == null ? void 0 : o.totp) === null || r === void 0) && r.qr_code && (o.totp.qr_code = `data:image/svg+xml;utf-8,${o.totp.qr_code}`), { data: o, error: null })
      } catch (s) {
        if (ue(s)) return { data: null, error: s }
        throw s
      }
    })
  }
  _verify(t) {
    var n
    return ne(this, void 0, void 0, function* () {
      try {
        const { data: r, error: s } = yield this.getSession()
        if (s) return { data: null, error: s }
        const { data: i, error: o } = yield de(this.fetch, 'POST', `${this.url}/factors/${t.factorId}/verify`, { body: { code: t.code, challenge_id: t.challengeId }, headers: this.headers, jwt: (n = r == null ? void 0 : r.session) === null || n === void 0 ? void 0 : n.access_token })
        return o ? { data: null, error: o } : (yield this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + i.expires_in }, i)), this._notifyAllSubscribers('MFA_CHALLENGE_VERIFIED', i), { data: i, error: o })
      } catch (r) {
        if (ue(r)) return { data: null, error: r }
        throw r
      }
    })
  }
  _challenge(t) {
    var n
    return ne(this, void 0, void 0, function* () {
      try {
        const { data: r, error: s } = yield this.getSession()
        return s ? { data: null, error: s } : yield de(this.fetch, 'POST', `${this.url}/factors/${t.factorId}/challenge`, { headers: this.headers, jwt: (n = r == null ? void 0 : r.session) === null || n === void 0 ? void 0 : n.access_token })
      } catch (r) {
        if (ue(r)) return { data: null, error: r }
        throw r
      }
    })
  }
  _challengeAndVerify(t) {
    return ne(this, void 0, void 0, function* () {
      const { data: n, error: r } = yield this._challenge({ factorId: t.factorId })
      return r ? { data: null, error: r } : yield this._verify({ factorId: t.factorId, challengeId: n.id, code: t.code })
    })
  }
  _listFactors() {
    return ne(this, void 0, void 0, function* () {
      const {
        data: { user: t },
        error: n
      } = yield this.getUser()
      if (n) return { data: null, error: n }
      const r = (t == null ? void 0 : t.factors) || [],
        s = r.filter((i) => i.factor_type === 'totp' && i.status === 'verified')
      return { data: { all: r, totp: s }, error: null }
    })
  }
  _getAuthenticatorAssuranceLevel() {
    var t, n
    return ne(this, void 0, void 0, function* () {
      const {
        data: { session: r },
        error: s
      } = yield this.getSession()
      if (s) return { data: null, error: s }
      if (!r) return { data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] }, error: null }
      const i = this._decodeJWT(r.access_token)
      let o = null
      i.aal && (o = i.aal)
      let a = o
      ;((n = (t = r.user.factors) === null || t === void 0 ? void 0 : t.filter((u) => u.status === 'verified')) !== null && n !== void 0 ? n : []).length > 0 && (a = 'aal2')
      const c = i.amr || []
      return { data: { currentLevel: o, nextLevel: a, currentAuthenticationMethods: c }, error: null }
    })
  }
}
class Wy extends qy {
  constructor(t) {
    super(t)
  }
}
var zy =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i)
          })
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(u) {
        try {
          c(r.next(u))
        } catch (f) {
          o(f)
        }
      }
      function l(u) {
        try {
          c(r.throw(u))
        } catch (f) {
          o(f)
        }
      }
      function c(u) {
        u.done ? i(u.value) : s(u.value).then(a, l)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
const Jy = { headers: oy },
  Gy = { schema: 'public' },
  Qy = { autoRefreshToken: !0, persistSession: !0, detectSessionInUrl: !0 },
  Xy = {}
class Yy {
  constructor(t, n, r) {
    var s, i, o, a, l, c, u, f
    if (((this.supabaseUrl = t), (this.supabaseKey = n), !t)) throw new Error('supabaseUrl is required.')
    if (!n) throw new Error('supabaseKey is required.')
    const h = fy(t)
    if (((this.realtimeUrl = `${h}/realtime/v1`.replace(/^http/i, 'ws')), (this.authUrl = `${h}/auth/v1`), (this.storageUrl = `${h}/storage/v1`), h.match(/(supabase\.co)|(supabase\.in)/))) {
      const v = h.split('.')
      this.functionsUrl = `${v[0]}.functions.${v[1]}.${v[2]}`
    } else this.functionsUrl = `${h}/functions/v1`
    const m = `sb-${new URL(this.authUrl).hostname.split('.')[0]}-auth-token`,
      w = { db: Gy, realtime: Xy, auth: Object.assign(Object.assign({}, Qy), { storageKey: m }), global: Jy },
      E = hy(r ?? {}, w)
    ;(this.storageKey = (i = (s = E.auth) === null || s === void 0 ? void 0 : s.storageKey) !== null && i !== void 0 ? i : ''),
      (this.headers = (a = (o = E.global) === null || o === void 0 ? void 0 : o.headers) !== null && a !== void 0 ? a : {}),
      (this.auth = this._initSupabaseAuthClient((l = E.auth) !== null && l !== void 0 ? l : {}, this.headers, (c = E.global) === null || c === void 0 ? void 0 : c.fetch)),
      (this.fetch = uy(n, this._getAccessToken.bind(this), (u = E.global) === null || u === void 0 ? void 0 : u.fetch)),
      (this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers }, E.realtime))),
      (this.rest = new f_(`${h}/rest/v1`, { headers: this.headers, schema: (f = E.db) === null || f === void 0 ? void 0 : f.schema, fetch: this.fetch })),
      this._listenForAuthEvents()
  }
  get functions() {
    return new n_(this.functionsUrl, { headers: this.headers, customFetch: this.fetch })
  }
  get storage() {
    return new sy(this.storageUrl, this.headers, this.fetch)
  }
  from(t) {
    return this.rest.from(t)
  }
  rpc(t, n = {}, r) {
    return this.rest.rpc(t, n, r)
  }
  channel(t, n = { config: {} }) {
    return this.realtime.channel(t, n)
  }
  getChannels() {
    return this.realtime.getChannels()
  }
  removeChannel(t) {
    return this.realtime.removeChannel(t)
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels()
  }
  _getAccessToken() {
    var t, n
    return zy(this, void 0, void 0, function* () {
      const { data: r } = yield this.auth.getSession()
      return (n = (t = r.session) === null || t === void 0 ? void 0 : t.access_token) !== null && n !== void 0 ? n : null
    })
  }
  _initSupabaseAuthClient({ autoRefreshToken: t, persistSession: n, detectSessionInUrl: r, storage: s, storageKey: i }, o, a) {
    const l = { Authorization: `Bearer ${this.supabaseKey}`, apikey: `${this.supabaseKey}` }
    return new Wy({ url: this.authUrl, headers: Object.assign(Object.assign({}, l), o), storageKey: i, autoRefreshToken: t, persistSession: n, detectSessionInUrl: r, storage: s, fetch: a })
  }
  _initRealtimeClient(t) {
    return new W_(this.realtimeUrl, Object.assign(Object.assign({}, t), { params: Object.assign({ apikey: this.supabaseKey }, t == null ? void 0 : t.params) }))
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((n, r) => {
      this._handleTokenChanged(n, r == null ? void 0 : r.access_token, 'CLIENT')
    })
  }
  _handleTokenChanged(t, n, r) {
    ;(t === 'TOKEN_REFRESHED' || t === 'SIGNED_IN') && this.changedAccessToken !== n ? (this.realtime.setAuth(n ?? null), (this.changedAccessToken = n)) : (t === 'SIGNED_OUT' || t === 'USER_DELETED') && (this.realtime.setAuth(this.supabaseKey), r == 'STORAGE' && this.auth.signOut(), (this.changedAccessToken = void 0))
  }
}
const Zy = (e, t, n) => new Yy(e, t, n),
  bo = () => {
    const {
        supabase: { cookies: e }
      } = Tr().public,
      t = `${e.name}-access-token`
    return vm(t)
  },
  ev = () => {
    const e = Pe()
    if (!e._supabaseAuthClient) {
      const t = bo(),
        n = t.value ? `Bearer ${t.value}` : void 0,
        {
          supabase: { url: r, key: s, client: i }
        } = Tr().public,
        o = n ? Wc(i, { global: { headers: { Authorization: n } } }) : i
      e._supabaseAuthClient = Zy(r, s, o)
    }
    return e._supabaseAuthClient
  },
  tv = () => {
    const e = Jc('supabase_user')
    return bo().value || (e.value = null), e
  },
  nv = Rt(async (e) => {
    let t, n
    const r = tv(),
      s = ev()
    if (!r.value) {
      const i = bo()
      if (i.value) {
        const {
          data: { user: o },
          error: a
        } = (([t, n] = ns(() => s.auth.getUser(i.value))), (t = await t), n(), t)
        a ? ((i.value = null), (r.value = null)) : (r.value = o)
      }
    }
    e.hooks.hook('app:mounted', () => {
      s.auth.onAuthStateChange(async (i, o) => {
        if (o) {
          await Xa(i, o)
          const a = o ? await s.auth.getUser() : null
          r.value = a ? a.data.user : null
        } else (r.value = null), await Xa(i, o)
      })
    })
  }),
  Xa = (e, t) => $fetch('/api/_supabase/session', { method: 'POST', body: { event: e, session: t } }),
  rv = Rt((e) => {
    const t = Fn(),
      n = Tr(),
      r = new Set()
    t.beforeEach(() => {
      r.clear()
    }),
      e.hook('app:chunkError', ({ error: s }) => {
        r.add(s)
      }),
      t.onError((s, i) => {
        if (r.has(s)) {
          const a = 'href' in i && i.href.startsWith('#') ? n.app.baseURL + i.href : Er(n.app.baseURL, i.fullPath)
          km({ path: a, persistState: !0 })
        }
      })
  }),
  sv = Rt((e) => {
    Sm() &&
      (e.hooks.hook('link:prefetch', async (t) => {
        Os(t).protocol || (await wa(t))
      }),
      Fn().beforeResolve(async (t, n) => {
        if (t.path === n.path) return
        const r = await wa(t.path)
        r && Object.assign(e.static.data, r.data)
      }))
  }),
  iv = [Am, xm, Dm, Um, Jg, Gg, nv, rv, sv],
  ov = (e, t) =>
    t.path
      .replace(/(:\w+)\([^)]+\)/g, '$1')
      .replace(/(:\w+)[?+*]/g, '$1')
      .replace(/:\w+/g, (n) => {
        var r
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ''
      }),
  av = (e, t) => {
    const n = e.route.matched.find((s) => {
        var i
        return ((i = s.components) == null ? void 0 : i.default) === e.Component.type
      }),
      r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && ov(e.route, n))
    return typeof r == 'function' ? r(e.route) : r
  },
  lv = (e, t) => ({ default: () => (e ? st(Ff, e === !0 ? {} : e, t) : t) }),
  cv = Et({
    name: 'FragmentWrapper',
    setup(e, { slots: t }) {
      return () => {
        var n
        return (n = t.default) == null ? void 0 : n.call(t)
      }
    }
  }),
  Fi = (e, t, n) => ({ default: () => (t ? st(e, t === !0 ? {} : t, n) : st(cv, {}, n)) }),
  uv = Et({
    name: 'NuxtPage',
    inheritAttrs: !1,
    props: { name: { type: String }, transition: { type: [Boolean, Object], default: void 0 }, keepalive: { type: [Boolean, Object], default: void 0 }, route: { type: Object }, pageKey: { type: [Function, String], default: null } },
    setup(e, { attrs: t }) {
      const n = Pe()
      return () =>
        st(
          lu,
          { name: e.name, route: e.route, ...t },
          {
            default: (r) => {
              if (!r.Component) return
              const s = av(r, e.pageKey),
                i = n.deferHydration(),
                o = !!(e.transition ?? r.route.meta.pageTransition ?? ji),
                a =
                  o &&
                  hv(
                    [
                      e.transition,
                      r.route.meta.pageTransition,
                      ji,
                      {
                        onAfterLeave: () => {
                          n.callHook('page:transition:finish', r.Component)
                        }
                      }
                    ].filter(Boolean)
                  )
              return Fi(
                Ps,
                o && a,
                lv(
                  e.keepalive ?? r.route.meta.keepalive ?? Im,
                  st(
                    xl,
                    {
                      onPending: () => n.callHook('page:start', r.Component),
                      onResolve: () => {
                        Kt(() => n.callHook('page:finish', r.Component).finally(i))
                      }
                    },
                    { default: () => st(dv, { key: s, routeProps: r, pageKey: s, hasTransition: o }) }
                  )
                )
              ).default()
            }
          }
        )
    }
  })
function fv(e) {
  return Array.isArray(e) ? e : e ? [e] : []
}
function hv(e) {
  const t = e.map((n) => ({ ...n, onAfterLeave: fv(n.onAfterLeave) }))
  return Wc(...t)
}
const dv = Et({
    name: 'RouteProvider',
    props: ['routeProps', 'pageKey', 'hasTransition'],
    setup(e) {
      const t = e.pageKey,
        n = e.routeProps.route,
        r = {}
      for (const s in e.routeProps.route) r[s] = je(() => (t === e.pageKey ? e.routeProps.route[s] : n[s]))
      return Pn('_route', it(r)), () => st(e.routeProps.Component)
    }
  }),
  pv = Et({
    name: 'LayoutLoader',
    inheritAttrs: !1,
    props: { name: String },
    async setup(e, t) {
      const n = await bn[e.name]().then((r) => r.default || r)
      return () => st(n, t.attrs, t.slots)
    }
  }),
  mv = Et({
    name: 'NuxtLayout',
    inheritAttrs: !1,
    props: { name: { type: [String, Boolean, Object], default: null } },
    setup(e, t) {
      const n = Me('_route'),
        r = n === Gc() ? Fg() : n,
        s = je(() => ke(e.name) ?? r.meta.layout ?? 'default')
      return () => {
        const i = s.value && s.value in bn,
          o = r.meta.layoutTransition ?? jm
        return Fi(Ps, i && o, { default: () => Fi(pv, i && { key: s.value, name: s.value, ...t.attrs }, t.slots).default() }).default()
      }
    }
  })
const gv = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  _v = {}
function yv(e, t) {
  const n = uv,
    r = mv
  return It(), rn(r, null, { default: bs(() => [ye(n)]), _: 1 })
}
const vv = gv(_v, [['render', yv]]),
  Ya = {
    __name: 'nuxt-root',
    setup(e) {
      const t = oe(() => Q(() => import('./error-component.153a48ef.js'), [], import.meta.url).then((a) => a.default || a)),
        n = () => null,
        r = Pe(),
        s = r.deferHydration()
      Pn('_route', Gc()), r.hooks.callHookWith((a) => a.map((l) => l()), 'vue:setup')
      const i = Ss()
      Nl((a, l, c) => {
        if ((r.hooks.callHook('vue:error', a, l, c).catch((u) => console.error('[nuxt] Error in `vue:error` hook', u)), _m(a) && (a.fatal || a.unhandled))) return _t(r, vn, [a]), !1
      })
      const { islandContext: o } = !1
      return (a, l) => (It(), rn(xl, { onResolve: ke(s) }, { default: bs(() => [ke(i) ? (It(), rn(ke(t), { key: 0, error: ke(i) }, null, 8, ['error'])) : ke(o) ? (It(), rn(ke(n), { key: 1, context: ke(o) }, null, 8, ['context'])) : (It(), rn(ke(vv), { key: 2 }))]), _: 1 }, 8, ['onResolve']))
    }
  }
globalThis.$fetch || (globalThis.$fetch = Jd.create({ baseURL: Qd() }))
let Za
const bv = hp(iv)
;(Za = async function () {
  var s
  const n = !!((s = window.__NUXT__) != null && s.serverRendered) ? ud(Ya) : cd(Ya),
    r = cp({ vueApp: n })
  try {
    await fp(r, bv)
  } catch (i) {
    await r.callHook('app:error', i), (r.payload.error = r.payload.error || i)
  }
  try {
    await r.hooks.callHook('app:created', n), await r.hooks.callHook('app:beforeMount', n), n.mount('#' + Lm), await r.hooks.callHook('app:mounted', n), await Kt()
  } catch (i) {
    await r.callHook('app:error', i), (r.payload.error = r.payload.error || i)
  }
}),
  Za().catch((e) => {
    console.error('Error while mounting app:', e)
  })
export {
  Le as $,
  jd as A,
  bs as B,
  Nv as C,
  gv as D,
  Vv as E,
  Pe as F,
  vt as G,
  Qc as H,
  Vf as I,
  no as J,
  Fn as K,
  wr as L,
  Es as M,
  Ts as N,
  Os as O,
  Rd as P,
  yb as Q,
  Ps as R,
  tc as S,
  xn as T,
  Ev as U,
  bo as V,
  Wc as W,
  Zy as X,
  _b as Y,
  Ll as Z,
  Q as _,
  Gc as a,
  to as a$,
  sl as a0,
  xe as a1,
  Ff as a2,
  fs as a3,
  On as a4,
  xl as a5,
  Bv as a6,
  hb as a7,
  co as a8,
  kv as a9,
  eo as aA,
  Nn as aB,
  ld as aC,
  sb as aD,
  mb as aE,
  Me as aF,
  Ch as aG,
  wl as aH,
  Dt as aI,
  an as aJ,
  Ee as aK,
  Jv as aL,
  Gr as aM,
  cn as aN,
  kn as aO,
  tb as aP,
  _h as aQ,
  as as aR,
  os as aS,
  Hl as aT,
  Kf as aU,
  Ul as aV,
  Nl as aW,
  zf as aX,
  Wf as aY,
  Hu as aZ,
  qf as a_,
  Xe as aa,
  Ht as ab,
  We as ac,
  us as ad,
  wt as ae,
  lb as af,
  cd as ag,
  Wv as ah,
  uh as ai,
  nb as aj,
  ch as ak,
  ud as al,
  Mv as am,
  qv as an,
  nc as ao,
  ye as ap,
  Ov as aq,
  Vh as ar,
  Qv as as,
  Xv as at,
  Gv as au,
  cb as av,
  Kn as aw,
  Tv as ax,
  il as ay,
  al as az,
  Kt as b,
  xv as b0,
  Pn as b1,
  Tl as b2,
  Av as b3,
  Ol as b4,
  it as b5,
  bl as b6,
  zv as b7,
  aa as b8,
  Uv as b9,
  ed as bA,
  wi as bB,
  od as bC,
  cc as bD,
  Sv as bE,
  Df as bF,
  Hf as bG,
  jv as bH,
  rb as bI,
  Yv as bJ,
  Iv as bK,
  pb as bL,
  ib as bM,
  db as bN,
  $v as bO,
  vb as bP,
  pm as bQ,
  r_ as bR,
  Hv as ba,
  Dv as bb,
  ab as bc,
  mr as bd,
  qo as be,
  Cf as bf,
  An as bg,
  df as bh,
  Cv as bi,
  ai as bj,
  Th as bk,
  ob as bl,
  Rv as bm,
  Br as bn,
  Fv as bo,
  Qi as bp,
  Kv as bq,
  Pv as br,
  eb as bs,
  ub as bt,
  fb as bu,
  Rh as bv,
  Il as bw,
  _c as bx,
  td as by,
  yc as bz,
  rn as c,
  oe as d,
  im as e,
  Tr as f,
  gh as g,
  Et as h,
  Zv as i,
  xd as j,
  st as k,
  vm as l,
  je as m,
  wv as n,
  It as o,
  Jc as p,
  gb as q,
  Er as r,
  Sc as s,
  _f as t,
  ke as u,
  ae as v,
  Ut as w,
  Lv as x,
  Cc as y,
  Ye as z
}
