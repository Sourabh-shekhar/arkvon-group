import { companies } from "../data/companies";

export default function GroupDiagram() {
  const cx = 300;
  const cy = 300;
  const radius = 190;
  const count = companies.length;

  const points = companies.map((c, i) => {
    // spread nodes across an arc rather than a full circle so it reads
    // left-to-right like an org chart, not a random scatter
    const startAngle = -100;
    const endAngle = 100;
    const angle =
      count === 1
        ? 0
        : startAngle + ((endAngle - startAngle) * i) / (count - 1);
    const rad = (angle * Math.PI) / 180;
    const x = cx + radius * Math.sin(rad);
    const y = cy - radius * Math.cos(rad) * 0.55 + 40;
    return { ...c, x, y };
  });

  return (
    <svg
      viewBox="0 0 600 420"
      className="w-full h-auto max-w-xl mx-auto"
      role="img"
      aria-label="Diagram showing Arkvon Group at the center connected to each subsidiary company"
    >
      {points.map((p) => (
        <line
          key={`line-${p.slug}`}
          x1={cx}
          y1={cy}
          x2={p.x}
          y2={p.y}
          className="node-line"
        />
      ))}

      <circle cx={cx} cy={cy} r="46" fill="#0F1B2D" />
      <text
        x={cx}
        y={cy - 4}
        textAnchor="middle"
        className="fill-paper"
        style={{ font: "600 12px var(--font-body)" }}
      >
        ARKVON
      </text>
      <text
        x={cx}
        y={cy + 12}
        textAnchor="middle"
        className="fill-bronze-light"
        style={{ font: "600 12px var(--font-body)" }}
      >
        GROUP
      </text>

      {points.map((p) => (
        <g key={p.slug}>
          <circle cx={p.x} cy={p.y} r="8" fill="#B08D57" />
          <text
            x={p.x}
            y={p.y - 16}
            textAnchor="middle"
            className="fill-charcoal"
            style={{ font: "500 12px var(--font-body)" }}
          >
            {p.name}
          </text>
        </g>
      ))}
    </svg>
  );
}
