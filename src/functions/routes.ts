export function Route(parent: string, child: string, separator = '/') {
  return `${parent}${separator}${child}`;
}
