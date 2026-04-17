import SplitText from "@/components/SplitText";
import ChromaGrid from "@/components/ChromaGrid";
import LightRays from "@/components/LightRays";
import RotatingText from "@/components/RotatingText";
import ReflectiveCard from "@/components/ReflectiveCard";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import CardSwap, { Card } from "@/components/CardSwap";
import TargetCursor from "@/components/TargetCursor";
import Stack from "@/components/Stack";
import gym3 from "@/assets/gym3.jpg";
import gym4 from "@/assets/gym4.jpg";
import gym5 from "@/assets/gym5.jpg";
import { useState, useMemo, useCallback, useEffect } from "react";
import { getChromaItems } from "@/data/chromaItems";
import { getSocialNavItems } from "@/data/socialLinks";
import { getSiteCopy } from "@/data/siteCopy";
import Dock from "@/components/Dock";
import { Github, Instagram, Linkedin } from "lucide-react";
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";

const LANGUAGE_STORAGE_KEY = "personalwebsite-language";

const vibeCardStyles = [
  "flex flex-col justify-between p-7 bg-gradient-to-br from-[#1a1f2e] to-[#0d1117] border-white/15",
  "flex flex-col justify-between p-7 bg-gradient-to-br from-[#1a1225] to-[#0d0a18] border-white/15",
  "flex flex-col justify-between p-7 bg-gradient-to-br from-[#0f1e1a] to-[#080f0d] border-white/15"
];

const vibeEyebrowStyles = [
  "text-emerald-400/80",
  "text-violet-400/80",
  "text-teal-400/80"
];

const chillVibeStyles = [
  {
    emoji: "🎵",
    color: "from-violet-500/20 to-violet-900/30",
    backColor: "from-violet-600/30 to-violet-950/60",
    border: "border-violet-400/25",
    glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]"
  },
  {
    emoji: "🍜",
    color: "from-orange-500/20 to-orange-900/30",
    backColor: "from-orange-600/30 to-orange-950/60",
    border: "border-orange-400/25",
    glow: "hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]"
  },
  {
    emoji: "✈️",
    color: "from-sky-500/20 to-sky-900/30",
    backColor: "from-sky-600/30 to-sky-950/60",
    border: "border-sky-400/25",
    glow: "hover:shadow-[0_0_40px_rgba(14,165,233,0.25)]"
  },
  {
    emoji: "🎮",
    color: "from-emerald-500/20 to-emerald-900/30",
    backColor: "from-emerald-600/30 to-emerald-950/60",
    border: "border-emerald-400/25",
    glow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]"
  }
];

const gymStackImages = [
  { src: gym3, alt: "Gym photo 3" },
  { src: gym4, alt: "Gym photo 4" },
  { src: gym5, alt: "Gym photo 5" },
];

function SocialDockIcon({ id }) {
  const iconCls = "h-[22px] w-[22px] text-white";
  switch (id) {
    case "instagram":
      return <Instagram className={iconCls} aria-hidden />;
    case "linkedin":
      return <Linkedin className={iconCls} aria-hidden />;
    case "github":
      return <Github className={iconCls} aria-hidden />;
    case "douyin":
      return (
        <span
          className="flex h-full w-full items-center justify-center text-[13px] font-bold leading-none text-white"
          aria-hidden
        >
          抖
        </span>
      );
    default:
      return null;
  }
}

function WithSocialNav({ children, copy, socialNavItems }) {
  const openSocial = useCallback((href) => {
    window.open(href, "_blank", "noopener,noreferrer");
  }, []);

  const dockItems = useMemo(
    () =>
      socialNavItems.map((item) => ({
        label: item.title,
        icon: <SocialDockIcon id={item.id} />,
        onClick: () => openSocial(item.href)
      })),
    [openSocial, socialNavItems]
  );

  return (
    <>
      {children}
      <div className="pointer-events-none fixed left-4 top-4 z-50 sm:left-6 sm:top-6">
        <Link
          to="/"
          className="pointer-events-auto inline-flex rounded-full border border-white/20 bg-black/35 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
        >
          {copy.common.changeLanguage}
        </Link>
      </div>
      <aside
        className="pointer-events-none fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
        aria-label={copy.common.socialLinks}
      >
        <div className="pointer-events-auto">
          <Dock
            items={dockItems}
            align="end"
            magnification={64}
            distance={160}
            panelHeight={56}
            baseItemSize={44}
            ariaLabel={copy.common.socialDock}
          />
        </div>
      </aside>
    </>
  );
}

function LanguageSelectionPage({ copy, currentLanguage, onSelectLanguage }) {
  const navigate = useNavigate();

  const selectLanguage = (language) => {
    onSelectLanguage(language);
    navigate("/home");
  };

  return (
    <main className="relative min-h-dvh overflow-hidden px-6 py-6 md:py-8">
      <div className="pointer-events-none absolute inset-0">
        <LightRays className="h-full w-full" color="rgba(255,255,255,0.18)" />
      </div>
      <section className="relative z-10 mx-auto flex min-h-[calc(100dvh-3rem)] max-w-4xl flex-col items-center justify-center gap-5 text-center md:min-h-[calc(100dvh-4rem)]">
        <SplitText
          text={copy.selector.title}
          tag="h1"
          splitType="chars"
          delay={45}
          duration={0.8}
          ease="power3.out"
          from={{ opacity: 0, y: 28 }}
          to={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold tracking-tight md:text-7xl"
        />
        <p className="max-w-2xl text-base text-white/65 md:text-xl">
          {copy.selector.subtitle}
        </p>

        <div className="mt-4 grid w-full max-w-3xl gap-4 md:grid-cols-2">
          <button
            type="button"
            onClick={() => selectLanguage("en")}
            className={`rounded-[28px] border bg-white/[0.04] p-6 text-left shadow-[0_0_60px_rgba(0,0,0,0.18)] backdrop-blur-sm transition hover:border-white/35 hover:bg-white/[0.08] ${
              currentLanguage === "en" ? "border-white/40" : "border-white/12"
            }`}
          >
            <div className="space-y-3">
              <div className="text-2xl font-semibold text-white">{copy.selector.englishTitle}</div>
              <p className="text-sm leading-6 text-white/60">{copy.selector.englishDescription}</p>
            </div>
          </button>
          <button
            type="button"
            onClick={() => selectLanguage("zh")}
            className={`rounded-[28px] border bg-white/[0.04] p-6 text-left shadow-[0_0_60px_rgba(0,0,0,0.18)] backdrop-blur-sm transition hover:border-white/35 hover:bg-white/[0.08] ${
              currentLanguage === "zh" ? "border-white/40" : "border-white/12"
            }`}
          >
            <div className="space-y-3">
              <div className="text-2xl font-semibold text-white">{copy.selector.mandarinTitle}</div>
              <p className="text-sm leading-6 text-white/60">{copy.selector.mandarinDescription}</p>
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}

function HomePage({ copy }) {
  return (
    <main className="relative min-h-dvh overflow-hidden px-6 py-6 md:py-8">
      <div className="pointer-events-none absolute inset-0">
        <LightRays
          className="h-full w-full"
          color="rgba(255,255,255,0.18)"
        />
      </div>
      <section className="relative z-10 mx-auto flex min-h-[calc(100dvh-3rem)] max-w-4xl flex-col items-center justify-center gap-4 text-center md:min-h-[calc(100dvh-4rem)]">
        <SplitText
          text={copy.home.name}
          tag="h1"
          splitType="chars"
          delay={80}
          duration={1}
          ease="power3.out"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          className="text-6xl font-semibold tracking-tight md:text-8xl"
        />

        <SplitText
          text={copy.home.adjective}
          tag="h1"
          splitType="chars"
          delay={80}
          duration={1}
          ease="power3.out"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          className="text-2xl font-serif italic tracking-wide text-white/70 md:text-3xl"
        />

        <SplitText
          text={copy.home.tagline}
          tag="h1"
          splitType="chars"
          delay={80}
          duration={1}
          ease="power3.out"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          className="max-w-2xl text-base font-medium tracking-normal text-white/65 md:text-xl"
        />

        <Link
          to="/about"
          className="mt-4 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[rgb(6,0,16)]"
        >
          {copy.home.cta}
        </Link>
      </section>
    </main>
  );
}

function AboutPage({ copy, chromaItems }) {
  return (
    <main className="min-h-dvh px-6 py-6 md:py-8">
      <section className="mx-auto flex min-h-[calc(100dvh-3rem)] w-full max-w-[1320px] flex-col gap-6 md:min-h-[calc(100dvh-4rem)] md:gap-8">
        <div className="shrink-0 text-center text-4xl font-semibold md:text-6xl">
          <span className="mr-3 text-white/75">{copy.about.intro}</span>
          <RotatingText
            texts={copy.about.rotatingTexts}
            mainClassName="px-2 sm:px-2 md:px-3 bg-purple-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerDuration={0.03}
            rotationInterval={2200}
            splitLevelClassName="justify-center"
            elementLevelClassName="text-white"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          />
        </div>
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.03] p-4 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-6">
          <ChromaGrid
            items={chromaItems}
            radius={260}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            showShade={true}
            grid2x2
            className="overflow-hidden"
          />
        </div>
      </section>
    </main>
  );
}

function WorkingPage({ copy, workItem }) {
  return (
    <main className="px-6 py-6 md:py-8">
      <section className="mx-auto grid max-w-7xl gap-6 rounded-[32px] border border-white/12 bg-white/[0.03] p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-sm md:grid-cols-[1.15fr_0.85fr] md:items-start md:p-8">
        <div className="order-1 flex min-h-0 flex-col gap-6">
          <Link
            to="/about"
            className="w-fit rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            {copy.common.backToAbout}
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {workItem.title}
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-white/60">
            <span className="rounded-full border border-white/15 px-4 py-2">
              {workItem.handle}
            </span>
            {copy.work.roles.map((role) => (
              <span key={role} className="rounded-full border border-white/15 px-4 py-2">
                {role}
              </span>
            ))}
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/10">
            <ScrollStack
              className="pb-4"
              itemDistance={20}
              itemScale={0.035}
              itemStackDistance={24}
              stackPosition="30%"
              scaleEndPosition="12%"
              baseScale={0.88}
              rotationAmount={0.5}
              blurAmount={0.5}
              useWindowScroll={true}
            >
              {copy.work.projects.map((project) => (
                <ScrollStackItem
                  key={project.title}
                  itemClassName="border border-[#9aa0aa] bg-[#b0b6bf] text-[#1a1d22] shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
                >
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div className="space-y-4">
                      <div className="inline-flex w-fit rounded-full border border-[#9aa0aa] bg-[#d1d5db] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#3a3f48]">
                        {copy.common.project}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-3xl font-semibold tracking-tight text-[#1a1d22]">
                          {project.title}
                        </h3>
                        <h3 className="text-sm font-semibold tracking-tight text-[#1a1d22]">
                          {project.branch}
                        </h3>
                        <p className="max-w-xl text-base leading-7 text-[#3a3f48]">
                          {project.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-[#3a3f48]">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#9aa0aa] bg-[#d1d5db] px-4 py-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>

        <div className="order-2 flex min-h-[320px] items-center justify-center md:sticky md:top-8 md:justify-end">
          <ReflectiveCard
            className="h-[520px] w-[340px] max-w-full md:h-[620px] md:w-[420px]"
            blurStrength={10}
            overlayColor="rgba(255, 255, 255, 0.08)"
            displacementStrength={14}
            noiseScale={1.2}
            specularConstant={1}
            roughness={0.35}
            glassDistortion={3}
            content={copy.reflectiveCard}
          />
        </div>
      </section>
    </main>
  );
}

function VibcodePage({ copy, vibeItem }) {
  return (
    <main className="min-h-dvh px-6 py-6 md:py-8">
      <section className="mx-auto grid min-h-[calc(100dvh-3rem)] max-w-7xl gap-6 rounded-[32px] border border-white/12 bg-white/[0.03] p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-sm md:min-h-[calc(100dvh-4rem)] md:grid-cols-[2fr_3fr] md:items-center md:p-10">
        <div className="flex flex-col gap-6">
          <Link
            to="/about"
            className="w-fit rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            {copy.common.backToAbout}
          </Link>

          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {vibeItem.title}
            </h1>
            <p className="text-base italic text-white/55">
              {copy.vibecode.hint}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-white/60">
            <span className="rounded-full border border-white/15 px-4 py-2">{vibeItem.handle}</span>
            <span className="rounded-full border border-white/15 px-4 py-2">{copy.vibecode.role}</span>
          </div>
        </div>

        <div className="relative flex min-h-[560px] items-center justify-center overflow-visible md:min-h-[640px]" style={{ perspective: "900px" }}>
          <div className="relative w-full max-w-[460px]" style={{ height: 220 }}>
            <CardSwap
              width={460}
              height={220}
              cardDistance={50}
              verticalDistance={60}
              delay={3500}
              pauseOnHover={true}
              skewAmount={5}
              easing="elastic"
            >
              {copy.vibecode.cards.map((card, index) => (
                <Card key={card.title} customClass={vibeCardStyles[index]}>
                  <div className="space-y-2">
                    <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${vibeEyebrowStyles[index]}`}>
                      {card.eyebrow}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                    <p className="text-sm leading-6 text-white/60">{card.description}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="shrink-0 rounded-full border border-white/50 bg-white/20 px-4 py-1.5 text-[11px] font-bold text-white shadow-[0_0_12px_rgba(255,255,255,0.15)] transition hover:bg-white hover:text-black"
                    >
                      {copy.common.view}
                    </a>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </section>
    </main>
  );
}

function GymPage({ copy, gymItem }) {
  const gymStackCards = useMemo(
    () =>
      gymStackImages.map(({ src, alt }) => (
        <img
          key={alt}
          src={src}
          alt={alt}
          className="pointer-events-none h-full w-full object-cover"
        />
      )),
    []
  );

  return (
    <main className="min-h-dvh px-6 py-6 md:py-8">
      <section className="mx-auto grid min-h-[calc(100dvh-3rem)] max-w-6xl gap-8 rounded-[32px] border border-white/12 bg-white/[0.03] p-6 shadow-[0_0_80px_rgba(0,0,0,0.25)] backdrop-blur-sm md:min-h-[calc(100dvh-4rem)] md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:p-8">
        <div className="order-2 flex min-h-0 flex-col justify-center gap-6 md:order-1">
          <Link
            to="/about"
            className="w-fit rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            {copy.common.backToAbout}
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              {gymItem.title}
            </h1>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/65 md:text-lg">
            {copy.gym.description}
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-white/60">
            {copy.gym.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 px-4 py-2">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 flex min-h-[min(420px,70vw)] items-center justify-center md:order-2 md:min-h-0">
          <div className="relative h-[min(420px,52vh)] w-full max-w-[380px]">
            <Stack
              cards={gymStackCards}
              randomRotation={false}
              sensitivity={180}
              mobileClickOnly
              sendToBackOnClick
            />
            <p className="pointer-events-none absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-full pt-3 text-center text-[11px] text-white/40">
              {copy.gym.hint}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function ChillPage({ copy }) {
  const [flipped, setFlipped] = useState({});

  const toggle = (label) =>
    setFlipped((prev) => ({ ...prev, [label]: !prev[label] }));

  const chillVibes = useMemo(
    () =>
      copy.chill.vibes.map((vibe, index) => ({
        ...vibe,
        ...chillVibeStyles[index]
      })),
    [copy.chill.vibes]
  );

  return (
    <main className="relative min-h-dvh px-6 py-6 md:py-8">
      <TargetCursor targetSelector=".cursor-target" spinDuration={3} hideDefaultCursor={true} />

      <section className="mx-auto flex min-h-[calc(100dvh-3rem)] max-w-5xl flex-col gap-8 md:min-h-[calc(100dvh-4rem)]">
        <div className="flex items-start justify-between pt-2">
          <div className="space-y-2">
            <Link
              to="/about"
              className="inline-block w-fit rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {copy.common.backToAbout}
            </Link>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{copy.chill.title}</h1>
            <p className="text-base text-white/50">{copy.chill.hint}</p>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-4 pb-8 sm:grid-cols-2">
          {chillVibes.map(({ label, emoji, description, color, backColor, border, glow, backItems, backLabel }) => (
            <div
              key={label}
              className="cursor-target relative min-h-[220px]"
              style={{ perspective: "1000px" }}
              onClick={() => toggle(label)}
            >
              <div
                className="relative h-full w-full transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flipped[label] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <div
                  className={`absolute inset-0 flex flex-col justify-between rounded-[28px] border bg-gradient-to-br ${color} ${border} ${glow} p-8 transition-shadow duration-300`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-4xl">{emoji}</div>
                  <div className="mt-auto space-y-2 pt-8">
                    <h2 className="text-2xl font-semibold tracking-tight text-white">{label}</h2>
                    <p className="text-sm leading-6 text-white/55">{description}</p>
                  </div>
                  <span className="absolute bottom-4 right-5 text-[11px] uppercase tracking-widest text-white/25">{copy.chill.flipCta}</span>
                </div>

                <div
                  className={`absolute inset-0 flex flex-col justify-between rounded-[28px] border bg-gradient-to-br ${backColor} ${border} p-8`}
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">{backLabel}</p>
                    <h2 className="text-xl font-semibold text-white">{label}</h2>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {backItems.map((item) => {
                      const isObj = typeof item === "object";
                      const key = isObj ? item.city : item;
                      return (
                        <li key={key} className="flex items-center gap-2 text-sm text-white/75">
                          <span className="h-1 w-1 shrink-0 rounded-full bg-white/40" />
                          {isObj ? (
                            <span className="flex items-center gap-1.5">
                              <img
                                src={`https://flagcdn.com/20x15/${item.code}.png`}
                                width="20"
                                height="15"
                                alt={item.code}
                                className="shrink-0 rounded-[2px] object-cover"
                              />
                              {item.city}
                            </span>
                          ) : item}
                        </li>
                      );
                    })}
                  </ul>
                  <span className="absolute bottom-4 right-5 text-[11px] uppercase tracking-widest text-white/25">{copy.chill.flipCta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function AppRoutes({ language, setLanguage }) {
  const copy = useMemo(() => getSiteCopy(language), [language]);
  const chromaItems = useMemo(() => getChromaItems(language), [language]);
  const socialNavItems = useMemo(() => getSocialNavItems(language), [language]);
  const [workItem, vibeItem, gymItem] = chromaItems;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LanguageSelectionPage
            copy={copy}
            currentLanguage={language}
            onSelectLanguage={setLanguage}
          />
        }
      />
      <Route path="/home" element={<HomePage copy={copy} />} />
      <Route path="/about" element={<WithSocialNav copy={copy} socialNavItems={socialNavItems}><AboutPage copy={copy} chromaItems={chromaItems} /></WithSocialNav>} />
      <Route path="/working" element={<WithSocialNav copy={copy} socialNavItems={socialNavItems}><WorkingPage copy={copy} workItem={workItem} /></WithSocialNav>} />
      <Route path="/vibecode" element={<WithSocialNav copy={copy} socialNavItems={socialNavItems}><VibcodePage copy={copy} vibeItem={vibeItem} /></WithSocialNav>} />
      <Route path="/gym" element={<WithSocialNav copy={copy} socialNavItems={socialNavItems}><GymPage copy={copy} gymItem={gymItem} /></WithSocialNav>} />
      <Route path="/chill" element={<WithSocialNav copy={copy} socialNavItems={socialNavItems}><ChillPage copy={copy} /></WithSocialNav>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage === "zh" ? "zh" : "en";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  return (
    <BrowserRouter>
      <AppRoutes language={language} setLanguage={setLanguage} />
    </BrowserRouter>
  );
}

export default App;