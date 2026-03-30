"use client";

const reviews = [
  {
    stars: 5,
    text: "Highly recommend!",
    author: "Emma Wilson",
  },
  {
    stars: 5,
    text: "I left with a very positive impression overall. From beginning to end, the experience felt smooth, well organized, and easy to follow. Everything was handled in a professional and ...",
    author: "Grace Miller",
    readMore: true,
  },
  {
    stars: 5,
    text: "Better than I imagined.",
    author: "Sofia Martinez",
  },
  {
    stars: 5,
    text: "Overall, I had a very positive experience and would definitely recommend this to others. Everything went smoothly and met my expectations.",
    author: "Ryan Walker",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#D38734">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-[#C25630] px-6 lg:px-12 pt-28 lg:pt-40 pb-80 lg:pb-[450px] min-h-[900px]">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="font-balotro text-[12.91px] text-brown uppercase tracking-wider mb-4">
          Reseñas
        </p>
        <h2 className="font-averia font-bold text-[49.22px] leading-[50px] text-brown uppercase">
          Lo que dicen<br />nuestros hu<span className="font-sans text-[54px]">é</span>spedes
        </h2>
      </div>

      {/* Google Reviews bar */}
      <div className="bg-white rounded-[12px] flex items-center justify-between px-6 py-4 mb-8 max-w-[840px] mx-auto">
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div>
            <p className="font-grillmaster text-[16px] text-brown font-bold">Google Reviews</p>
            <div className="flex items-center gap-2">
              <span className="font-grillmaster text-[16px] text-brown font-bold">4.3</span>
              <Stars count={4} />
              <span className="font-grillmaster text-[14px] text-brown/60">(191)</span>
            </div>
          </div>
        </div>
        <button className="bg-[#C25630] text-cream font-grillmaster text-[14px] px-5 py-2 rounded-[6px]">
          Share your feedback
        </button>
      </div>

      {/* Reviews grid */}
      <div className="max-w-[840px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-[12px] p-4 flex flex-col justify-between">
              <div>
                <Stars count={r.stars} />
                <p className="font-grillmaster text-[13px] text-brown/80 leading-snug">
                  {r.text}
                  {r.readMore && (
                    <span className="text-blue-500 cursor-pointer"> Read more</span>
                  )}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-8 h-8 rounded-full bg-brown/20 flex-shrink-0" />
                <span className="font-grillmaster text-[13px] text-brown font-bold">{r.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white/40 rounded-full flex items-center justify-center">
          <img src="/icons/Vector-2.svg" alt="Anterior" className="w-[14px] h-auto" />
        </button>
        <button className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white/40 rounded-full flex items-center justify-center">
          <img src="/icons/Vector-2.svg" alt="Siguiente" className="w-[14px] h-auto" style={{ transform: "rotate(180deg)" }} />
        </button>
      </div>
    </section>
  );
}
