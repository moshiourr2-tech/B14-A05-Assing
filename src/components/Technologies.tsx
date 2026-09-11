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

  const removeFromStack = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );
  };

  const removeAll = () => {
    setStack([]);
  };

  return (
    <section className="technology-section">
      <div className="technology-container">

        {/* Heading */}
        <div className="technology-heading">
          <h2>
            Explore the{" "}
            <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main content */}
        <div className="technology-layout">

          {/* Technology Grid */}
          <div className="technology-grid">

            {technologies.map((technology) => {

              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  className="technology-card"
                  key={technology.id}
                >

                  {/* Top */}
                  <div className="card-top">

                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="technology-icon"
                    />

                    <span className="technology-badge">
                      {technology.badge}
                    </span>

                  </div>

                  {/* Name */}
                  <h3>{technology.name}</h3>

                  {/* Description */}
                  <p className="technology-description">
                    {technology.description}
                  </p>

                  {/* Info */}
                  <div className="technology-info">

                    <span className="category-chip">
                      {technology.category}
                    </span>

                    <span className="difficulty">
                      {technology.difficulty}
                    </span>

                    <span className="rating">
                      ⭐ {technology.rating}
                    </span>

                  </div>

                  {/* Button */}
                  <button
                    className={`add-button ${
                      isAdded ? "added" : ""
                    }`}
                    onClick={() => addToStack(technology)}
                    disabled={isAdded}
                  >
                    {isAdded
                      ? "✓ Added to Stack"
                      : "Add to Stack"}
                  </button>

                </div>
              );
            })}

          </div>

          {/* Your Stack */}
          <aside className="stack-sidebar">

            <h2>Your Stack</h2>

            <p className="selected-count">
              {stack.length} Technology
              {stack.length !== 1 ? "ies" : "y"} Selected
            </p>

            {stack.length === 0 ? (

              <div className="empty-stack">
                <p>Your stack is empty.</p>
              </div>

            ) : (

              <>

                <div className="stack-items">

                  {stack.map((technology) => (

                    <div
                      className="stack-item"
                      key={technology.id}
                    >

                      <img
                        src={technology.icon}
                        alt={technology.name}
                      />

                      <div className="stack-item-info">
                        <strong>{technology.name}</strong>
                        <span>{technology.category}</span>
                      </div>

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

                </div>

                <button
                  className="remove-all-button"
                  onClick={removeAll}
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