import RadialGaugeCard from './RadialGaugeCard';

const gaugesData = [
  {
    title: 'Study Output (මාසික)', dotColor: 'bg-purple-500', glowBg: 'bg-purple-600/10',
    val: '184.2', unit: 'Hours', unitColor: 'text-purple-300',
    trendIcon: 'trending_up', trendColor: 'text-emerald-400', trendText: '+18.4%', subText: 'vs 155.6h Target',
    stroke: '#8B5CF6', strokeClass: 'text-purple-500', offset: '18',
    centerText: '92%', centerColor: 'text-white', centerSub: 'Quota', centerSubColor: 'text-purple-400',
  },
  {
    title: 'Retention Index (මතකය)', dotColor: 'bg-emerald-400', glowBg: 'bg-emerald-500/10',
    val: '94.8%', valColor: 'text-emerald-400', unit: 'Optimal', unitColor: 'text-emerald-300',
    trendColor: 'text-emerald-400', trendText: 'Decay < 5.2%', subText: '• High Stability',
    stroke: '#10B981', strokeClass: 'text-emerald-500', offset: '10',
    centerIcon: 'verified_user', centerColor: 'text-emerald-400', centerSub: 'Recall', centerSubColor: 'text-emerald-400',
  },
  {
    title: 'Pacing Velocity (වේගය)', dotColor: 'bg-cyan-400', glowBg: 'bg-cyan-500/10',
    val: '7.7', valColor: 'text-cyan-400', unit: 'Units/Wk', unitColor: 'text-slate-400',
    trendColor: 'text-cyan-300', trendText: 'Req: 1.9/wk', subText: '(4.0x Pace)',
    stroke: '#06B6D4', strokeClass: 'text-cyan-400', offset: '36',
    centerIcon: 'speed', centerColor: 'text-cyan-400', centerSub: 'Hyper', centerSubColor: 'text-cyan-400',
  },
  {
    title: 'A-Probability (විභාග සුදානම)', dotColor: 'bg-amber-400', glowBg: 'bg-amber-500/10',
    val: '91.4%', valColor: 'text-amber-400', unit: '3A Track', unitColor: 'text-amber-300',
    trendColor: 'text-slate-400', trendText: 'Z: +2.418', subText: '• Top 100 Island',
    stroke: '#F59E0B', strokeClass: 'text-amber-400', offset: '17',
    centerText: '3A', centerColor: 'text-amber-400', centerSub: 'Tier 1', centerSubColor: 'text-amber-300',
  },
];

export default function VisualTelemetryGauges() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {gaugesData.map((gauge) => (
        <RadialGaugeCard key={gauge.title} gauge={gauge} />
      ))}
    </section>
  );
}
