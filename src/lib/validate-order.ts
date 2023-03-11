import { getCurrentBottleId } from "./handle-bottle";
import { getCurrentFlavorId } from "./handle-flavor";

export default function validateOrder(): { flavor: boolean; bottle: boolean } {
  return {
    bottle: getCurrentBottleId() !== null,
    flavor: getCurrentFlavorId() !== null,
  };
}
