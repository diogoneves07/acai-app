interface BottleProduct {
  bottleId?: string;
}

const localStorageBottleId = localStorage.getItem("bottleId");

export const bottlesReducerValue = {
  bottleId:
    typeof localStorageBottleId === "string" ? localStorageBottleId : undefined,
};

export function bottlesReducer(
  _state: BottleProduct,
  value: string | undefined
): BottleProduct {
  if (typeof value === "string") {
    localStorage.setItem("bottleId", value);
  } else {
    localStorage.removeItem("bottleId");
  }

  return {
    bottleId: value,
  };
}

export function getCurrentBottleId(): string | null {
  return localStorage.getItem("bottleId");
}
