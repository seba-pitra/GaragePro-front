export function getPropsByCamelCase(object: { [key: string]: any }) {
  const propsToUpdate: { [key: string]: any } = {};

  for (const [key, value] of Object.entries(object)) {
    if (value !== undefined) {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      propsToUpdate[camelKey] = value;
    }
  }

  return propsToUpdate;
}
