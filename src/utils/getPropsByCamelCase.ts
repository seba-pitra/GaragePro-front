export function getPropsByCamelCase(object: {[key: string]: any}) {
  const propsToUpdate = {} as any;

  for (const [key, value] of Object.entries(object)) {
    if (value !== undefined) {
      let newKey = key;

      for (let i = 0; i < key.length; i++) {
        const currentCharacter = key[i];
        const nextCharacter = key[i];

        if (currentCharacter === "_") {
          newKey = newKey.replace(
            currentCharacter,
            nextCharacter.toUpperCase()
          );
        }
      }

      propsToUpdate[newKey] = value;
    }
  }

  return propsToUpdate;
}
