import dayjs from "dayjs";
import React from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { colors } from "../../styles/color";

export const isEmpty = (value: any) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export const convertEnumToArray = (e: any): { [key: string]: Object }[] => {
  const enumObjectList = Object.values(e) as string[];
  const enumTexts = enumObjectList.filter(
    (_v: string, i: number) => i < enumObjectList.length / 2
  ) as string[];
  const enumValues = enumObjectList.filter(
    (_v: string, i: number) => i >= enumObjectList.length / 2
  ) as string[];
  return enumTexts.map((p: string, i: number) => {
    return { value: enumValues[i], text: p.toString() };
  });
};

export const handleExport = (
  exportToggle: boolean,
  set: React.Dispatch<React.SetStateAction<boolean>>
) => {
  set(!exportToggle);
};

export const parseNameSurname = (inputStr: string) => {
  let fullName = inputStr.split(" ");
  let name = fullName.slice(0, -1).join(" ");
  let surname = fullName.slice(-1)[0];
  return {
    name: name,
    surname: surname,
  };
};

export const getKey = (
  constant: Readonly<object>,
  value: string | null
): string => {
  const index = Object.values(constant).findIndex((status) => status === value);
  return Object.keys(constant)[index];
};

export const getValue = (constant: Readonly<object>, key: string): string => {
  const index = Object.keys(constant).findIndex((status) => status === key);
  return Object.values(constant)[index];
};

export const badgeColor = (value: number) => {
  if (value >= 0 && value <= 2) {
    return colors.badge.score5;
  } else if (value > 2 && value <= 4) {
    return colors.badge.score4;
  } else if (value > 4 && value <= 6) {
    return colors.badge.score3;
  } else if (value > 6 && value <= 8) {
    return colors.badge.score2;
  } else {
    return colors.badge.score1;
  }
};

export const splitNumber = (number: number) => {
  const numberString = String(number);
  const groupSize = 3;

  let result = "";
  let currentIndex = numberString.length;

  while (currentIndex > 0) {
    const startIndex = Math.max(currentIndex - groupSize, 0);
    const group = numberString.substring(startIndex, currentIndex);
    result = group + (result ? "," + result : "");
    currentIndex -= groupSize;
  }

  return result;
};

export const dateFormatStartDate = (startDate: string) => {
  return dayjs(startDate).format("DD-MM-YYYY 00:00").toString();
};

export const dateFormatEndDate = (endDate: string) => {
  return dayjs(endDate).format("DD-MM-YYYY 23:59").toString();
};

export const uniqueObjectArray = (args: any[]): any[] => {
  const stringifiedArray = args.map((child) => JSON.stringify(child));
  const uniqueOnes = stringifiedArray.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  const parsedArray = uniqueOnes.map((child) => JSON.parse(child));
  return parsedArray;
};

export const objectWithoutKey = (
  object: { [x: string]: string | React.ReactNode },
  key: string
) => {
  const { [key]: deletedKey, ...otherKeys } = object;
  return otherKeys;
};

export const objectWithoutKeys = (
  object: { [x: string]: string | React.ReactNode },
  keys: string[]
) => {
  const arr = [];
  arr.push(object);
  for (let i = 0; i < keys.length; i += 1) {
    const obj = objectWithoutKey(arr[0], keys[i]);
    arr.pop();
    arr.push(obj);
  }
  return arr[0];
};

export const ptr = (px: number) => {
  const baseSize = 16;
  return `${(1 / baseSize) * px}rem`;
};

export const startDateConverter = (startDate: string) => {
  dayjs.extend(customParseFormat);

  return dayjs(startDate, "DD-MM-YYYY 00:00").format("MM-DD-YYYY 00:00");
};

export const endDateConverter = (endDate: string) => {
  dayjs.extend(customParseFormat);

  return dayjs(endDate, "DD-MM-YYYY 23:59").format("MM-DD-YYYY 23:59");
};

export const mapToString = (
  map: Map<string, any>,
  delimiter = "\n"
): string => {
  return Array.from(map.entries())
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join(delimiter);
};
