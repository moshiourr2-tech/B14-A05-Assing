import { useState } from "react";
import technologiesData from "../Data/technologies.json";

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

  // Add technology
  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      alert(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);
  };

  // Remove one technology
  const removeFromStack = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );
  };

  // Remove everything
  const removeAll = () => {
    setStack([]);
  };

  return (
    <section className="technology-section">

      <div className="technology-container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="technology-heading">

          <h2>
            Explore the{" "}
            <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category to build your ideal stack.
          </p>

        </div>


        {/* =========================
            TECHNOLOGY + STACK
        ========================= */}

        <div className="technology-content">


          {/* =========================
              TECHNOLOGY GRID
          ========================= */}

          <div className="technology-grid">

            {technologies.map((technology) => {

              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <article
                  className="technology-card"
                  key={technology.id}
                >

                  {/* ICON + BADGE */}

                  <div className="technology-card-header">

                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="technology-icon"
                    />

                    <span className="technology-badge">
                      {technology.badge}
                    </span>

                  </div>


                  {/* TECHNOLOGY NAME */}

                  <h3>
                    {technology.name}
                  </h3>


                  {/* DESCRIPTION */}

                  <p className="technology-description">
                    {technology.description}
                  </p>


                  {/* CATEGORY / DIFFICULTY / RATING */}

                  <div className="technology-details">

                    <span className="category">
                      {technology.category}
                    </span>

                    <span className="difficulty">
                      {technology.difficulty}
                    </span>

                    <span className="rating">
                      ⭐ {technology.rating}
                    </span>

                  </div>


                  {/* ADD BUTTON */}

                  <button
                    className={`stack-button ${
                      isAdded ? "button-added" : ""
                    }`}
                    disabled={isAdded}
                    onClick={() =>
                      addToStack(technology)
                    }
                  >

                    {isAdded
                      ? "✓ Added to Stack"
                      : "Add to Stack"}

                  </button>

                </article>
              );
            })}

          </div>


          {/* =========================
              YOUR STACK
          ========================= */}

          <aside className="your-stack">

            <h3>
              Your Stack
            </h3>


            <p className="stack-count">
              {stack.length} Technology
              {stack.length === 1 ? "" : "ies"} Selected
            </p>


            {/* EMPTY STATE */}

            {stack.length === 0 ? (

              <div className="stack-empty">

                <p>
                  Your stack is empty.
                </p>

              </div>

            ) : (

              /* SELECTED TECHNOLOGIES */

              <div className="stack-list">

                {stack.map((technology) => (

                  <div
                    className="stack-list-item"
                    key={technology.id}
                  >

                    <img
                      src={technology.icon}
                      alt={technology.name}
                    />


                    <div className="stack-item-text">

                      <strong>
                        {technology.name}
                      </strong>

                      <small>
                        {technology.category}
                      </small>

                    </div>


                    {/* REMOVE */}

                    <button
                      className="remove-button"
                      onClick={() =>
                        removeFromStack(technology.id)
                      }
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>

                  </div>

                ))}


                {/* REMOVE ALL */}

                <button
                  className="remove-all"
                  onClick={removeAll}
                >
                  Remove All
                </button>

              </div>

            )}

          </aside>

        </div>

      </div>

    </section>
  );
};

export default Technology;