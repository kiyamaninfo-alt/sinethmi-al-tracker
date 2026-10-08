export default function SessionHistoryRow({ session }) {
  return (
    <tr className="hover:bg-slate-800/30 transition-colors">
      <td className="py-3 px-3 font-mono text-slate-300">
        <span className="text-slate-400">📅 {session.date}</span> <span className="text-white font-semibold">{session.start}</span>
      </td>
      <td className="py-3 px-3 font-mono text-slate-300">
        <span className="text-slate-400">📅 {session.date}</span> <span className="text-white font-semibold">{session.stop}</span>
      </td>
      <td className="py-3 px-3">
        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold border ${session.tagColor}`}>
          {session.subject}
        </span>
      </td>
      <td className="py-3 px-3 text-slate-200 font-medium max-w-xs truncate" title={session.topic}>
        {session.shortTopic}
      </td>
      <td className={`py-3 px-3 font-bold ${session.minColor}`}>{session.mins}</td>
      <td className="py-3 px-3">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Fully Completed (Synced)
        </span>
      </td>
      <td className="py-3 px-3 text-right">
        <div className="inline-flex items-center gap-1.5">
          <button type="button" className="p-1 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition" title="Edit">✏️</button>
          <button type="button" className="p-1 rounded hover:bg-rose-900/40 text-slate-400 hover:text-rose-400 transition" title="Delete">🗑️</button>
        </div>
      </td>
    </tr>
  );
}
