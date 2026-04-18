'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Search, X, ChevronLeft, ChevronRight, Send } from 'lucide-react'

const BASE_URL = 'https://industronics.uk/mart/wp-json/wc/v3'
const CK = 'ck_00c9b1bc9bbb1a85589144c10689c097d9fc458e'
const CS = 'cs_b20d4c00008262908b3e6043011918d1f3382878'
const AUTH = `consumer_key=${CK}&consumer_secret=${CS}`
const WA_NUMBER = '923378908848'

interface WooCategory {
  id: number
  name: string
  count: number
  image: { src: string } | null
}

interface WooProduct {
  id: number
  name: string
  images: { src: string }[]
  categories: { id: number; name: string }[]
  price: string
  short_description: string
}

interface QueryForm {
  name: string
  phone: string
  email: string
  message: string
}

// ── SKELETON ────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div style={{
      background: '#111',
      border: '1px solid #1e1e1e',
      borderRadius: 14,
      overflow: 'hidden',
    }}>
      <div style={{
        width: '100%', aspectRatio: '1/1',
        background: 'linear-gradient(90deg, #1a1a1a 25%, #222 50%, #1a1a1a 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
      }} />
      <div style={{ padding: '12px 14px 16px' }}>
        <div style={{ height: 11, background: '#1e1e1e', borderRadius: 4, marginBottom: 7, width: '85%' }} />
        <div style={{ height: 11, background: '#1e1e1e', borderRadius: 4, width: '55%' }} />
      </div>
    </div>
  )
}

// ── PRODUCT CARD ────────────────────────────────────────────
function ProductCard({ product, onClick }: { product: WooProduct; onClick: () => void }) {
  const [imgError, setImgError] = useState(false)
  const [hovered, setHovered] = useState(false)
  const imgSrc = product.images?.[0]?.src

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#0e0e0e',
        border: `1px solid ${hovered ? '#2a2a2a' : '#1a1a1a'}`,
        borderRadius: 14,
        overflow: 'hidden',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.6)' : '0 2px 8px rgba(0,0,0,0.3)',
        transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <div style={{
        width: '100%', aspectRatio: '1 / 1',
        background: '#141414',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {imgSrc && !imgError ? (
          <img
            src={imgSrc}
            alt={product.name}
            loading="lazy"
            onError={() => setImgError(true)}
            style={{
              width: '100%', height: '100%',
              objectFit: 'contain', padding: 12,
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.35s ease',
            }}
          />
        ) : (
          <div style={{ color: '#2a2a2a', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            No Image
          </div>
        )}
      </div>
      <div style={{ padding: '11px 13px 14px' }}>
        <p style={{
          color: hovered ? '#ffffff' : '#d0d0d0',
          fontSize: 12, fontWeight: 600,
          lineHeight: 1.45, margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          letterSpacing: '0.01em',
          transition: 'color 0.2s',
        }}>
          {product.name}
        </p>
      </div>
    </motion.div>
  )
}

// ── QUERY FORM ───────────────────────────────────────────────
function QueryForm({ productName, onClose }: { productName: string; onClose: () => void }) {
  const [form, setForm] = useState<QueryForm>({
    name: '', phone: '', email: '',
    message: `I want to inquire about: ${productName}`,
  })
  const [errors, setErrors] = useState<Partial<QueryForm>>({})
  const [focused, setFocused] = useState<string | null>(null)

  const validate = () => {
    const e: Partial<QueryForm> = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.phone.trim())   e.phone   = 'Phone is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = () => {
    if (!validate()) return
    const text = encodeURIComponent(
      `Hello, I want to inquire about:\n\nProduct: ${productName}\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank')
    onClose()
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    background: focused === field ? 'rgba(22,125,130,0.08)' : 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field as keyof QueryForm] ? '#ff4444' : focused === field ? 'rgba(22,125,130,0.6)' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: 10,
    padding: '12px 14px',
    fontSize: 13,
    color: '#e0e0e0',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'all 0.2s',
    boxSizing: 'border-box',
    resize: 'none' as const,
  })

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 700,
    color: 'rgba(255,255,255,0.45)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: 6,
    display: 'block',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ marginBottom: 4 }}>
        <div style={{ fontSize: 11, color: '#5ecdd1', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>
          Send Query
        </div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>
          {productName}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label style={labelStyle}>Name *</label>
          <input
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            style={inputStyle('name')}
          />
          {errors.name && <span style={{ fontSize: 10, color: '#ff4444', marginTop: 3, display: 'block' }}>{errors.name}</span>}
        </div>
        <div>
          <label style={labelStyle}>Phone *</label>
          <input
            type="tel"
            placeholder="+92 300 0000000"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            onFocus={() => setFocused('phone')}
            onBlur={() => setFocused(null)}
            style={inputStyle('phone')}
          />
          {errors.phone && <span style={{ fontSize: 10, color: '#ff4444', marginTop: 3, display: 'block' }}>{errors.phone}</span>}
        </div>
      </div>

      <div>
        <label style={labelStyle}>Email *</label>
        <input
          type="email"
          placeholder="you@company.com"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused(null)}
          style={inputStyle('email')}
        />
        {errors.email && <span style={{ fontSize: 10, color: '#ff4444', marginTop: 3, display: 'block' }}>{errors.email}</span>}
      </div>

      <div>
        <label style={labelStyle}>Message *</label>
        <textarea
          rows={3}
          placeholder="Additional details..."
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          style={inputStyle('message')}
        />
        {errors.message && <span style={{ fontSize: 10, color: '#ff4444', marginTop: 3, display: 'block' }}>{errors.message}</span>}
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
        <button
          onClick={onClose}
          style={{
            flex: 1, padding: '13px 0',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10, color: 'rgba(255,255,255,0.5)',
            fontSize: 12, fontWeight: 700, cursor: 'pointer',
            fontFamily: 'inherit', letterSpacing: '0.08em',
            textTransform: 'uppercase', transition: 'all 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          style={{
            flex: 2, padding: '13px 0',
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            border: 'none', borderRadius: 10,
            color: '#fff', fontSize: 12, fontWeight: 800,
            cursor: 'pointer', fontFamily: 'inherit',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            transition: 'all 0.2s', boxShadow: '0 4px 20px rgba(37,211,102,0.25)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.4)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.25)' }}
        >
          <Send size={14} />
          Send via WhatsApp
        </button>
      </div>
    </div>
  )
}

// ── PRODUCT MODAL ───────────────────────────────────────────
function ProductModal({ product, onClose }: { product: WooProduct; onClose: () => void }) {
  const [showQuery, setShowQuery] = useState(false);

  return (
    <AnimatePresence mode="wait">
{!showQuery ? (
  <motion.div
    key="product"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div style={{ display: 'flex', gap: 8 }}>
      <a
        href="#"
        target="_blank"
        style={{ 
          flex: 1, 
          padding: '12px 0', 
          textAlign: 'center', 
          background: 'rgba(22,125,130,0.15)', 
          borderRadius: 10,
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        View Details
      </a>
      <button 
        onClick={() => setShowQuery(true)}
        style={{
          flex: 1,
          padding: '12px 0',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          border: 'none',
          borderRadius: 10,
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Send Query
      </button>
    </div>
  </motion.div>
) : (
  <motion.div
    key="query"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
  >
    <QueryForm 
      productName={product.name} 
      onClose={() => setShowQuery(false)} 
    />
  </motion.div>
)}
    </AnimatePresence>
  );
}

// ── MAIN PAGE ───────────────────────────────────────────────
export default function ProductsPage() {
  const [categories, setCategories]           = useState<WooCategory[]>([])
  const [products, setProducts]               = useState<WooProduct[]>([])
  const [selectedCat, setSelectedCat]         = useState<number | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<WooProduct | null>(null)
  const [search, setSearch]                   = useState('')
  const [page, setPage]                       = useState(1)
  const [totalPages, setTotalPages]           = useState(1)
  const [loadingCats, setLoadingCats]         = useState(true)
  const [loadingProds, setLoadingProds]       = useState(true)
  const [error, setError]                     = useState('')
  const PER_PAGE = 20

  useEffect(() => {
    setLoadingCats(true)
    fetch(`${BASE_URL}/products/categories?${AUTH}&per_page=100&hide_empty=true`)
      .then(r => r.json())
      .then((data: WooCategory[]) => {
        setCategories(data.filter((c: WooCategory) => c.name !== 'Uncategorized'))
        setLoadingCats(false)
      })
      .catch(() => { setError('Failed to load categories.'); setLoadingCats(false) })
  }, [])

  const fetchProducts = useCallback(() => {
    setLoadingProds(true)
    setError('')
    const catParam    = selectedCat ? `&category=${selectedCat}` : ''
    const searchParam = search.trim() ? `&search=${encodeURIComponent(search.trim())}` : ''
    fetch(`${BASE_URL}/products?${AUTH}&per_page=${PER_PAGE}&page=${page}${catParam}${searchParam}&status=publish`)
      .then(r => {
        const tp = r.headers.get('X-WP-TotalPages')
        if (tp) setTotalPages(parseInt(tp))
        return r.json()
      })
      .then((data: WooProduct[]) => { setProducts(data); setLoadingProds(false) })
      .catch(() => { setError('Failed to load products.'); setLoadingProds(false) })
  }, [selectedCat, page, search])

  useEffect(() => { fetchProducts() }, [fetchProducts])

  const handleCatClick = (id: number | null) => {
    setSelectedCat(id)
    setPage(1)
    setSearch('')
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setPage(1)
    setSelectedCat(null)
    fetchProducts()
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(145deg,#080808_0%,#17181b_45%,#2a2c31_100%)] relative overflow-hidden text-white">

    {/* BACKGROUND */}
      <div className="linear-gradient(135deg, #090909 0%,  #e7e3e3 45%, #2a2d33 100%)">
        {/* Animated Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-white/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        
        {/* Grid Pattern Theme */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgb(255, 255, 255) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 py-16">

        {/* ── HERO — DO NOT TOUCH ── */}
        <AnimatedSection className="mb-24 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our catalog
          </h1>
          <p className="text-white/40 font-mono tracking-[0.3em] text-xs uppercase">
            Industrial Inventory • 10,000+ Components • Global Standards
          </p>
          <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto mt-12">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={24} />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search components (e.g. Siemens, PLC, Sensor)..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-8 text-lg focus:border-[#167d82] outline-none transition-all backdrop-blur-md"
            />
          </form>
        </AnimatedSection>

        {/* ── CATALOG SECTION ── */}
        <div style={{
          borderRadius: 20,
          background: 'linear-gradient(135deg, #090909 0%, #e7e3e3 45%, #2a2d33 100%)',
          padding: '36px 28px',
        }}>

          {/* CATEGORIES */}
          <section style={{ marginBottom: 40 }}>
         

            {loadingCats ? (
              <div style={{ color: 'rgba(255, 255, 255, 0.25)', fontSize: 12 }}>Loading categories...</div>
            ) : (
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: 8,
                overflowX: 'auto', paddingBottom: 4,
              }}>
                <button
                  onClick={() => handleCatClick(null)}
                  style={{
                    padding: '8px 16px', borderRadius: 50, fontSize: 11, fontWeight: 700,
                    cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
                    background: selectedCat === null ? '#167d82' : 'rgba(0,0,0,0.4)',
                    border: selectedCat === null ? '1px solid #167d82' : '1px solid rgba(255,255,255,0.1)',
                    color: selectedCat === null ? '#fff' : 'rgba(255,255,255,0.55)',
                    letterSpacing: '0.04em',
                    boxShadow: selectedCat === null ? '0 0 16px rgba(22,125,130,0.4)' : 'none',
                  }}
                  onMouseEnter={e => { if (selectedCat !== null) { e.currentTarget.style.borderColor = '#167d82'; e.currentTarget.style.color = '#5ecdd1' } }}
                  onMouseLeave={e => { if (selectedCat !== null) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)' } }}
                >
                  All Products
                </button>
                {categories.map((cat: WooCategory) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCatClick(cat.id)}
                    style={{
                      padding: '8px 16px', borderRadius: 50, fontSize: 11, fontWeight: 700,
                      cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
                      background: selectedCat === cat.id ? '#167d82' : 'rgba(0,0,0,0.4)',
                      border: selectedCat === cat.id ? '1px solid #167d82' : '1px solid rgba(255,255,255,0.1)',
                      color: selectedCat === cat.id ? '#fff' : 'rgba(255,255,255,0.55)',
                      letterSpacing: '0.04em',
                      boxShadow: selectedCat === cat.id ? '0 0 16px rgba(22,125,130,0.4)' : 'none',
                    }}
                    onMouseEnter={e => { if (selectedCat !== cat.id) { e.currentTarget.style.borderColor = '#167d82'; e.currentTarget.style.color = '#5ecdd1' } }}
                    onMouseLeave={e => { if (selectedCat !== cat.id) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)' } }}
                  >
                    {cat.name}
                    <span style={{ color: 'rgba(255,255,255,0.25)', marginLeft: 5, fontSize: 9 }}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* PRODUCTS */}
          <section>
            <div style={{
              fontSize: 10, fontWeight: 700, color: '#c8cdd4',
              letterSpacing: '0.5em', textTransform: 'uppercase',
              marginBottom: 20, borderLeft: '3px solid #c8cdd4', paddingLeft: 14,
            }}>
              {selectedCat
                ? categories.find((c: WooCategory) => c.id === selectedCat)?.name ?? 'Products'
                : search.trim() ? `Results: "${search}"` : 'All Products'}
            </div>

            {error && (
              <div style={{ color: '#ff6b6b', fontSize: 13, marginBottom: 20, padding: '12px 16px', background: 'rgba(255,0,0,0.07)', borderRadius: 8, border: '1px solid rgba(255,0,0,0.18)' }}>
                {error}
              </div>
            )}

            {/* Grid */}
            {loadingProds ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 14 }}>
                {Array.from({ length: PER_PAGE }).map((_, i) => <SkeletonCard key={i} />)}
              </div>
            ) : products.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(255,255,255,0.2)', fontSize: 14 }}>
                No products found.
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 14,
              }}
                className="products-grid"
              >
                {products.map((prod: WooProduct) => (
                  <ProductCard key={prod.id} product={prod} onClick={() => setSelectedProduct(prod)} />
                ))}
              </div>
            )}

            {/* PAGINATION */}
            {!loadingProds && totalPages > 1 && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 40 }}>
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  style={{
                    width: 38, height: 38, borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(0,0,0,0.4)',
                    color: page === 1 ? 'rgba(255,255,255,0.2)' : '#fff',
                    cursor: page === 1 ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s',
                  }}
                >
                  <ChevronLeft size={16} />
                </button>

                {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                  const p = i + 1
                  return (
                    <button key={p} onClick={() => setPage(p)} style={{
                      width: 38, height: 38, borderRadius: '50%',
                      border: page === p ? '1px solid #167d82' : '1px solid rgba(255,255,255,0.1)',
                      background: page === p ? '#167d82' : 'rgba(0,0,0,0.4)',
                      color: '#fff', cursor: 'pointer', fontSize: 12, fontWeight: 700,
                      boxShadow: page === p ? '0 0 14px rgba(22,125,130,0.45)' : 'none',
                      transition: 'all 0.2s',
                    }}>
                      {p}
                    </button>
                  )
                })}

                {totalPages > 7 && (
                  <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13 }}>... {totalPages}</span>
                )}

                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  style={{
                    width: 38, height: 38, borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(0,0,0,0.4)',
                    color: page === totalPages ? 'rgba(255,255,255,0.2)' : '#fff',
                    cursor: page === totalPages ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s',
                  }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </section>
        </div>

        {/* DISCLAIMER */}
        <footer style={{ paddingTop: 60, borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', marginTop: 60 }}>
          <p style={{ color: 'rgba(255,255,255,0.15)', fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', lineHeight: 2 }}>
            Legal Disclaimer! All product names, logos, and brands are property of their respective owners.
          </p>
        </footer>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .products-grid { grid-template-columns: repeat(1, 1fr) !important; }
        }
      `}</style>
    </main>
  )
}