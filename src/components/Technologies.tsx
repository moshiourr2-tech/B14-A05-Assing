import { useState } from "react";
import technologiesData from "../Data/technologies.json";
import { toast } from "react-toastify";

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

const technologies = technologiesData as Technology[];

const Technology = () => {
  const [stack, setStack] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    const exists = stack.some((item) => item.id === technology.id);

    if (exists) {
      toast.warning(`${technology.name} is already added!`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const removeFromStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));

    toast.success("Technology removed from your stack!");
  };

  const removeAll = () => {
    if (stack.length === 0) {
      toast.info("Your stack is already empty!");
      return;
    }

    setStack([]);

    toast.success("All technologies removed!");
  };

  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_230px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = stack.some((item) => item.id === technology.id);

              return (
                <article
                  key={technology.id}
                  className="flex min-h-77.5 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-10 w-10 object-contain"
                      />
                    </div>

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-600">
                      {technology.badge}
                    </span>
                  </div>

                  <h3 className="mb-2 text-base font-semibold text-slate-900">
                    {technology.name}
                  </h3>

                  <p className="mb-5 line-clamp-3 text-xs leading-5 text-slate-500">
                    {technology.description}
                  </p>

                  <div className="mb-5 flex items-center justify-between gap-2 text-[10px] text-slate-400">
                    <span>{technology.category}</span>

                    <span>{technology.difficulty}</span>

                    <span className="flex items-center gap-1 text-amber-500">
                      <span>★</span>
                      <span>{technology.rating}</span>
                    </span>
                  </div>

                  <button
                    disabled={isAdded}
                    onClick={() => addToStack(technology)}
                    className={`mt-auto w-full rounded-lg px-4 py-2.5 text-xs font-semibold transition-all ${
                      isAdded
                        ? "cursor-not-allowed bg-emerald-100 text-emerald-700"
                        : "bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.98]"
                    }`}
                  >
                    {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                  </button>
                </article>
              );
            })}
          </div>

          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
            <h3 className="text-base font-semibold text-slate-900">
              Your Stack
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              {stack.length} Technology
              {stack.length === 1 ? "" : "ies"} Selected
            </p>

            {stack.length === 0 ? (
              <div className="mt-8 flex items-center justify-center rounded-md border border-dashed border-slate-300 px-4 py-4 text-center">
                <p className="text-xs text-slate-400">Your stack is empty</p>
              </div>
            ) : (
              <>
                <div className="mt-5 space-y-3">
                  {stack.map((technology) => (
                    <div
                      key={technology.id}
                      className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3"
                    >
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-8 w-8 object-contain"
                      />

                      <div className="min-w-0 flex-1">
                        <strong className="block truncate text-xs font-semibold text-slate-800">
                          {technology.name}
                        </strong>

                        <small className="block text-[10px] text-slate-400">
                          {technology.category}
                        </small>
                      </div>

                      <button
                        onClick={() => removeFromStack(technology.id)}
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                        aria-label={`Remove ${technology.name}`}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={removeAll}
                  className="mt-5 w-full rounded-lg border border-red-200 px-4 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
                >
                  Remove All
                </button>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Technology;
