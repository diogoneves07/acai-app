import randomIntFromInterval from "./random-int-from-interval";

export default function getRGBRandomColor(): string {
  return `rgb(${[
    randomIntFromInterval(0, 255),
    randomIntFromInterval(0, 255),
    randomIntFromInterval(0, 255),
  ].toString()})`;
}
