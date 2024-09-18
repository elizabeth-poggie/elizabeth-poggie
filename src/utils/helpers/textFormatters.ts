export const pluralToSingular = (text: string): string => {
  // Handle irregular plurals
  const irregulars = {
    children: "child",
    men: "man",
    women: "woman",
    feet: "foot",
    teeth: "tooth",
    geese: "goose",
    mice: "mouse",
    people: "person",
    leaves: "leaf",
    lives: "life",
    wolves: "wolf",
    knives: "knife",
    shelves: "shelf",
    wives: "wife",
    oxen: "ox",
    axes: "axis",
  };

  if (irregulars[text]) {
    return irregulars[text];
  }

  if (text.endsWith("ies")) {
    return text.slice(0, -3) + "y";
  }

  if (text.endsWith("ves")) {
    return text.slice(0, -3) + "f";
  }

  if (text.endsWith("s") && !text.endsWith("ss")) {
    return text.slice(0, -1);
  }

  // Return the word if it's already singular
  return text;
};

export const replaceHyphensWithSpaces = (input: string): string => {
  if (!input) {
    return null;
  }
  return input.replace(/-/g, " ");
};
