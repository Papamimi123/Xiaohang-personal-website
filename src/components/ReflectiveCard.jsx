import { Fingerprint, Activity, Lock } from 'lucide-react';

const UNITEDHEALTH_GROUP_LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/f/f3/UnitedHealth_Group_logo.svg';

const ReflectiveCard = ({
  blurStrength = 12,
  color = '#111111',
  metalness = 1,
  roughness = 0.4,
  overlayColor = 'rgba(18, 24, 32, 0.18)',
  displacementStrength = 20,
  noiseScale = 1,
  specularConstant = 1.2,
  grayscale = 1,
  glassDistortion = 0,
  className = '',
  style = {}
}) => {
  const baseFrequency = 0.03 / Math.max(0.1, noiseScale);
  const saturation = 1 - Math.max(0, Math.min(1, grayscale));

  const cssVariables = {
    '--blur-strength': `${blurStrength}px`,
    '--metalness': metalness,
    '--roughness': roughness,
    '--overlay-color': overlayColor,
    '--text-color': color,
    '--saturation': saturation
  };

  return (
    <div
      className={`relative w-[320px] h-[500px] rounded-[20px] overflow-hidden bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)_inset] isolate font-sans ${className}`}
      style={{ ...style, ...cssVariables }}>
      <svg
        className="absolute w-0 h-0 pointer-events-none opacity-0"
        aria-hidden="true">
        <defs>
          <filter id="metallic-displacement" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="turbulence"
              baseFrequency={baseFrequency}
              numOctaves="2"
              result="noise" />
            <feColorMatrix in="noise" type="luminanceToAlpha" result="noiseAlpha" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={displacementStrength}
              xChannelSelector="R"
              yChannelSelector="G"
              result="rippled" />
            <feSpecularLighting
              in="noiseAlpha"
              surfaceScale={displacementStrength}
              specularConstant={specularConstant}
              specularExponent="20"
              lightingColor="#ffffff"
              result="light">
              <fePointLight x="0" y="0" z="300" />
            </feSpecularLighting>
            <feComposite in="light" in2="rippled" operator="in" result="light-effect" />
            <feBlend in="light-effect" in2="rippled" mode="screen" result="metallic-result" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="solidAlpha" />
            <feMorphology in="solidAlpha" operator="erode" radius="45" result="erodedAlpha" />
            <feGaussianBlur in="erodedAlpha" stdDeviation="10" result="blurredMap" />
            <feComponentTransfer in="blurredMap" result="glassMap">
              <feFuncA type="linear" slope="0.5" intercept="0" />
            </feComponentTransfer>
            <feDisplacementMap
              in="metallic-result"
              in2="glassMap"
              scale={glassDistortion}
              xChannelSelector="A"
              yChannelSelector="A"
              result="final" />
          </filter>
        </defs>
      </svg>
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.95),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.55),transparent_24%),linear-gradient(135deg,#eef2f6_0%,#c9d1da_22%,#f8fbff_42%,#a8b0bb_68%,#e7ebf0_100%)]"
        style={{
          filter:
            'saturate(var(--saturation, 0)) contrast(120%) brightness(110%) blur(var(--blur-strength, 12px)) url(#metallic-displacement)'
        }}
      />
      <div
        className="absolute inset-0 z-10 opacity-[var(--roughness,0.4)] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.8%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noiseFilter)%27%2F%3E%3C%2Fsvg%3E')] mix-blend-overlay" />
      <div
        className="absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_60%,rgba(255,255,255,0.3)_100%)] pointer-events-none mix-blend-overlay opacity-[var(--metalness,1)]" />
      <div
        className="absolute inset-0 rounded-[20px] p-[1px] bg-[linear-gradient(135deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.6)_100%)] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] z-20 pointer-events-none" />
      <div
        className="relative z-10 h-full flex flex-col justify-between p-10 text-[var(--text-color,white)] bg-[var(--overlay-color,rgba(255,255,255,0.05))]">
        <div
          className="flex justify-between items-center border-b border-black/15 pb-5">
          <div
            className="flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] px-4 py-2 bg-black/10 rounded border border-black/15">
            <Lock size={17} className="opacity-80" />
            <span>SECURE ACCESS</span>
          </div>
          <Activity className="opacity-80" size={28} />
        </div>

        <div
          className="flex-1 flex flex-col items-center justify-center text-center gap-10 py-10">
          <div className="flex h-32 w-full max-w-[300px] items-center justify-center rounded-2xl border border-black/10 bg-white/95 px-8 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
            <img
              src={UNITEDHEALTH_GROUP_LOGO_URL}
              alt="UnitedHealth Group logo"
              className="max-h-full w-full object-contain"
            />
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-[0.05em] m-0 mb-3 drop-shadow-md">Xiaohang Chu</h2>
            <p className="text-base tracking-[0.2em] opacity-65 m-0 uppercase">AI Engineer</p>
          </div>
        </div>

        <div className="flex justify-between items-end border-t border-black/15 pt-7">
          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-[0.1em] opacity-55">Contact Info</span>
            <span className="font-mono text-lg tracking-[0.05em]">xiaohang_chu@optum.com</span>
            <span className="font-mono text-lg tracking-[0.05em]">614-806-3257</span>
          </div>
          <div className="opacity-40">
            <Fingerprint size={44} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectiveCard;
