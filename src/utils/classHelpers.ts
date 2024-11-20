import classNames from "classnames";

export function cs(...args: classNames.ArgumentArray) {
  return classNames(...args);
}
