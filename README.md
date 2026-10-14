# Sypher Creative Solutions — Adaptive Web Experience

Growth-inspired dark digital-agency demonstration for the 2026 Web Development Culminating Activity.

## Run
1. Install Node.js 18+.
2. Open this folder in VS Code terminal.
3. Run `npm install`.
4. Run `npm start`.
5. Open `http://localhost:3000` in your browser.

## API
- `GET /api/health` — server health
- `GET /api/content` — services, portfolio concepts, illustrative testimonials
- `POST /api/contact` — validates and acknowledges a demo message; **does not send or store messages**.

## Device adaptation
The analyzer uses CPU logical threads, approximate device memory (when exposed), WebGL availability, screen dimensions, and Save-Data preference. Auto mode uses thresholds HIGH >=75, MEDIUM >=40, otherwise BASIC. Unknown CPU and memory use neutral scores. A manual override is saved in localStorage. `prefers-reduced-motion` disables animation regardless of selected mode.

The scores are heuristic, not verified hardware measurements. Device Memory is not available in all browsers; a powerful phone may still score Basic. This is intentional as a demonstration of progressive enhancement.

## Test
Try Chrome DevTools responsive mode for layout checks. Device emulation alone does not reliably change hardwareConcurrency or deviceMemory. For the required three-device report, open the site on real devices, record dashboard values, note the selected mode and any limitations. For phone testing on the same Wi-Fi, visit `http://YOUR_LAPTOP_LAN_IP:3000` and allow the Node server through the firewall if needed.

All projects and testimonials are fictional demonstration content.

### Adaptive animations
The `js/animations.js` module adds scroll-triggered section reveals, a reading progress bar, interactive hero tilt (High mode, mouse only), animated project artwork, and a scrolling capabilities ticker. Medium mode uses gentler/slower effects. Basic mode and reduced-motion users get static, accessible content. Change modes in the Performance Dashboard to demonstrate the differences.


## Ultimate visual edition

The visual redesign is in `css/ultimate.css` and `js/ultimate.js`. It preserves the original device detection, content API, dashboard, and accessibility behavior. The visual work examples and testimonials are explicitly illustrative, not real client projects. Test actual devices before completing the results table.
