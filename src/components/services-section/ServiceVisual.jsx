import {
  Bell,
  Bot,
  Check,
  ChevronRight,
  CircleDot,
  ListChecks,
  MessageSquareText,
  Sparkles,
  TrendingUp,
  UserRoundCheck,
  Zap,
} from "lucide-react";

function VisualShell({ service, children }) {
  const visualBackgrounds = {
    "project-board": "from-primary/25 via-surface to-info/20",
    "meeting-summary": "from-accent/20 via-surface to-warning/20",
    "automation-flow": "from-warning/20 via-surface to-primary/25",
    analytics: "from-info/25 via-surface to-success/20",
  };

  return (
    <div
      aria-hidden="true"
      className={`border-text/10 bg-surface shadow-background/60 relative h-full overflow-hidden rounded-3xl border bg-linear-to-br shadow-2xl ${visualBackgrounds[service.visualType]}`}
    >
      <div className="bg-text/10 absolute -top-16 -right-12 size-44 rounded-full" />
      <div className="border-text/10 bg-background-secondary/55 relative flex h-10 items-center justify-between border-b px-4 backdrop-blur-sm sm:h-12 sm:px-5">
        <div className="flex gap-1.5">
          <span className="bg-danger size-2 rounded-full" />
          <span className="bg-warning size-2 rounded-full" />
          <span className="bg-success size-2 rounded-full" />
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-[0.65rem] font-medium ${
            service.aiAccent
              ? "border-accent/50 bg-accent/20 text-accent-light"
              : "border-primary-light/50 bg-primary/20 text-primary-light"
          }`}
        >
          {service.accentLabel}
        </span>
      </div>
      <div className="relative h-[calc(100%-2.5rem)] p-3 sm:h-[calc(100%-3rem)] sm:p-6">
        {children}
      </div>
    </div>
  );
}

function ProjectBoardVisual({ service }) {
  const columns = [
    {
      title: "Planned",
      tasks: ["Research", "Scope"],
      color: "bg-info",
    },
    {
      title: "In progress",
      tasks: ["Prototype", "Review"],
      color: "bg-primary-light",
    },
    {
      title: "Complete",
      tasks: ["Brief", "Handoff"],
      color: "bg-success",
    },
  ];

  return (
    <VisualShell service={service}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-primary-light text-xs tracking-widest uppercase">
            Product launch
          </p>
          <p className="text-text mt-1 text-lg font-semibold">Sprint board</p>
        </div>
        <div className="flex -space-x-2">
          {["AM", "JR", "KS"].map((initials) => (
            <span
              key={initials}
              className="border-background-secondary bg-surface-light text-text-secondary flex size-8 items-center justify-center rounded-full border-2 text-[0.6rem] font-semibold"
            >
              {initials}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 grid h-[calc(100%-3rem)] grid-cols-3 gap-2 sm:mt-5 sm:h-[calc(100%-3.5rem)] sm:gap-3">
        {columns.map((column, columnIndex) => (
          <div
            key={column.title}
            className="border-text/10 bg-surface-light/65 min-w-0 rounded-xl border p-2 sm:rounded-2xl sm:p-3"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-muted flex min-w-0 items-center gap-1.5 truncate text-[0.65rem] font-medium sm:text-xs">
                <span
                  className={`${column.color} size-1.5 shrink-0 rounded-full`}
                />
                <span className="truncate">{column.title}</span>
              </span>
              <span className="text-muted text-[0.6rem]">
                {column.tasks.length}
              </span>
            </div>
            <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2.5">
              {column.tasks.map((task, taskIndex) => (
                <div
                  key={task}
                  className={`rounded-lg border p-2 sm:rounded-xl sm:p-3 ${
                    columnIndex === 1 && taskIndex === 0
                      ? "border-primary-light/60 bg-primary/25 shadow-primary/20 shadow-md"
                      : "border-text/10 bg-background/55"
                  }`}
                >
                  <div
                    className={`${column.color} mb-2 h-1.5 w-8 rounded-full opacity-90 sm:mb-3`}
                  />
                  <p className="text-text-secondary truncate text-[0.65rem] font-medium sm:text-xs">
                    {task}
                  </p>
                  <div className="mt-2 flex items-center justify-between sm:mt-3">
                    <span className="bg-surface-light size-5 rounded-full" />
                    {columnIndex === 2 ? (
                      <Check size={13} className="text-success" />
                    ) : (
                      <CircleDot size={13} className="text-muted" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </VisualShell>
  );
}

function MeetingSummaryVisual({ service }) {
  const waveHeights = [
    ["h-4", "bg-primary-light"],
    ["h-8", "bg-accent-light"],
    ["h-5", "bg-warning"],
    ["h-10", "bg-primary-light"],
    ["h-6", "bg-text"],
    ["h-9", "bg-accent-light"],
    ["h-4", "bg-info"],
    ["h-7", "bg-primary-light"],
    ["h-5", "bg-warning"],
  ];

  return (
    <VisualShell service={service}>
      <div className="border-text/10 bg-surface-light/65 rounded-2xl border p-3 sm:p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-primary/25 text-primary-light flex size-9 items-center justify-center rounded-xl">
              <MessageSquareText size={17} />
            </span>
            <div>
              <p className="text-text text-sm font-semibold">Weekly sync</p>
              <p className="text-muted text-xs">24:18</p>
            </div>
          </div>
          <span className="text-success flex items-center gap-2 text-xs">
            <span className="bg-success size-1.5 rounded-full" />
            Complete
          </span>
        </div>
        <div className="bg-background/55 mt-3 flex h-8 items-center justify-center gap-2 overflow-hidden rounded-xl px-4 sm:mt-4 sm:h-11">
          {waveHeights.map(([height, color], index) => (
            <span
              key={`${height}-${color}-${index}`}
              className={`${color} w-1.5 rounded-full opacity-90 ${height}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[1.08fr_0.92fr] gap-2 sm:mt-4 sm:gap-4">
        <div className="border-accent/50 bg-accent/20 rounded-2xl border p-3 sm:p-4">
          <div className="text-accent-light flex items-center gap-2 text-xs font-medium">
            <Sparkles size={14} />
            AI summary
          </div>
          <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
            {["w-full", "w-5/6", "w-2/3"].map((width) => (
              <span
                key={width}
                className={`bg-accent-light/50 block h-2 rounded-full ${width}`}
              />
            ))}
          </div>
        </div>
        <div className="border-text/10 bg-surface-light/65 rounded-2xl border p-3 sm:p-4">
          <div className="text-text-secondary flex items-center gap-2 text-xs font-medium">
            <ListChecks size={14} className="text-primary-light" />
            Actions
          </div>
          <div className="mt-2 space-y-2 sm:mt-3 sm:space-y-3">
            {["Owner assigned", "Due Friday"].map((item) => (
              <div
                key={item}
                className="text-muted flex items-center gap-2 text-xs"
              >
                <span className="bg-primary/25 text-primary-light flex size-4 items-center justify-center rounded-full">
                  <Check size={10} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function AutomationFlowVisual({ service }) {
  const steps = [
    {
      label: "Trigger",
      icon: Zap,
      style: "border-warning/60 bg-warning/20 text-warning",
    },
    {
      label: "AI review",
      icon: Bot,
      style: "border-accent/60 bg-accent/20 text-accent-light",
    },
    {
      label: "Assign",
      icon: UserRoundCheck,
      style: "border-primary-light/60 bg-primary/25 text-primary-light",
    },
    {
      label: "Notify",
      icon: Bell,
      style: "border-info/60 bg-info/20 text-info",
    },
  ];

  return (
    <VisualShell service={service}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-primary-light text-xs tracking-widest uppercase">
            Active workflow
          </p>
          <p className="text-text mt-1 text-lg font-semibold">New request</p>
        </div>
        <span className="border-success/50 bg-success/20 text-success rounded-lg border px-3 py-1.5 text-xs">
          Running
        </span>
      </div>

      <div className="relative mt-5 grid grid-cols-4 gap-2 sm:mt-10 sm:gap-4">
        <div className="bg-border absolute top-7 right-[12.5%] left-[12.5%] h-px" />
        <div className="bg-primary/60 absolute top-7 left-[12.5%] h-px w-2/3" />
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.label}
              className="relative z-10 flex min-w-0 flex-col items-center"
            >
              <div
                className={`flex size-10 items-center justify-center rounded-xl border sm:size-14 sm:rounded-2xl ${step.style}`}
              >
                <Icon size={19} />
              </div>
              <span className="text-text-secondary mt-3 truncate text-[0.65rem] font-medium sm:text-xs">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="border-text/10 bg-surface-light/65 mt-5 rounded-2xl border p-3 sm:mt-10 sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-primary/25 text-primary-light flex size-9 items-center justify-center rounded-xl">
              <Zap size={16} />
            </span>
            <div>
              <p className="text-text text-sm font-medium">
                Automation complete
              </p>
              <p className="text-muted mt-1 text-xs">4 steps · 1.8 seconds</p>
            </div>
          </div>
          <Check size={18} className="text-success" />
        </div>
      </div>
    </VisualShell>
  );
}

function AnalyticsVisual({ service }) {
  const bars = [
    ["h-14", "bg-info"],
    ["h-20", "bg-primary-light"],
    ["h-16", "bg-success"],
    ["h-28", "bg-primary-light"],
    ["h-24", "bg-warning"],
    ["h-32", "bg-info"],
    ["h-28", "bg-success"],
  ];

  const metrics = [
    ["92%", "On track", "text-success"],
    ["18h", "Saved", "text-info"],
    ["+24%", "Velocity", "text-primary-light"],
  ];

  return (
    <VisualShell service={service}>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {metrics.map(([value, label, color]) => (
          <div
            key={label}
            className="border-text/10 bg-surface-light/65 rounded-2xl border p-3 sm:p-4"
          >
            <p className={`${color} text-lg font-semibold sm:text-2xl`}>
              {value}
            </p>
            <p className="text-muted mt-1 text-[0.65rem] sm:text-xs">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-[1.35fr_0.65fr] gap-2 sm:mt-4 sm:gap-4">
        <div className="border-text/10 bg-surface-light/55 relative h-36 overflow-hidden rounded-2xl border p-4 sm:h-48">
          <div className="absolute inset-x-4 bottom-4 flex h-28 items-end gap-2 sm:h-36">
            {bars.map(([height, color], index) => (
              <span
                key={`${height}-${color}-${index}`}
                className={`${color} flex-1 rounded-t-md opacity-75 ${height}`}
              />
            ))}
          </div>
          <svg
            viewBox="0 0 360 120"
            preserveAspectRatio="none"
            className="text-primary-light absolute inset-x-4 bottom-5 h-32 w-[calc(100%-2rem)]"
          >
            <path
              d="M0 100 C45 94 64 76 102 82 S166 48 210 58 S278 22 360 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="border-accent/50 bg-accent/20 rounded-2xl border p-3 sm:p-4">
          <div className="text-accent-light flex items-center gap-2 text-xs font-medium">
            <Sparkles size={14} />
            AI insight
          </div>
          <TrendingUp className="text-success mt-3 sm:mt-6" size={22} />
          <p className="text-text-secondary mt-2 text-xs leading-5 font-medium sm:mt-3 sm:text-sm sm:leading-6">
            Delivery is trending ahead of plan.
          </p>
          <div className="text-primary-light mt-3 flex items-center gap-1 text-xs sm:mt-5">
            View report
            <ChevronRight size={13} />
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

export default function ServiceVisual({ service }) {
  const visuals = {
    "project-board": ProjectBoardVisual,
    "meeting-summary": MeetingSummaryVisual,
    "automation-flow": AutomationFlowVisual,
    analytics: AnalyticsVisual,
  };
  const Visual = visuals[service.visualType];

  return Visual ? <Visual service={service} /> : null;
}
