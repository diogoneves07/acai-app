import { getCurrentBottleId } from "./handle-bottle";
import { getCurrentFlavorId } from "./handle-flavor";
import { getCurrentSideDishId } from "./handle-side-dish";
import validateOrder from "./validate-order";

export interface Order {
  flavorId: string;
  sideDishId: string | null;
  bottleId: string;
}

export default function getOrder(): Order | null {
  const check = validateOrder();

  if (!check.bottle || !check.flavor) return null;

  return {
    flavorId: getCurrentFlavorId() as string,
    bottleId: getCurrentBottleId() as string,
    sideDishId: getCurrentSideDishId(),
  };
}
