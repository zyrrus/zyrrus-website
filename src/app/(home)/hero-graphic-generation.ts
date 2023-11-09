export interface Point {
  x: number;
  y: number;
}

export interface Cell extends Point {
  width: number;
  height: number;
}

const width = 200;
const height = 150;
const rowGap = 30;
const columnGap = 30;
export const radius = 27;
export const rotation = 60;

const grid = [
  [1, 1, 2],
  [1, 2, 1, 1],
  [1, 2, 1],
];
const initOffsets = [(width * 2) / 3, 0, width / 2];

const _pivotY = (grid.length * height + (grid.length - 1) * rowGap) / 2;
const origin = { x: 200, y: -150 - _pivotY };
export const pivot = {
  x: origin.x,
  y: origin.y + _pivotY,
};
const distance = 100;

function getCell(prevWidths: number, column: number, rowIndex: number): Cell {
  const x = (width + columnGap) * prevWidths;
  const y = (height + rowGap) * rowIndex;
  const w = width * column + columnGap * (column - 1);
  const h = height;

  return { x, y, width: w, height: h };
}

function translate(points: Cell[], translation: Point): Cell[] {
  return points.map((point) => ({
    ...point,
    x: point.x + translation.x,
    y: point.y + translation.y,
  }));
}

function rotate(points: Cell[], pivot: Point, angleInDegrees: number): Cell[] {
  const cosTheta = Math.cos((angleInDegrees * Math.PI) / 180);
  const sinTheta = Math.sin((angleInDegrees * Math.PI) / 180);

  return points.map((point) => {
    const relativeX = point.x - pivot.x;
    const relativeY = point.y - pivot.y;

    const rotatedX = relativeX * cosTheta - relativeY * sinTheta + pivot.x;
    const rotatedY = relativeX * sinTheta + relativeY * cosTheta + pivot.y;

    return {
      ...point,
      x: rotatedX,
      y: rotatedY,
    };
  });
}

function generateGrid() {
  return grid.flatMap((row, rowIndex) => {
    let prevWidths = 0;
    const r = row.map((column) => {
      const cell = getCell(prevWidths, column, rowIndex);
      prevWidths += column;
      return cell;
    });
    return translate(r, { x: initOffsets[rowIndex] ?? 0, y: 0 });
  });
}

export function orchestrateCells(): { start: Cell; end: Cell }[] {
  const core = generateGrid();

  const start = rotate(translate(core, origin), pivot, rotation);
  const end = rotate(
    translate(core, { x: origin.x + distance, y: origin.y }),
    pivot,
    rotation,
  );
  const pts: { start: Cell; end: Cell }[] = [];

  core.forEach((_, i) => {
    if (start[i] !== undefined && end[i] !== undefined) {
      pts.push({ start: start[i]!, end: end[i]! });
    }
  });

  return pts;
}
