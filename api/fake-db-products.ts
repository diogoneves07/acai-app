import type { Order } from "../src/lib/get-order";

export const fakeDB = {
  flavors: [
    {
      imageLink: "images/acai-morango.jpg",
      name: "Morango",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageLink: "images/acai-morango.jpg",
      name: "Banana",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageLink: "images/acai-morango.jpg",
      name: "Kiwi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ],
  bottles: [
    {
      imageLink: "images/acai-morango.jpg",
      name: "Pequeno(300ml)",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageLink: "images/acai-morango.jpg",
      name: "Médio(500ml)",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageLink: "images/acai-morango.jpg",
      name: "Grande(700ml)",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ],
  sideDish: [
    {
      imageLink: "images/acai-morango.jpg",
      name: "Granola",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageLink: "images/acai-morango.jpg",
      name: "Paçoca",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageLink: "images/acai-morango.jpg",
      name: "Leite ninho",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ],
};

export function getAllFlavors(): (typeof fakeDB)["flavors"] {
  return fakeDB.flavors;
}

export function getAllBottles(): (typeof fakeDB)["bottles"] {
  return fakeDB.bottles;
}

export function getAllSideDish(): (typeof fakeDB)["sideDish"] {
  return fakeDB.sideDish;
}

export interface OrderData {
  flavor: string;
  sideDish: string;
  bottle: string;
  time: 10 | 12 | 15;
}
export function getOrderData(ids: Order): OrderData {
  const o = {} as unknown as OrderData;

  const { flavorId, sideDishId, bottleId } = ids;

  o.sideDish = fakeDB.sideDish[Number(sideDishId)].name ?? "Nenhum";
  o.flavor = fakeDB.flavors[Number(flavorId)].name ?? "";

  const bottle = fakeDB.bottles[Number(bottleId)].name ?? "";

  o.bottle = bottle;

  switch (bottle) {
    case "Pequeno(300ml)":
      o.time = 10;
      break;
    case "Médio(500ml)":
      o.time = 12;

      break;
    default:
      o.time = 15;

      break;
  }

  return o;
}
