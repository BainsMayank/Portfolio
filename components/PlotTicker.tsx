const STEP_VALUES = [3, 4, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12];

/**
 * A stepped, crisp-edged plot line (a math/finance signal rendered on the
 * grid) standing in for a smooth curve, which would break the fixed pixel
 * grid this world is built on.
 */
export function PlotTicker() {
  const cell = 6;
  const width = STEP_VALUES.length * cell;
  const height = 13 * cell;

  let d = `M0,${height - STEP_VALUES[0] * cell}`;
  STEP_VALUES.forEach((v, i) => {
    const x = i * cell;
    const y = height - v * cell;
    d += ` H${x} V${y}`;
  });
  d += ` H${width}`;

  return (
    <svg
      aria-hidden
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
    >
      <path d={d} fill="none" stroke="var(--cyan-dim)" strokeWidth={2} />
    </svg>
  );
}
