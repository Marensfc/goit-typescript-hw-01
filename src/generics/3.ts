type objectWithoutArray = object & { length?: never };

function merge<T extends objectWithoutArray, U extends objectWithoutArray>(
  objA: T,
  objB: U
): T & U {
  return Object.assign(objA, objB);
}
