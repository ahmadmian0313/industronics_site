'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { NEWS_POSTS } from '@/data/news'
import { EmptyState } from '@/components/ui/EmptyState'
import { LoadingGridSkeleton } from '@/components/ui/LoadingGridSkeleton'

export function NewsList() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 350)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingGridSkeleton count={3} />
  }

  if (!NEWS_POSTS.length) {
    return <EmptyState title="No news available" description="Company updates and announcements will appear here." />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {NEWS_POSTS.map((post) => (
        <article key={post.id} className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f0f10] to-[#191a1d] overflow-hidden group">
          <div className="relative h-52">
            <Image src={post.image} alt={post.title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-5">
            <p className="text-[#c9ced6] text-xs uppercase tracking-wider">{new Date(post.date).toLocaleDateString()}</p>
            <h3 className="text-white text-xl font-semibold mt-2">{post.title}</h3>
            <p className="text-white/70 text-sm mt-2 leading-relaxed">{post.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
