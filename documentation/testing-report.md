# Adaptive Web Experience System — Documentation Report

## 1. Identified problem
Sypher Creative Solutions wants a visually engaging corporate site, but resource-heavy animations can cause slow loads, stutter, high battery consumption, and instability on older computers and budget phones.

## 2. Proposed solution
A responsive single-page site that automatically selects High, Medium, or Basic visual complexity, provides manual overrides, and respects reduced-motion preferences. Content and navigation remain available in all modes.

## 3. Classification logic
On page load, JavaScript reads available `navigator.hardwareConcurrency`, `navigator.deviceMemory`, screen dimensions, WebGL support, and `navigator.connection.saveData`. Unknown values receive neutral scores. HIGH >=75; MEDIUM 40–74; BASIC below 40. Manual override takes priority over Auto. Reduced motion always disables animations.

## 4. Scoring methodology
CPU logical threads (maximum 35): >=12:35, >=8:28, >=4:19, otherwise 8; missing:17. Device memory GB (maximum 30): >=8:30, >=4:22, >=2:12, otherwise 5; missing:15. WebGL:20 if available, else 0. Screen dimension (maximum 15): largest dimension >=1600:15, >=1000:10, otherwise 7. Save-Data subtracts 20 points. Score is clamped to >=0. This is a heuristic rather than a true CPU/GPU benchmark.

## 5. Adaptation process
High mode uses floating hero graphics and hover animations. Medium uses reduced hover transitions and static hero elements. Basic removes decorative glow/rings, blur and animations. CSS media queries adjust layouts for phones and tablets. A persistent override uses localStorage. `prefers-reduced-motion` disables animation independently of mode.

## 6. Testing procedures
Start the Node server, load the website on three real devices, record reported values, compare expected and actual modes, test all four manual selections, check layout/navigation and API-loaded cards, enable reduced-motion accessibility setting, and test contact demo validation. Test mobile viewport sizes and keyboard navigation.

## 7. Testing results — fill in after real testing
| Device | CPU threads | Memory | Screen | Score | Auto mode | Layout / animations | Pass? |
|---|---|---|---|---|---|---|---|
| High-end PC (model: ___) | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| Office laptop (model: ___) | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| Phone/tablet (model: ___) | TBD | TBD | TBD | TBD | TBD | TBD | TBD |

Do not report expected results as observed results. Device emulation does not reliably simulate CPU and memory signals.

## 8. Challenges encountered / anticipated
Browser privacy restrictions hide some hardware details, and high thread counts do not guarantee fast graphics. Screen dimensions are a weak proxy for performance. Browser and OS differences affect animation smoothness. Further improvement could use opt-in FPS sampling and dynamically downgrade when sustained frame rates fall.

## 9. Conclusion and recommendations
The prototype demonstrates progressive enhancement: consistent content, responsive layouts, and adjustable visual complexity. Validate classification thresholds on real hardware, optimize media assets, monitor Core Web Vitals, and add accessible real-client content before production launch.
