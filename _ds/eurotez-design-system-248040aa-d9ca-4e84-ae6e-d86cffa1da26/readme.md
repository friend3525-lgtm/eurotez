# Sistema de Diseño Eurotez / Eurotez Design System

> Cada sección aparece primero en español y después en inglés. El contenido en inglés es completo, no un resumen. Every section appears in Spanish first, then in English. The English content is complete, not a summary.

---

## 1. La marca / The brand

**Español.** Eurotez LLC es una marca de skincare con una crema de noche enfocada. **La marca en una frase:** EUROTEZ es cuidado nocturno práctico para mujeres con piel seca o de apariencia deshidratada que quieren despertar con la piel hidratada, flexible y cuidada, sin convertir la hora de dormir en una rutina complicada. Segmento de lanzamiento: mujeres de aproximadamente 40 a 60 años con suficiente experiencia en skincare como para estar cansadas de rutinas elaboradas y promesas infladas. Personalidad de marca: elegante, minimalista, contenida. La superficie principal hoy es el sitio web. La creadora trabaja en español; todo el sistema se entrega en los dos idiomas.

**Promesa de marca.** Nunca haremos tu rutina más complicada simplemente para venderte más. **Estrella polar:** no ser la marca que pide a las mujeres comprar más, sino la marca en la que confían para que el skincare se sienta como menos.

**English.** Eurotez LLC is a skincare brand with one focused night cream. **The brand in one sentence:** EUROTEZ is practical night skincare for women with dry, dehydrated-looking skin who want to wake up looking hydrated, supple, and cared for, without turning bedtime into a complicated routine. Launch segment: women roughly 40 to 60 with enough skincare experience to be tired of elaborate routines and inflated promises. Brand personality: elegant, minimal, restrained. The primary surface today is the website. The founder works in Spanish; the entire system ships in both languages.

**Brand promise.** We will never make your routine more complicated just to sell you more. **North star:** do not become the brand that asks women to buy more; become the brand they trust to make skincare feel like less.

**Fuentes / Sources.** El brand kit oficial `uploads/EUROTEZ_3.pdf` es la fuente de verdad: define isotipo, logotipo, tagline, versiones, paleta y tipografías. Los logotipos de `assets/` se extrajeron de los vectores del PDF. La estrategia de marca, el posicionamiento, la voz, los eslóganes y la copia del sitio provienen de `uploads/EUROTEZ_Brand_Strategy_V2_CMO_Optimized_Bilingual.pdf` (V2, septiembre 2026), que reemplaza cualquier versión anterior. No se entregó código ni archivo de Figma, así que el espaciado, los radios, las sombras y el set de componentes son propuestas derivadas del board. / The official brand kit `uploads/EUROTEZ_3.pdf` is the source of truth: it defines the icon mark, logo, tagline, versions, palette and typefaces. The logos in `assets/` were extracted from the PDF vectors. Brand strategy, positioning, voice, taglines and site copy come from `uploads/EUROTEZ_Brand_Strategy_V2_CMO_Optimized_Bilingual.pdf` (V2, September 2026), which supersedes any earlier version. No code or Figma file was provided, so spacing, radii, shadows and the component set are proposals derived from the board.

---

## 2. Paleta oficial / Official palette

**Español.** Los cuatro colores del brand kit, definidos al inicio de `tokens/colors.css`. Crema es el fondo de página, cocoa es el acento y el CTA, tostado es la superficie secundaria, blanco es la tarjeta.

**English.** The four brand-kit colors, defined at the top of `tokens/colors.css`. Cream is the page background, cocoa is the accent and CTA, tan is the secondary surface, white is the card.

| Token | Hex | Uso / Use |
| --- | --- | --- |
| `--brand-cream` | `#FDEEC4` | Fondo de página, packaging / Page background, packaging |
| `--brand-white` | `#FFFFFF` | Superficies, tarjetas / Surfaces, cards |
| `--brand-tan` | `#D5B084` | Isotipo, acentos suaves, bandas / Icon mark, soft accents, bands |
| `--brand-cocoa` | `#745334` | CTAs, footer, tipografía sobre claro / CTAs, footer, type on light |

Dos tintas más, muestreadas del arte original del logotipo: `--logo-graphite` `#4D4D4D` (wordmark) y `--logo-taupe` `#998675` (tagline). Las escalas `--sand-*` e `--ink-*` son neutros de soporte. Todos los componentes leen color a través de aliases semánticos (`--color-accent`, `--color-bg`, `--color-card`), así que cualquier ajuste es un cambio de un solo archivo. / Two more inks, sampled from the original logo art: `--logo-graphite` `#4D4D4D` (wordmark) and `--logo-taupe` `#998675` (tagline). The `--sand-*` and `--ink-*` scales are supporting neutrals. Every component reads color through semantic aliases, so any adjustment is a single-file change.

---

## 3. Tipografía / Typography

**Español.** El brand kit define dos fuentes: **Commuters Sans** para títulos y **Montserrat** para párrafos. Ambas están cargadas — Montserrat desde Google Fonts, Commuters Sans desde `assets/fonts/` con `@font-face` en `tokens/typography.css`.

Dos avisos sobre los archivos entregados:

1. **Son los DEMO de Fontspring.** Sirven para maquetar, pero no están licenciados para producción. Hay que comprar la licencia antes de publicar el sitio.
2. **Faltan los pesos intermedios.** Se entregaron 200, 300, 700, 800 y 900 con sus itálicas. No hay Regular (400) ni Medium (500), que es justo donde suele caer el texto de interfaz. Por eso los titulares usan `--weight-display` (300); si se pide 400 o 500 el navegador sintetiza y el resultado se ve sucio.

**English.** The brand kit defines two typefaces: **Commuters Sans** for headings and **Montserrat** for body copy. Both are loaded — Montserrat from Google Fonts, Commuters Sans from `assets/fonts/` with `@font-face` in `tokens/typography.css`.

Two cautions about the delivered files:

1. **These are the Fontspring DEMO versions.** Fine for mockups, but not licensed for production. Buy the license before the site goes live.
2. **The intermediate weights are missing.** 200, 300, 700, 800 and 900 were delivered with italics. There is no Regular (400) or Medium (500), which is exactly where interface text usually lands. That is why headlines use `--weight-display` (300); asking for 400 or 500 makes the browser synthesize, and it looks dirty.

---

## 4. Voz y copy / Voice and copy

**Español.** La voz suena como una mujer informada y cuidadosa hablándole a otra mujer: no como un laboratorio intentando impresionarla ni como una influencer gritándole. Es **cálida, tranquila, segura, específica, sencilla, elegante y honesta sobre sus limitaciones**. Evita el lenguaje milagroso, el miedo al envejecimiento, las afirmaciones médicas sin base, los ataques a competidores, la culpa por falta de constancia y la jerga usada solo para sonar científica. Siempre de **tú**. Frases completas y breves, una idea por frase.

- **Eslogan de marca:** Lo suficientemente simple para usar. Lo suficientemente pensado para confiar.
- **Frase de campaña:** Suficientes pasos. Mantén el cuidado.
- **Propuesta de valor:** Despierta con la piel hidratada, flexible y cuidada, en un paso nocturno práctico.
- **El producto se llama:** la crema de noche Eurotez. Siempre igual.
- **CTA principal:** Descubre la crema de noche. El producto se usa **de noche**, nunca de día.
- **Pilares:** un solo producto hecho bien · ingredientes que puedes nombrar (urea, vitamina E, centella asiática) · la textura (sedosa, de rápida absorción, densa pero ligera) · el resultado por la mañana.
- **Nunca:** milagro, rejuvenece, revolución, científicamente probado, detox, empoderar, transforma, adictiva, orgánico.
- **Mayúsculas:** sentence case para titulares y cuerpo. MAYÚSCULAS con tracking amplio solo para eyebrows, navegación y botones.
- **Sin emoji, sin signos de exclamación, sin adjetivos exagerados.**

**English.** The voice sounds like an informed, caring woman speaking to another woman: not a laboratory trying to impress her, and not an influencer shouting at her. It is **warm, calm, confident, specific, plainspoken, elegant and honest about limits**. It avoids miracle language, fear around aging, medical-sounding claims without basis, competitor attacks, shame about inconsistency, and jargon for the sake of sounding scientific. Always **tú** in Spanish. Complete, brief sentences, one idea each.

- **Brand tagline:** Simple enough to use. Thoughtful enough to trust.
- **Campaign line:** Enough steps. Keep the care.
- **Value proposition:** Wake up to skin that looks hydrated, supple, and cared for, in one practical nightly step.
- **The product is called:** the Eurotez night cream. Always the same.
- **Primary CTA:** Discover the Night Cream. The product is used **at night**, never during the day.
- **Pillars:** one product done well · ingredients you can name (urea, vitamin E, centella asiatica) · the texture (silky, fast-absorbing, rich yet light) · the result in the morning.
- **Never:** miracle, rejuvenates, revolution, scientifically proven, detox, empower, transforms, addictive, organic.
- **Capitalization:** sentence case for headlines and body. Wide-tracked UPPERCASE only for eyebrows, navigation and buttons.
- **No emoji, no exclamation marks, no exaggerated adjectives.**

Ver las fichas del grupo **Voz de marca** y del grupo **Estrategia de marca** en `guidelines/`. / See the cards in the **Voz de marca / Brand Voice** and **Estrategia de marca / Brand Strategy** groups in `guidelines/`.

---

## 5. Cumplimiento FDA / FDA compliance

**Español.** Eurotez vende un cosmético, no un medicamento. Toda la copia de producto, etiqueta, campaña y sitio web debe cumplir las fichas del grupo **Cumplimiento FDA**.

- Nunca afirmes tratar, curar ni prevenir nada.
- Nunca afirmes efecto de estructura o función: colágeno, regeneración celular, reparación de barrera, antiinflamatorio, antibacteriano, SPF.
- **Prueba rápida:** añade "la apariencia de" a la frase. Si deja de tener sentido, es afirmación de medicamento y no se usa.
- No decimos "orgánico": no hay certificación USDA. Nombramos los ingredientes en su lugar.
- Si la etiqueta lleva cualquier texto en español, todas las declaraciones obligatorias deben aparecer también en español, además del inglés.
- **Lenguaje preferido (V2):** ayuda a hidratar, apoya una apariencia más suave, ayuda a que la piel se vea fresca o revitalizada, diseñado para piel seca o de apariencia deshidratada. **Solo con sustentación:** reduce arrugas, elimina manchas, sana, repara, trata acné o rosácea, clínicamente probado, recomendado por dermatólogos, resultados garantizados.
- Nunca llamar "estudio clínico" a pruebas personales o comentarios informales. Las imágenes de antes y después requieren consentimiento escrito y una nota de que los resultados individuales varían.

**English.** Eurotez sells a cosmetic, not a drug. All product, label, campaign and website copy must follow the cards in the **Cumplimiento FDA / FDA Compliance** group.

- Never claim to treat, cure or prevent anything.
- Never claim a structure or function effect: collagen, cellular regeneration, barrier repair, anti-inflammatory, antibacterial, SPF.
- **Quick test:** add "the appearance of" to the sentence. If it stops making sense, it's a drug claim and we don't use it.
- We do not say "organic": there is no USDA certification. We name the ingredients instead.
- If the label carries any Spanish text, every required statement must also appear in Spanish, alongside English.
- **Preferred language (V2):** helps hydrate, supports a softer-looking appearance, helps skin look refreshed or revitalized, designed for dry, dehydrated-looking skin. **Only with substantiation:** reduces wrinkles, removes dark spots, heals, repairs, treats acne or rosacea, clinically proven, dermatologist recommended, guaranteed results.
- Never call personal trials or informal feedback a "clinical study". Before-and-after images require written consent and an individual-results note.

Esto no es asesoría legal. Un consultor regulatorio debe revisar la copia final antes de imprimir. / This is not legal advice. A regulatory consultant should review final copy before printing.

### Ingredientes oficiales / Official ingredients

**Español.** Lista oficial de la crema de noche, en orden de declaración. Fuente única de verdad: cópiala exacta, sin reordenar ni añadir descriptores. Fichas: `guidelines/ingredients-official.html`, `guidelines/ingredients-label.html`.

**English.** Official Night Cream list, in declaration order. Single source of truth: copy it exactly, with no reordering or added descriptors.

```
INGREDIENTS: WATER, SIMMONDSIA CHINENSIS (JOJOBA) SEED OIL, GLYCERIN, LIMNANTHES ALBA (MEADOWFOAM) SEED OIL, CETEARYL ALCOHOL, SQUALANE, UREA, COCOS NUCIFERA (COCONUT) OIL, BUTYROSPERMUM PARKII (SHEA) BUTTER, GLYCERYL STEARATE, HYDROXYACETOPHENONE, 1,2-HEXANEDIOL, TOCOPHEROL, PEG-100 STEARATE, POLYACRYLAMIDE, HEXYLDECANOL, CERAMIDE NP, CERAMIDE AP, CERAMIDE AS, PANTHENOL, CERAMIDE NS/CERAMIDE NG, PHYTOSTERYL OLEATE, CENTELLA ASIATICA EXTRACT, HIPPOPHAE RHAMNOIDES FRUIT OIL, HYDROGENATED LECITHIN, CERAMIDE EOP
```

### Modo de uso / Suggested usage

**Español.** Indicaciones oficiales de la crema de noche. Cópialas exactas. Ficha: `guidelines/usage-official.html`.

**English.** Official Night Cream directions. Copy them exactly.

```
SUGGESTED USAGE: Suitable for sensitive skin, free of parabens, silicone, and synthetic fragrances. Apply to clean, dry, and fresh face at night. Please test behind the ears before using on face.
```

---

## 6. Fotografía / Photography

**Español.** Luz de estudio uniforme, siempre — nunca sombras marcadas. Fondo de agua o cristal para producto; degradado liso crema-tostado para retrato, nunca blanco de catálogo. Mujeres de 40 a 60, de perfil o rostro parcial, con gesto de aplicación en movimiento. Calma para producto, sonrisa para campaña. Retoque pulido, editorial. Neutros de marca con acentos dorados, sin filtros. Nada de botánica en escena: lo natural se comunica con piel, luz y color.

**English.** Even studio light, always — never strong shadows. Water or glass backdrop for product; plain cream-to-tan gradient for portraits, never catalog white. Women aged 40 to 60, in profile or partial face, with the application gesture in motion. Calm for product, smile for campaign. Polished, editorial retouching. Brand neutrals with gold accents, no filters. No botanicals in frame: nature is communicated through skin, light and color.

Ver las seis fichas del grupo **Imágenes**. / See the six cards in the **Imágenes / Imagery** group.

---

## 7. Fundamentos visuales / Visual foundations

**Español.**

- **Color:** base neutra cálida (fondo crema) con un único acento tostado usado con moderación para CTAs y estados activos. Tinta oscura para texto y la franja del footer. Sin gradientes en ningún lugar.
- **Espaciado:** generoso. Las secciones respiran con 64–96px de padding; el espaciado de componente vive en una escala con raíz de 4px (4/8/12/16/24/32/48/64/96/128).
- **Fondos:** campos de color plano. Los placeholders de imagen son paneles en `--sand-200`/`--sand-400` (4:5 para tarjetas de producto, 4:3 para filosofía) a la espera de fotografía real.
- **Animación:** mínima. Transiciones de 150–250ms solo en hover y focus, sin rebote, sin animación de entrada.
- **Hover:** solo cambio de color (500 → 600 → 700), sin escala.
- **Bordes:** hairline de 1px. Sin bordes de color, sin barras de acento a la izquierda.
- **Sombras:** dos pasos — `--shadow-card` en reposo y `--shadow-raised` al elevar. Suaves y con tinte cálido, nunca negro puro.
- **Esquinas:** 2px botones e inputs, 4px por defecto, 8px tarjetas y diálogos. Sin píldoras salvo tags, badges y el track del switch.
- **Transparencia y blur:** ninguna. El scrim del Dialog es un tinte plano al 40%.

**English.**

- **Color:** warm neutral base (cream background) with a single tan accent used sparingly for CTAs and active states. Dark ink for text and the footer band. No gradients anywhere.
- **Spacing:** generous. Sections breathe at 64–96px of padding; component spacing lives on a 4px-rooted scale (4/8/12/16/24/32/48/64/96/128).
- **Backgrounds:** flat color fields. Image placeholders are `--sand-200`/`--sand-400` panels (4:5 for product cards, 4:3 for philosophy) awaiting real photography.
- **Animation:** minimal. 150–250ms transitions on hover and focus only, no bounce, no entrance animation.
- **Hover:** color change only (500 → 600 → 700), no scaling.
- **Borders:** 1px hairline. No colored borders, no left accent bars.
- **Shadows:** two steps — `--shadow-card` at rest and `--shadow-raised` when lifted. Soft and warm-tinted, never pure black.
- **Corners:** 2px buttons and inputs, 4px default, 8px cards and dialogs. No pills except tags, badges and the switch track.
- **Transparency and blur:** none. The Dialog scrim is a flat 40% tint.

---

## 8. Iconografía / Iconography

**Español.** El brand kit no incluye un set de íconos. El único ícono de la referencia web es una lupa de línea fina. El corazón de la tarjeta de Feedback es un SVG placeholder dibujado a mano — se señala en vez de ocultarlo. Recomendación cuando haya assets reales: un set de línea fina de 1.5px, sin relleno (por ejemplo Lucide), que combina con el peso de línea del logo. Sin emoji ni glifos unicode en ningún lugar del sistema.

**English.** The brand kit includes no icon set. The only icon in the web reference is a thin-line magnifier. The heart on the Feedback card is a hand-drawn placeholder SVG — flagged rather than hidden. Recommendation once real assets exist: a 1.5px thin-line, unfilled set (Lucide, for example), which matches the logo's line weight. No emoji or unicode glyphs anywhere in the system.

---

## 9. Componentes / Components

**Español.** Agrupados por función bajo `components/`. Cada componente se entrega como `<Name>.jsx` + `<Name>.d.ts` (contrato de props) + `<Name>.prompt.md` (uso). Ninguna fuente definió un inventario, así que este set base se creó según las necesidades de la marca.

**English.** Grouped by concern under `components/`. Each component ships as `<Name>.jsx` + `<Name>.d.ts` (props contract) + `<Name>.prompt.md` (usage). No source defined an inventory, so this base set was created from the brand's needs.

- **core/** — Button (primary/secondary/ghost × s/m/l), IconButton
- **forms/** — Input, Select, Checkbox, Radio, Switch
- **surfaces/** — Card, Badge, Tag
- **navigation/** — Tabs
- **feedback/** — Dialog, Toast, Tooltip

---

## 10. UI kits y templates / UI kits and templates

**Español.**

- `ui_kits/website/` — landing page de Eurotez: Header, Hero, ProductGrid con toast de carrito, Philosophy y Footer con suscripción. `index.html` es una recreación clickeable.
- `templates/landing-page/` — la misma landing como Design Component reutilizable (`LandingPage.dc.html`), lista para copiar en proyectos consumidores.

**English.**

- `ui_kits/website/` — the Eurotez landing page: Header, Hero, ProductGrid with cart toast, Philosophy and Footer with signup. `index.html` is a clickable recreation.
- `templates/landing-page/` — the same landing page as a reusable Design Component (`LandingPage.dc.html`), ready to copy into consuming projects.

---

## 11. Índice de archivos / File index

| Ruta / Path | Qué es / What it is |
| --- | --- |
| `styles.css` | Hoja raíz, importa todos los tokens / Root stylesheet, imports all tokens |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css` |
| `assets/` | Logotipos extraídos del brand kit, normales y `-white` / Logos extracted from the brand kit, normal and `-white` |
| `assets/imagery/` | Las cuatro referencias fotográficas aprobadas / The four approved photo references |
| `assets/fonts/` | Commuters Sans (DEMO) |
| `guidelines/` | Fichas de especímenes: Colores, Tipografía, Espaciado, Marca, Imágenes, Cumplimiento FDA, Voz de marca, Estrategia de marca / Specimen cards |
| `uploads/EUROTEZ_Brand_Strategy_V2_CMO_Optimized_Bilingual.pdf` | Estrategia de marca V2, fuente de la sección 4 y del grupo Estrategia / Brand Strategy V2, source for section 4 and the Strategy group |
| `components/` | Primitivas reutilizables / Reusable primitives |
| `ui_kits/website/` | Recreación de la landing page / Landing page recreation |
| `templates/landing-page/` | Template reutilizable / Reusable template |
| `thumbnail.html` | Miniatura del proyecto / Project thumbnail |
| `SKILL.md` | Empaquetado compatible con Claude Code / Claude Code-compatible packaging |
