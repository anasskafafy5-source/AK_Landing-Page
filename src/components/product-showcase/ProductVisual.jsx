import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  Check,
  CircleDot,
  ListChecks,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

function ProductFrame({ product, children }) {
  return (
    <div
      aria-hidden="true"
      className="border-text/10 bg-surface shadow-background/60 overflow-hidden rounded-3xl border shadow-2xl"
    >
      <div className="border-text/10 bg-background-secondary/70 flex h-12 items-center justify-between border-b px-4 sm:px-5">
        <div className="flex gap-1.5">
          <span className="bg-danger size-2 rounded-full" />
          <span className="bg-warning size-2 rounded-full" />
          <span className="bg-success size-2 rounded-full" />
        </div>
        <span className="text-muted text-[0.65rem] font-medium tracking-wider uppercase">
          {product.eyebrow}
        </span>
      </div>
      <div className="min-h-80 p-4 sm:min-h-96 sm:p-6">{children}</div>
    </div>
  );
}

function ProjectHubVisual({ product }) {
  const tasks = [
    ["Finalize product brief", "Today", "text-warning"],
    ["Review onboarding flow", "Tomorrow", "text-info"],
    ["Prepare launch assets", "Friday", "text-success"],
  ];

  return (
    <ProductFrame product={product}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-primary-light text-xs tracking-widest uppercase">
            Product launch
          </p>
          <h4 className="text-text mt-1 text-lg font-semibold sm:text-xl">
            Team workspace
          </h4>
        </div>
        <span className="border-success/40 bg-success/15 text-success rounded-lg border px-3 py-1.5 text-xs">
          72% complete
        </span>
      </div>

      <div className="bg-border mt-5 h-1.5 overflow-hidden rounded-full">
        <div className="bg-primary h-full w-[72%] rounded-full" />
      </div>

      <div className="mt-5 grid gap-3">
        {tasks.map(([task, date, color]) => (
          <div
            key={task}
            className="border-text/10 bg-surface-light/60 flex items-center justify-between gap-4 rounded-2xl border p-3 sm:p-4"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="border-primary/50 bg-primary/15 text-primary-light flex size-8 shrink-0 items-center justify-center rounded-xl border">
                <CircleDot size={15} />
              </span>
              <span className="text-text-secondary truncate text-xs font-medium sm:text-sm">
                {task}
              </span>
            </div>
            <span className={`${color} shrink-0 text-[0.65rem] sm:text-xs`}>
              {date}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="border-text/10 bg-primary/15 rounded-2xl border p-3">
          <Users className="text-primary-light" size={17} />
          <p className="text-text mt-3 text-sm font-semibold">8 teammates</p>
        </div>
        <div className="border-text/10 bg-info/15 rounded-2xl border p-3">
          <CalendarDays className="text-info" size={17} />
          <p className="text-text mt-3 text-sm font-semibold">12 milestones</p>
        </div>
      </div>
    </ProductFrame>
  );
}

function AIAssistantVisual({ product }) {
  return (
    <ProductFrame product={product}>
      <div className="border-accent/50 bg-accent/20 rounded-2xl border p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <span className="bg-accent/25 text-accent-light flex size-10 items-center justify-center rounded-xl">
            <Bot size={19} />
          </span>
          <div>
            <p className="text-text text-sm font-semibold">AKS Assistant</p>
            <p className="text-accent-light mt-0.5 text-xs">Analyzing work</p>
          </div>
        </div>
        <p className="text-text-secondary mt-4 text-sm leading-6">
          The launch is on track. Two approvals need attention before Friday.
        </p>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="border-text/10 bg-surface-light/60 rounded-2xl border p-4">
          <div className="text-primary-light flex items-center gap-2 text-xs font-medium">
            <ListChecks size={15} />
            Suggested actions
          </div>
          <div className="mt-4 space-y-3">
            {["Assign design approval", "Confirm launch owner"].map((item) => (
              <div
                key={item}
                className="text-text-secondary flex items-center gap-2 text-xs"
              >
                <span className="bg-primary/20 text-primary-light flex size-5 items-center justify-center rounded-full">
                  <Check size={11} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="border-warning/40 bg-warning/15 rounded-2xl border p-4">
          <Sparkles className="text-warning" size={17} />
          <p className="text-text mt-4 text-sm font-semibold">
            Priority signal
          </p>
          <p className="text-text-secondary mt-2 text-xs leading-5">
            Legal review may affect the release date.
          </p>
        </div>
      </div>

      <div className="border-text/10 bg-background/55 mt-4 flex items-center justify-between rounded-2xl border px-4 py-3">
        <span className="text-muted text-xs">
          Ask AKS about this project...
        </span>
        <span className="bg-accent text-text flex size-8 items-center justify-center rounded-xl">
          <ArrowUpRight size={15} />
        </span>
      </div>
    </ProductFrame>
  );
}

function TeamIntelligenceVisual({ product }) {
  const bars = ["h-14", "h-20", "h-16", "h-28", "h-24", "h-32", "h-28"];

  return (
    <ProductFrame product={product}>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {[
          ["84%", "Capacity", "text-info"],
          ["+18%", "Velocity", "text-success"],
          ["3", "Risks", "text-warning"],
        ].map(([value, label, color]) => (
          <div
            key={label}
            className="border-text/10 bg-surface-light/60 rounded-2xl border p-3 sm:p-4"
          >
            <p className={`${color} text-lg font-semibold sm:text-2xl`}>
              {value}
            </p>
            <p className="text-muted mt-1 text-[0.65rem] sm:text-xs">{label}</p>
          </div>
        ))}
      </div>

      <div className="border-text/10 bg-background/50 relative mt-4 h-44 overflow-hidden rounded-2xl border p-4 sm:h-52">
        <div className="absolute inset-x-4 bottom-4 flex h-36 items-end gap-2 sm:h-40">
          {bars.map((height, index) => (
            <span
              key={`${height}-${index}`}
              className={`${index > 4 ? "bg-success" : "bg-primary-light"} ${height} flex-1 rounded-t-md opacity-70`}
            />
          ))}
        </div>
        <div className="border-info/40 bg-info/15 absolute top-4 right-4 rounded-xl border px-3 py-2">
          <div className="text-info flex items-center gap-1.5 text-xs font-medium">
            <TrendingUp size={13} />
            Trending up
          </div>
        </div>
      </div>

      <div className="border-success/40 bg-success/15 mt-4 flex items-center gap-3 rounded-2xl border p-3 sm:p-4">
        <span className="bg-success/20 text-success flex size-9 shrink-0 items-center justify-center rounded-xl">
          <Sparkles size={16} />
        </span>
        <p className="text-text-secondary text-xs leading-5 sm:text-sm">
          Delivery confidence improved after workload was rebalanced.
        </p>
      </div>
    </ProductFrame>
  );
}

export default function ProductVisual({ product }) {
  const visuals = {
    "project-hub": ProjectHubVisual,
    "ai-assistant": AIAssistantVisual,
    "team-intelligence": TeamIntelligenceVisual,
  };
  const Visual = visuals[product.visualType];

  return Visual ? <Visual product={product} /> : null;
}
