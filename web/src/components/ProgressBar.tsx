interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4 overflow-clip">
      <div
        className="h-3 rounded-xl bg-violet-600"
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-value={progress}
        style={{ width: `${progress}%`, transition: 'width 0.2s'}}
      ></div>
    </div>
  );
}
