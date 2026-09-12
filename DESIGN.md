# Stitch Design System: Tierra de Palabras (Matria: The Rebel Fairy)

> **Stitch Project:** Matria: The Rebel Fairy  
> **Stitch Project ID:** `8056384592220120124`  
> **Design System Name:** Tierra de Palabras  
> **Aesthetic Theme:** Tactile Digital & Editorial Elegance (Organic Feminist Archive)

---

## 1. Brand Philosophy & Creative North Star

This design system honors the literary, social, and cultural legacy of Colombian activist and poet **Piedad Morales**. It departs from cold, rigid corporate digital design, embracing an **organic, tactile digital archive** that feels like a living, handmade journal or an activist’s scrapbook.

The personality is **warm, rebellious, poetic, and rooted in the landscape of the Magdalena River**.

### Core Tenets
- **Tactile Minimalism:** Interfaces reminiscent of cotton-rag paper, stitched bindings, and watercolor washes.
- **Editorial Elegance:** High-contrast serif headlines paired with airy typography, generous line-heights, and thoughtful pacing.
- **The "No Hard Lines" Principle:** Boundaries are formed through soft tonal surface shifts, organic hand-drawn radii (*rag-doll borders*), and dashed running stitch motifs rather than standard 1px box borders.
- **Feminist Solidarity:** Grounded earth tones (Terracotta and Ochre) illuminated by intentional accents of Lilac and Purple representing the *Lilas* collective and women's peace movements.

---

## 2. Color Palette & Tokens

### 2.1 Color Tokens Map

| Token Name | Hex Code | Semantic Role & Meaning |
| :--- | :--- | :--- |
| `primary` / `terracotta` | `#9f3c16` | **Primary Action & River Clay:** Main CTA, highlights, authoritative headings |
| `primary-container` | `#bf542c` | Elevated terracotta container surfaces |
| `on-primary` | `#ffffff` | Text and icons on primary actions |
| `primary-fixed` | `#ffdbcf` | Soft terracotta badge background |
| `primary-fixed-dim` | `#ffb59c` | Muted terracotta tone |
| `secondary` / `ochre` | `#815600` | **Sun & Carnavalenguas:** Festive gold, hand-stitched borders, creative spark |
| `secondary-container` | `#ffc163` | Light warm amber card container |
| `on-secondary-container` | `#764e00` | High-contrast text on secondary cards |
| `secondary-fixed` | `#ffddb1` | Soft gold badge background |
| `tertiary` / `feminist-purple`| `#754a91` | **Feminist Solidarity & Lilas:** Peace activism, poetic accents, sorority chips |
| `tertiary-container` | `#8f62ac` | Purple card accent container |
| `tertiary-fixed` | `#f4daff` | Soft lilac surface for activism badges |
| `tertiary-fixed-dim` | `#e4b5ff` | Lavender background accent |
| `on-tertiary-fixed` | `#2f004b` | Deep purple text on lilac surfaces |
| `background` / `surface` | `#fcf9f8` | **Watercolor Paper Base:** Warm off-white canvas |
| `surface-dim` | `#dcd9d9` | Darker canvas tone for contrast layers |
| `surface-container-lowest`| `#ffffff` | Pure white lifted card surface |
| `surface-container-low` | `#f6f3f2` | Subtle section background |
| `surface-container` | `#f0eded` | Standard container background |
| `surface-container-high` | `#eae7e7` | Elevated card tone |
| `surface-container-highest`| `#e5e2e1` | Deepest surface tier for borders & image frames |
| `on-background` / `charcoal`| `#1b1b1c` | **Charcoal Black:** High-contrast text, ink on paper |
| `on-surface-variant` | `#57423b` | Warm graphite for body descriptions and subheadings |
| `outline` | `#8a726a` | Earthy outline for subtle dividers |
| `outline-variant` | `#dec0b7` | Soft terracotta-tinted border line |
| `paper-grain` | `#f0eded` | Typewriter excerpt paper texture |
| `error` | `#ba1a1a` | Alert / error state |

---

## 3. Typography: The Dialogue of Three Voices

The typography is built around three distinct voices that carry Piedad Morales' story:

### 3.1 The Three Voices
1. **The Orator (`Playfair Display`, serif):**
   - High-contrast, dignified, commanding yet warm.
   - Used for main display titles, section headlines, and chapter banners.
2. **The Record-Keeper (`Montserrat`, sans-serif):**
   - Clean, geometric, legible, and open.
   - Used for narrative prose, interface navigation, buttons, and captions.
3. **The Poet (`Courier Prime`, monospace):**
   - Nostalgic typewriter aesthetic.
   - Reserved for poetry verses, excerpts from notebooks, and archival inscriptions.

### 3.2 Typographic Hierarchy

| Token | Family | Size | Weight | Line Height | Letter Spacing | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-lg` | Playfair Display | `48px` (`3rem`) | Bold (700) | `1.1` | `-0.02em` | Main Hero title (Desktop) |
| `display-lg-mobile` | Playfair Display | `32px` (`2rem`) | Bold (700) | `1.2` | `0` | Main Hero title (Mobile) |
| `headline-md` | Playfair Display | `32px` (`2rem`) | SemiBold (600) | `1.3` | `0` | Section titles |
| `body-lg` | Montserrat | `18px` (`1.125rem`) | Regular (400) | `1.6` | `0` | Hero intro paragraphs |
| `body-md` | Montserrat | `16px` (`1rem`) | Regular (400) | `1.6` | `0` | Standard body narrative |
| `poetry-block` | Courier Prime | `16px` (`1rem`) | Regular (400) | `1.8` | `+0.01em` | Stanzas & poetic verses |
| `label-caps` | Montserrat | `12px` (`0.75rem`) | Bold (700) | `1.0` | `+0.1em` | Archival chips & tags |

---

## 4. Spacing, Elevation & Shape Language

### 4.1 Spacing Scale
- `unit`: `8px`
- `container-padding`: `24px`
- `gutter`: `24px`
- `gutter-md`: `32px`
- `margin-lg`: `48px`
- `section-gap`: `80px`

### 4.2 Elevation & Shadows
- **Paper Shadow:** `0px 4px 20px rgba(30, 30, 30, 0.05)`
  - Replaces aggressive drop shadows with a gentle ambient lift as if sheets of paper were resting on a wooden desk.
- **Glassmorphism:** `backdrop-blur: 12px` with `80%` opacity background for sticky navigation.

### 4.3 Organic Shapes & Signatures
- **Rag Doll Border (`.rag-doll-border`):**
  - Asymmetrical border-radius simulating hand-cut fabric or stitched cloth:
    `border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;`
  - Stroke: `2px solid #815600` (Ochre)
- **Rag Doll Border Alt (`.rag-doll-border-alt`):**
  - Inverted organic curve:
    `border-radius: 15px 255px 15px 225px / 225px 15px 255px 15px;`
  - Stroke: `2px solid #754a91` (Feminist Purple)
- **Stitch Line (`.stitch-line`):**
  - Running stitch effect created with a repeating linear dash in terracotta (`#9f3c16`).
- **Colouring Fill (`.colouring-fill`):**
  - Organic pseudo-element with 8% opacity and variable radii mimicking watercolor seepage on craft paper.

---

## 5. Key Components Specification

### 5.1 Top Navigation (Header)
- Frosted paper backdrop (`bg-background/80 backdrop-blur-md`).
- Brand logotype in `font-headline text-terracotta`.
- Navigation links with subtle underline animation and micro-scaling hover (`scale-105`).
- Call-to-action button framed in `.rag-doll-border-alt`.

### 5.2 Hero Section
- **Layout:** Two-column fluid grid on desktop (`md:grid-cols-2`), single-column on mobile.
- **Left Column:**
  - Archival Tag: Pill badge with hand-drawn icon.
  - Heading: `La Matria` in Playfair Display with Terracotta tone.
  - Narrative: Emotional, lyrical introduction explaining the memory, poetry, and struggle.
  - Action Group: Primary button with organic hover effect, accompanied by secondary exploratory link with directional arrow.
- **Right Column:**
  - Ambient watercolor aura (`bg-surface-container blur-3xl`).
  - Featured illustration card framed with `.rag-doll-border`, `paper-shadow`, and a gentle 2-degree slant (`rotate-2 hover:rotate-0`).
  - Tactile accents: Hand-stitched cross marks (`x`) in Ochre.

### 5.3 Bento Grid Components
- **Biography Card ("El Hada Rebelde"):** Timeline nodes in Purple and Ochre tracing Piedad's life milestones.
- **Poetry Box ("Des Hojada Palabra"):** Centered typewriter container with rustic paper background and stamped border.
- **Activism Card ("Rutas de Paz"):** Lilac background celebrating collective women's movements (*Vamos Mujer*, *Ruta Pacífica*, *Mujeres de Negro*).
- **Carnavalenguas Card ("El Legado de la Alegría"):** Warm amber surface with running stitch margins and celebratory motifs.

---

## 6. Stitch Project Screens Inventory

| Screen ID | Title | Device Type | Canvas Size |
| :--- | :--- | :--- | :--- |
| `7cd7aaeeb80e4aaba87416bf113f852d` | **La Matria - Digital Tribute (SPA)** | Desktop | 2560 x 3886 |
| `9482095397374000b71644572827c12c` | **Inicio - La Matria** | Mobile | 780 x 6744 |
| `b906bc55c0084f2584c5e896d9077662` | **Biografía - El Hada Rebelde** | Mobile | 780 x 4176 |
| `88f6d00a304d49d6a74cd66cc9a577bd` | **Poesía - Des Hojada Palabra** | Mobile | 780 x 6976 |
| `4c561fe88caa4aeeb80c2bc65ff0b510` | **Activismo - Rutas de Paz** | Mobile | 780 x 5210 |
| `d1219c4e49de4e9eba4a3316a26f3ba8` | **Carnavalenguas - Legado de Alegría** | Mobile | 780 x 4226 |
| `6cac9af8c2ed4fccb36ef172243e274a` | **Inicio - La Matria (Zephyr)** | Mobile | 780 x 6756 |
| `5b7fe58fcec44f37a0c92bd3780abdf9` | **La Matria - Zephyr Palette (SPA)** | Desktop | 2560 x 3922 |

---

## 7. Tailwind CSS Configuration Guide

All tokens are implemented in `src/styles/global.css` via the Tailwind CSS `@theme` directive, making the following utility classes immediately available:

- Colors: `bg-primary`, `text-primary`, `bg-terracotta`, `text-terracotta`, `text-ochre`, `bg-ochre`, `text-feminist-purple`, `bg-feminist-purple`, `bg-paper-grain`, `bg-surface`, `bg-surface-container-low`, `bg-tertiary-fixed`, etc.
- Fonts: `font-display`, `font-headline`, `font-body`, `font-poetry`.
- Spacing: `p-container-padding`, `gap-gutter`, `gap-gutter-md`, `py-section-gap`.
- Helper Classes: `.rag-doll-border`, `.rag-doll-border-alt`, `.paper-shadow`, `.stitch-line`, `.colouring-fill`.
