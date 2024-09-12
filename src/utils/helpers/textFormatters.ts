export const pluralToSingular = (text) => {
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

  // Handle words ending in 'ies'
  if (text.endsWith("ies")) {
    return text.slice(0, -3) + "y";
  }

  // Handle words ending in 'ves'
  if (text.endsWith("ves")) {
    return text.slice(0, -3) + "f";
  }

  // Handle words ending in 's' but not 'ss'
  if (text.endsWith("s") && !text.endsWith("ss")) {
    return text.slice(0, -1);
  }

  // Return the word if it's already singular
  return text;
};
