interface FlavorProduct {
  flavorId?: string;
}

const localStorageFlavorId = localStorage.getItem("flavorId");

export const flavorsReducerValue = {
  flavorId:
    typeof localStorageFlavorId === "string" ? localStorageFlavorId : undefined,
};

export function flavorsReducer(
  _state: FlavorProduct,
  value: string | undefined
): FlavorProduct {
  if (typeof value === "string") {
    localStorage.setItem("flavorId", value);
  } else {
    localStorage.removeItem("flavorId");
  }

  return {
    flavorId: value,
  };
}

export function getCurrentFlavorId(): string | null {
  return localStorage.getItem("flavorId");
}
