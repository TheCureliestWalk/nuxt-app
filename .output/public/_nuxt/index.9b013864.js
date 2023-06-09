import { F as j, G as x, H as S, I as O, J as k, w as H, u as A, z as M } from './entry.5fb35958.js'
const U = () => null
function X(...s) {
  var u
  const n = typeof s[s.length - 1] == 'string' ? s.pop() : void 0
  typeof s[0] != 'string' && s.unshift(n)
  let [r, e, t = {}] = s
  if (typeof r != 'string') throw new TypeError('[nuxt] [asyncData] key must be a string.')
  if (typeof e != 'function') throw new TypeError('[nuxt] [asyncData] handler must be a function.')
  ;(t.server = t.server ?? !0), (t.default = t.default ?? U), (t.lazy = t.lazy ?? !1), (t.immediate = t.immediate ?? !0)
  const a = j(),
    o = () => (a.isHydrating ? a.payload.data[r] : a.static.data[r]),
    l = () => o() !== void 0
  a._asyncData[r] || (a._asyncData[r] = { data: x(o() ?? ((u = t.default) == null ? void 0 : u.call(t)) ?? null), pending: x(!l()), error: x(a.payload._errors[r] ? S(a.payload._errors[r]) : null) })
  const i = { ...a._asyncData[r] }
  i.refresh = i.execute = (d = {}) => {
    if (a._asyncDataPromises[r]) {
      if (d.dedupe === !1) return a._asyncDataPromises[r]
      a._asyncDataPromises[r].cancelled = !0
    }
    if (d._initial && l()) return o()
    i.pending.value = !0
    const _ = new Promise((c, p) => {
      try {
        c(e(a))
      } catch (b) {
        p(b)
      }
    })
      .then((c) => {
        if (_.cancelled) return a._asyncDataPromises[r]
        let p = c
        t.transform && (p = t.transform(c)), t.pick && (p = F(p, t.pick)), (i.data.value = p), (i.error.value = null)
      })
      .catch((c) => {
        var p
        if (_.cancelled) return a._asyncDataPromises[r]
        ;(i.error.value = c), (i.data.value = A(((p = t.default) == null ? void 0 : p.call(t)) ?? null))
      })
      .finally(() => {
        _.cancelled || ((i.pending.value = !1), (a.payload.data[r] = i.data.value), i.error.value && (a.payload._errors[r] = S(i.error.value)), delete a._asyncDataPromises[r])
      })
    return (a._asyncDataPromises[r] = _), a._asyncDataPromises[r]
  }
  const h = () => i.refresh({ _initial: !0 }),
    f = t.server !== !1 && a.payload.serverRendered
  {
    const d = M()
    if (d && !d._nuxtOnBeforeMountCbs) {
      d._nuxtOnBeforeMountCbs = []
      const c = d._nuxtOnBeforeMountCbs
      d &&
        (O(() => {
          c.forEach((p) => {
            p()
          }),
            c.splice(0, c.length)
        }),
        k(() => c.splice(0, c.length)))
    }
    f && a.isHydrating && l() ? (i.pending.value = !1) : d && ((a.payload.serverRendered && a.isHydrating) || t.lazy) && t.immediate ? d._nuxtOnBeforeMountCbs.push(h) : t.immediate && h(), t.watch && H(t.watch, () => i.refresh())
    const _ = a.hook('app:data:refresh', (c) => {
      if (!c || c.includes(r)) return i.refresh()
    })
    d && k(_)
  }
  const y = Promise.resolve(a._asyncDataPromises[r]).then(() => i)
  return Object.assign(y, i), y
}
function F(s, n) {
  const r = {}
  for (const e of n) r[e] = s[e]
  return r
}
const R = { ignoreUnknown: !1, respectType: !1, respectFunctionNames: !1, respectFunctionProperties: !1, unorderedObjects: !0, unorderedArrays: !1, unorderedSets: !1 }
function N(s, n = {}) {
  n = { ...R, ...n }
  const r = D(n)
  return r.dispatch(s), r.toString()
}
function D(s) {
  const n = []
  let r = []
  const e = (t) => {
    n.push(t)
  }
  return {
    toString() {
      return n.join('')
    },
    getContext() {
      return r
    },
    dispatch(t) {
      return s.replacer && (t = s.replacer(t)), this['_' + (t === null ? 'null' : typeof t)](t)
    },
    _object(t) {
      const a = /\[object (.*)]/i,
        o = Object.prototype.toString.call(t),
        l = a.exec(o),
        i = l ? l[1].toLowerCase() : 'unknown:[' + o.toLowerCase() + ']'
      let h = null
      if ((h = r.indexOf(t)) >= 0) return this.dispatch('[CIRCULAR:' + h + ']')
      if ((r.push(t), typeof Buffer < 'u' && Buffer.isBuffer && Buffer.isBuffer(t))) return e('buffer:'), e(t.toString('utf8'))
      if (i !== 'object' && i !== 'function' && i !== 'asyncfunction')
        if (this['_' + i]) this['_' + i](t)
        else {
          if (s.ignoreUnknown) return e('[' + i + ']')
          throw new Error('Unknown object type "' + i + '"')
        }
      else {
        let f = Object.keys(t)
        s.unorderedObjects && (f = f.sort()),
          s.respectType !== !1 && !v(t) && f.splice(0, 0, 'prototype', '__proto__', 'letructor'),
          s.excludeKeys &&
            (f = f.filter(function (y) {
              return !s.excludeKeys(y)
            })),
          e('object:' + f.length + ':')
        for (const y of f) this.dispatch(y), e(':'), s.excludeValues || this.dispatch(t[y]), e(',')
      }
    },
    _array(t, a) {
      if (((a = typeof a < 'u' ? a : s.unorderedArrays !== !1), e('array:' + t.length + ':'), !a || t.length <= 1)) {
        for (const i of t) this.dispatch(i)
        return
      }
      const o = [],
        l = t.map((i) => {
          const h = D(s)
          return h.dispatch(i), o.push(h.getContext()), h.toString()
        })
      return (r = [...r, ...o]), l.sort(), this._array(l, !1)
    },
    _date(t) {
      return e('date:' + t.toJSON())
    },
    _symbol(t) {
      return e('symbol:' + t.toString())
    },
    _error(t) {
      return e('error:' + t.toString())
    },
    _boolean(t) {
      return e('bool:' + t.toString())
    },
    _string(t) {
      e('string:' + t.length + ':'), e(t.toString())
    },
    _function(t) {
      e('fn:'), v(t) ? this.dispatch('[native]') : this.dispatch(t.toString()), s.respectFunctionNames !== !1 && this.dispatch('function-name:' + String(t.name)), s.respectFunctionProperties && this._object(t)
    },
    _number(t) {
      return e('number:' + t.toString())
    },
    _xml(t) {
      return e('xml:' + t.toString())
    },
    _null() {
      return e('Null')
    },
    _undefined() {
      return e('Undefined')
    },
    _regexp(t) {
      return e('regex:' + t.toString())
    },
    _uint8array(t) {
      return e('uint8array:'), this.dispatch(Array.prototype.slice.call(t))
    },
    _uint8clampedarray(t) {
      return e('uint8clampedarray:'), this.dispatch(Array.prototype.slice.call(t))
    },
    _int8array(t) {
      return e('int8array:'), this.dispatch(Array.prototype.slice.call(t))
    },
    _uint16array(t) {
      return e('uint16array:'), this.dispatch(Array.prototype.slice.call(t))
    },
    _int16array(t) {
      return e('int16array:'), this.dispatch(Array.prototype.slice.call(t))
    },
    _uint32array(t) {
      return e('uint32array:'), this.dispatch(Array.prototype.slice.call(t))
    },
    _int32array(t) {
      return e('int32array:'), this.dispatch(Array.prototype.slice.call(t))
    },
    _float32array(t) {
      return e('float32array:'), this.dispatch(Array.prototype.slice.call(t))
    },
    _float64array(t) {
      return e('float64array:'), this.dispatch(Array.prototype.slice.call(t))
    },
    _arraybuffer(t) {
      return e('arraybuffer:'), this.dispatch(new Uint8Array(t))
    },
    _url(t) {
      return e('url:' + t.toString())
    },
    _map(t) {
      e('map:')
      const a = [...t]
      return this._array(a, s.unorderedSets !== !1)
    },
    _set(t) {
      e('set:')
      const a = [...t]
      return this._array(a, s.unorderedSets !== !1)
    },
    _file(t) {
      return e('file:'), this.dispatch([t.name, t.size, t.type, t.lastModfied])
    },
    _blob() {
      if (s.ignoreUnknown) return e('[blob]')
      throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)
    },
    _domwindow() {
      return e('domwindow')
    },
    _bigint(t) {
      return e('bigint:' + t.toString())
    },
    _process() {
      return e('process')
    },
    _timer() {
      return e('timer')
    },
    _pipe() {
      return e('pipe')
    },
    _tcp() {
      return e('tcp')
    },
    _udp() {
      return e('udp')
    },
    _tty() {
      return e('tty')
    },
    _statwatcher() {
      return e('statwatcher')
    },
    _securecontext() {
      return e('securecontext')
    },
    _connection() {
      return e('connection')
    },
    _zlib() {
      return e('zlib')
    },
    _context() {
      return e('context')
    },
    _nodescript() {
      return e('nodescript')
    },
    _httpparser() {
      return e('httpparser')
    },
    _dataview() {
      return e('dataview')
    },
    _signal() {
      return e('signal')
    },
    _fsevent() {
      return e('fsevent')
    },
    _tlswrap() {
      return e('tlswrap')
    }
  }
}
function v(s) {
  return typeof s != 'function' ? !1 : /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(s)) != null
}
class m {
  constructor(n, r) {
    ;(n = this.words = n || []), (this.sigBytes = r !== void 0 ? r : n.length * 4)
  }
  toString(n) {
    return (n || T).stringify(this)
  }
  concat(n) {
    if ((this.clamp(), this.sigBytes % 4))
      for (let r = 0; r < n.sigBytes; r++) {
        const e = (n.words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255
        this.words[(this.sigBytes + r) >>> 2] |= e << (24 - ((this.sigBytes + r) % 4) * 8)
      }
    else for (let r = 0; r < n.sigBytes; r += 4) this.words[(this.sigBytes + r) >>> 2] = n.words[r >>> 2]
    return (this.sigBytes += n.sigBytes), this
  }
  clamp() {
    ;(this.words[this.sigBytes >>> 2] &= 4294967295 << (32 - (this.sigBytes % 4) * 8)), (this.words.length = Math.ceil(this.sigBytes / 4))
  }
  clone() {
    return new m([...this.words])
  }
}
const T = {
    stringify(s) {
      const n = []
      for (let r = 0; r < s.sigBytes; r++) {
        const e = (s.words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255
        n.push((e >>> 4).toString(16), (e & 15).toString(16))
      }
      return n.join('')
    }
  },
  E = {
    stringify(s) {
      const n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        r = []
      for (let e = 0; e < s.sigBytes; e += 3) {
        const t = (s.words[e >>> 2] >>> (24 - (e % 4) * 8)) & 255,
          a = (s.words[(e + 1) >>> 2] >>> (24 - ((e + 1) % 4) * 8)) & 255,
          o = (s.words[(e + 2) >>> 2] >>> (24 - ((e + 2) % 4) * 8)) & 255,
          l = (t << 16) | (a << 8) | o
        for (let i = 0; i < 4 && e * 8 + i * 6 < s.sigBytes * 8; i++) r.push(n.charAt((l >>> (6 * (3 - i))) & 63))
      }
      return r.join('')
    }
  },
  L = {
    parse(s) {
      const n = s.length,
        r = []
      for (let e = 0; e < n; e++) r[e >>> 2] |= (s.charCodeAt(e) & 255) << (24 - (e % 4) * 8)
      return new m(r, n)
    }
  },
  I = {
    parse(s) {
      return L.parse(unescape(encodeURIComponent(s)))
    }
  }
class K {
  constructor() {
    ;(this._minBufferSize = 0), (this.blockSize = 512 / 32), this.reset()
  }
  reset() {
    ;(this._data = new m()), (this._nDataBytes = 0)
  }
  _append(n) {
    typeof n == 'string' && (n = I.parse(n)), this._data.concat(n), (this._nDataBytes += n.sigBytes)
  }
  _doProcessBlock(n, r) {}
  _process(n) {
    let r,
      e = this._data.sigBytes / (this.blockSize * 4)
    n ? (e = Math.ceil(e)) : (e = Math.max((e | 0) - this._minBufferSize, 0))
    const t = e * this.blockSize,
      a = Math.min(t * 4, this._data.sigBytes)
    if (t) {
      for (let o = 0; o < t; o += this.blockSize) this._doProcessBlock(this._data.words, o)
      ;(r = this._data.words.splice(0, t)), (this._data.sigBytes -= a)
    }
    return new m(r, a)
  }
}
class W extends K {
  update(n) {
    return this._append(n), this._process(), this
  }
  finalize(n) {
    n && this._append(n)
  }
}
const J = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
  G = [
    1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734,
    506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998
  ],
  g = []
class V extends W {
  constructor() {
    super(), this.reset()
  }
  reset() {
    super.reset(), (this._hash = new m([...J]))
  }
  _doProcessBlock(n, r) {
    const e = this._hash.words
    let t = e[0],
      a = e[1],
      o = e[2],
      l = e[3],
      i = e[4],
      h = e[5],
      f = e[6],
      y = e[7]
    for (let u = 0; u < 64; u++) {
      if (u < 16) g[u] = n[r + u] | 0
      else {
        const w = g[u - 15],
          C = ((w << 25) | (w >>> 7)) ^ ((w << 14) | (w >>> 18)) ^ (w >>> 3),
          B = g[u - 2],
          P = ((B << 15) | (B >>> 17)) ^ ((B << 13) | (B >>> 19)) ^ (B >>> 10)
        g[u] = C + g[u - 7] + P + g[u - 16]
      }
      const d = (i & h) ^ (~i & f),
        _ = (t & a) ^ (t & o) ^ (a & o),
        c = ((t << 30) | (t >>> 2)) ^ ((t << 19) | (t >>> 13)) ^ ((t << 10) | (t >>> 22)),
        p = ((i << 26) | (i >>> 6)) ^ ((i << 21) | (i >>> 11)) ^ ((i << 7) | (i >>> 25)),
        b = y + p + d + G[u] + g[u],
        z = c + _
      ;(y = f), (f = h), (h = i), (i = (l + b) | 0), (l = o), (o = a), (a = t), (t = (b + z) | 0)
    }
    ;(e[0] = (e[0] + t) | 0), (e[1] = (e[1] + a) | 0), (e[2] = (e[2] + o) | 0), (e[3] = (e[3] + l) | 0), (e[4] = (e[4] + i) | 0), (e[5] = (e[5] + h) | 0), (e[6] = (e[6] + f) | 0), (e[7] = (e[7] + y) | 0)
  }
  finalize(n) {
    super.finalize(n)
    const r = this._nDataBytes * 8,
      e = this._data.sigBytes * 8
    return (this._data.words[e >>> 5] |= 128 << (24 - (e % 32))), (this._data.words[(((e + 64) >>> 9) << 4) + 14] = Math.floor(r / 4294967296)), (this._data.words[(((e + 64) >>> 9) << 4) + 15] = r), (this._data.sigBytes = this._data.words.length * 4), this._process(), this._hash
  }
}
function q(s) {
  return new V().finalize(s).toString(E)
}
function Y(s, n = {}) {
  const r = typeof s == 'string' ? s : N(s, n)
  return q(r).slice(0, 10)
}
export { Y as h, X as u }
