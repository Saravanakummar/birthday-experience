# ✦ Birthday Experience — Cinematic Digital Gift

A premium interactive birthday experience built with Next.js, TypeScript, TailwindCSS, and canvas animations.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🎨 Personalising the Experience

### 📸 Photos (Scene 5 — Memories)
1. Drop your photos into `/public/assets/photos/`
2. Edit `/data/memories.json` — update `src`, `title`, `date`, and `caption` for each entry
3. In `SceneMemories.tsx`, replace the `📷` placeholder `<div>` with a Next.js `<Image>` component

### 📅 Timeline (Scene 6)
Edit `/data/timeline.json` — update `date`, `title`, and `description`. Add as many entries as needed.

### ✉️ Letters (Scene 7)
Edit `/data/letters.json` — update `from`, `preview`, and `content` (supports `\n` line breaks).

### 🎵 Music (Scene 8)
1. Drop MP3 files into `/public/assets/music/`
2. Edit `/data/music.json` — update `title`, `artist`, `src`, and `duration` (seconds)

### ❓ Quiz (Scene 9)
Edit `/data/quiz.json` — update questions, options, `correctId`, `explanation`, and `secretMessage`.

### 💌 Final Letter (Scene 11)
Edit the `FINAL_LETTER` constant inside `app/components/scenes/SceneFinalLetter.tsx`.

---

## 📁 Project Structure

```
app/
  components/
    scenes/         ← 11 scene components (one per scene)
    ui/             ← Reusable UI (GlassButton, GlassCard, etc.)
    layout/         ← GlobalNav
    three/          ← (placeholder for Three.js mesh components)
  lib/
    animations/     ← GSAP utility helpers
    hooks/          ← useCanvas, useParallax, useSceneTransition
    managers/       ← AudioManager singleton
    types/          ← Global TypeScript interfaces
  store/            ← Zustand stores (sceneStore, audioStore)
data/               ← JSON content (memories, timeline, letters, music, quiz)
public/
  assets/
    photos/         ← 📸 Drop photos here
    music/          ← 🎵 Drop MP3s here
    letters/        ← (for future PDF/text file letters)
    videos/         ← (for future video scenes)
    timeline/       ← Timeline event photos
    quiz/           ← Quiz images (optional)
    memory-data/    ← Extended memory assets
    textures/       ← Three.js PBR textures
    fonts/          ← Custom font files
```

---

## 🎬 Scene Index

| # | Scene ID | Component | Description |
|---|----------|-----------|-------------|
| 1 | `loading` | SceneLoading | Animated loading bar + particles |
| 2 | `night-sky` | SceneNightSky | Stars, moon, aurora, fireflies |
| 3 | `gift-idle` | SceneGift | Floating gift box with parallax |
| 4 | `gift-opening` | SceneOpening | Cinematic gift opening sequence |
| 5 | `memories` | SceneMemories | Photo memory grid + modal |
| 6 | `timeline` | SceneTimeline | Horizontal story timeline |
| 7 | `letters` | SceneLetters | Envelope letters with paper texture |
| 8 | `music` | SceneMusic | Vinyl record player with playlist |
| 9 | `quiz` | SceneQuiz | Friendship quiz with scoring |
| 10 | `final-letter` | SceneFinalLetter | Emotional final letter |
| 11 | `ending` | SceneEnding | Fireworks, lanterns, finale |

---

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS** with custom gold/deep-blue design tokens
- **Canvas API** for star fields, aurora, fireworks, particles
- **Framer Motion** (available — add to scenes as needed)
- **GSAP** (utilities in `app/lib/animations/gsapUtils.ts`)
- **Three.js / React Three Fiber** (placeholder in `app/components/three/`)
- **Howler.js** (AudioManager in `app/lib/managers/AudioManager.ts`)
- **Zustand** for global scene and audio state

---

## 🚀 Deployment

```bash
npm run build
npm start
```

Or deploy to Vercel with one click.
