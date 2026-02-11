"use client";
import type { VideoSection as VideoSectionModel } from "@/types/models";

import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";

export function VideoSection({ videos }: { videos: VideoSectionModel[] }) {
  const { lang } = useLanguage();
  const item = videos[0];
  if (!item) return null;
  return (
    <section className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="section-heading">{t(lang, item.title_en, item.title_fa)}</h2>
          <p className="section-subtitle">{t(lang, item.body_en, item.body_fa)}</p>
          <div className="mt-6 glass-panel p-5 text-sm text-slate-600">
            {lang === "fa"
              ? "ویدیو از یوتیوب یا ویمئو نمایش داده می‌شود."
              : "Video is embedded from YouTube or Vimeo."}
          </div>
        </div>
        <div className="card overflow-hidden">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={item.embedUrl}
              title="MeshkinHost video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
