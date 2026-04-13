import Image from 'next/image'

type TeamMemberCardProps = {
  name: string
  role: string
  image: string
  bio?: string
}

export function TeamMemberCard({ name, role, image, bio }: TeamMemberCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#111111] to-[#1a1a1a] overflow-hidden group transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-64">
        <Image src={image} alt={name} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-[#c5c8ce] text-sm mt-1">{role}</p>
        {bio ? <p className="text-white/70 text-sm mt-3 leading-relaxed">{bio}</p> : null}
      </div>
    </div>
  )
}
