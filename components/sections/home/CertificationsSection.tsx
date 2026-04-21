'use client'

export function CertificationsStrip() {
  const CERTS = [
    {
      name: 'ISO 9001:2015 / 14001:2015 / 45001:2018',
    bg: 'radial-gradient(circle at center, #2d2d2d 0%, #000000 100%)',
  border: '#000000',
  textColor: '#e0e0e0',
      imgSrc: '/certs/iso.png',
    },
    {
      name: 'PSEB — Pakistan Software Export Board',
        bg: 'radial-gradient(circle at center, #2d2d2d 0%, #000000 100%)',
  border: '#000000',
  textColor: '#e0e0e0',
      imgSrc: '/certs/pseb.png',
    },
    {
      name: 'UKAS Management Systems',
          bg: 'radial-gradient(circle at center, #2d2d2d 0%, #000000 100%)',
  border: '#000000',
  textColor: '#e0e0e0',
      imgSrc: '/certs/ukas.png',
    },
    {
      name: 'PEC — Pakistan Engineering Council',
         bg: 'radial-gradient(circle at center, #2d2d2d 0%, #000000 100%)',
  border: '#000000',
  textColor: '#e0e0e0',
      imgSrc: '/certs/PEC logo.jpg',
    },
    {
      name: 'Green Building Council Member',
         bg: 'radial-gradient(circle at center, #2d2d2d 0%, #000000 100%)',
  border: '#000000',
  textColor: '#e0e0e0',
      imgSrc: '/certs/gec.png',
    },
    {
      name: 'KCCI — Karachi Chamber of Commerce',
       bg: 'radial-gradient(circle at center, #2d2d2d 0%, #000000 100%)',
  border: '#000000',
  textColor: '#e0e0e0',
      imgSrc: '/certs/kcci.png',
    },
  ]

  const items = [...CERTS, ...CERTS]

  return (
    <div className="w-full overflow-hidden bg-black/20 py-4 border-y border-white/5">
      <div className="flex w-fit gap-8 animate-scroll">
        {items.map((cert, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-2" // Items ko align karne ke liye
            style={{
              minWidth: 'max-content', // Text ke mutabiq width khud barh jaye
              borderRadius: 8,
              background: cert.bg,
              border: `1px solid ${cert.border}`,
            }}
          >
            {/* Icon Box */}
            <div style={{ width: 32, height: 32, flexShrink: 0 }}>
              {cert.imgSrc && (
                <img
                  src={cert.imgSrc}
                  alt={cert.name}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Text Name */}
            <span className="text-white/90 text-sm font-medium whitespace-nowrap">
              {cert.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite; /* Speed thori slow ki hai taake text parha jaye */
        }
      `}</style>
    </div>
  )
}