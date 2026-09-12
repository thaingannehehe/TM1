function CornerOrnament({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" className={`absolute w-9 h-9 sm:w-11 sm:h-11 text-brand-gold ${className}`} aria-hidden="true">
      <path d="M3 17V3H17M3 3L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 3H3V8M3 8L11 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".65" />
    </svg>
  );
}

export default function RoadmapSection() {
  return (
    <section id="khoa-hoc" className="relative overflow-hidden bg-brand-red px-6 py-20 sm:py-28">
      <div className="absolute -right-16 top-8 font-display text-[18rem] leading-none text-white/[0.035] select-none" aria-hidden="true">
        学
      </div>
      <div className="absolute -left-12 bottom-0 h-px w-48 bg-brand-gold/25" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-7 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-brand-gold/70 sm:w-24" />
            <div className="h-3 w-3 rotate-45 border border-brand-gold bg-brand-gold/20" />
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-brand-gold/70 sm:w-24" />
          </div>
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-brand-gold">
            Hành trình chinh phục HSK
          </p>
          <h2 className="font-display text-3xl leading-tight text-brand-ivory sm:text-4xl lg:text-5xl">
            Lộ Trình Học Từ <span className="font-sans font-extrabold tracking-tight">HSK 1</span> Đến <span className="font-sans font-extrabold tracking-tight">HSK 9</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans leading-relaxed text-white/75">
            Hệ thống giáo trình bài bản, phân cấp rõ ràng theo từng trình độ, giúp học viên tiến bộ vững chắc từ nền tảng đến thành thạo.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl rounded-2xl border-2 border-brand-gold bg-[#FFF8E7] p-3 shadow-2xl shadow-black/25 sm:mt-16 sm:p-6 lg:p-8">
          <CornerOrnament className="left-2 top-2 sm:left-3 sm:top-3" />
          <CornerOrnament className="right-2 top-2 rotate-90 sm:right-3 sm:top-3" />
          <CornerOrnament className="bottom-2 left-2 -rotate-90 sm:bottom-3 sm:left-3" />
          <CornerOrnament className="bottom-2 right-2 rotate-180 sm:bottom-3 sm:right-3" />
          <div className="overflow-x-auto rounded-lg">
            <img
              src="https://res.cloudinary.com/qugyphlv/image/upload/v1789256305/lo-trinh-13-08-1.webp"
              alt="Lộ trình học tiếng Trung từ HSK 1 đến HSK 9 của ThanhMaiHSK"
              className="mx-auto h-auto min-w-[620px] w-full object-contain"
            />
          </div>
          <img
            src="https://res.cloudinary.com/qugyphlv/image/upload/v1789009070/dau-an-removebg-preview.png"
            alt="Ấn triện ThanhMaiHSK"
            className="absolute -bottom-7 -right-5 z-10 h-[72px] w-[72px] rotate-12 object-contain drop-shadow-xl sm:-bottom-8 sm:-right-7 sm:h-[82px] sm:w-[82px]"
          />
        </div>

        <div className="mt-12 text-center sm:mt-14">
          <a
            href="https://zalo.me/0398519485"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-brand-gold px-7 py-3.5 font-sans text-sm font-semibold text-brand-brown shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-deep hover:text-white"
          >
            Tư Vấn Lộ Trình Phù Hợp Với Bạn
          </a>
        </div>
      </div>
    </section>
  );
}
