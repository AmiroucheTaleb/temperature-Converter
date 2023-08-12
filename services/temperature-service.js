export function getOppositeUnit(unit) {
  return unit === "°C" ? "°F" : "°C";
}

export function convertToUnit(unit, value) {
  if (unit === "°C") {
    return (value - 32) / 1.8;
  } else {
    return value * 1.8 + 32;
  }
}

export function isColdTemp(value, unit) {
  if (unit === "°C") {
    return value < 0;
  } else {
    return value < 32;
  }
}
