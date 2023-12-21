function pkmNameToUppercase(name: string) {
  const regex = /\-\w/g;
  name = name.charAt(0).toUpperCase() + name.slice(1);

  const multiNamed = name.match(regex) ?? null;
  if (multiNamed) {
    multiNamed.forEach((multiName) => {
      name = name.replace(regex, ` ${multiName[1].toUpperCase()}`);
    });
  }

  return name;
}

export { pkmNameToUppercase };
