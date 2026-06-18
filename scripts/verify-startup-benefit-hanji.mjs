import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const componentUrl = new URL(
  '../src/widgets/startup-benefit/ui/StartupBenefitSection.tsx',
  import.meta.url
);
const assetUrl = new URL(
  '../public/new-asset/background/startup-benefit-hanji.webp',
  import.meta.url
);
const source = await readFile(componentUrl, 'utf8');

const stampStart = source.indexOf('function StampMark');
const stampEnd = source.indexOf('\n\nexport default function StartupBenefitSection');
assert.notEqual(stampStart, -1, 'StampMark must remain in the section');
assert.notEqual(stampEnd, -1, 'StartupBenefitSection must follow StampMark');

const expectedStampMark = `function StampMark({ index, active }: { index: number; active: boolean }) {
  return (
    <motion.span
      className="relative inline-flex h-8 w-14 rotate-[-5deg] items-center justify-center rounded-[5px] border-2 border-[#8f3528] text-lg font-black leading-none text-[#8f3528] shadow-[0_0_18px_rgba(221,38,54,0.28)] sm:h-10 sm:w-16 sm:text-2xl md:h-12 md:w-20 md:text-3xl"
      initial={{ opacity: 0, y: -28, scale: 1.7, rotate: -18 }}
      animate={
        active
          ? {
              opacity: 1,
              y: 0,
              scale: [1.7, 0.86, 1.04, 1],
              rotate: [-18, -5, -8, -5],
            }
          : { opacity: 0, y: -28, scale: 1.7, rotate: -18 }
      }
      transition={{
        delay: index * 0.18,
        duration: 0.48,
        ease: [0.2, 0.95, 0.2, 1],
      }}
    >
      <span className="absolute inset-[3px] rounded-[3px] border border-[#8f3528]/80" />
      無
    </motion.span>
  );
}`;

assert.equal(
  source.slice(stampStart, stampEnd).replace(/\s+/g, ''),
  expectedStampMark.replace(/\s+/g, ''),
  'StampMark markup and animation must remain unchanged'
);

assert.ok(
  source.includes('/new-asset/background/startup-benefit-hanji.webp'),
  'The section must use the hanji WebP background'
);
assert.ok(!source.includes('backgroundColumns'), 'Vertical marquee decoration must be removed');
assert.ok(
  !source.includes('radial-gradient(circle at 78% 18%'),
  'The old dark gradient background must be removed'
);
assert.ok(
  !source.includes('bg-linear-to-r from-transparent via-[#c9a24d]/70'),
  'The decorative top gold rule must be removed'
);
assert.ok(source.includes('<motion.tr'), 'Benefit rows must animate into view');
assert.ok(source.includes('useReducedMotion'), 'Motion-reduction preferences must be respected');

const asset = await readFile(assetUrl);
assert.equal(asset.subarray(0, 4).toString('ascii'), 'RIFF', 'Background asset must be WebP');
assert.equal(asset.subarray(8, 12).toString('ascii'), 'WEBP', 'Background asset must be WebP');

console.log('Startup benefit hanji contract passed.');
