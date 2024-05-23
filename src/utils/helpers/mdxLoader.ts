import replaceAll from "string.prototype.replaceall";

export default function mdxLoader(content: string): string {
  return replaceAll(
    content,
    /\!\[(.*)\]\((.+)\)/g,
    `<NextImage alt="$1" src={require('$2').default} />`
  );
}
