interface SideDishProduct {
  sideDishId?: string;
}

const localStorageSideDishId = localStorage.getItem("sideDishId");

export const sideDishsReducerValue = {
  sideDishId:
    typeof localStorageSideDishId === "string"
      ? localStorageSideDishId
      : undefined,
};

export function sideDishsReducer(
  _state: SideDishProduct,
  value: string | undefined
): SideDishProduct {
  if (typeof value === "string") {
    localStorage.setItem("sideDishId", value);
  } else {
    localStorage.removeItem("sideDishId");
  }
  return {
    sideDishId: value,
  };
}

export function getCurrentSideDishId(): string | null {
  return localStorage.getItem("sideDishId");
}
