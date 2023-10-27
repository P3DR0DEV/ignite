export function buildRoutePath(routePath) {
  const routeParametersRegex = /\:([a-zA-Z]+)/g;

  const pathWithParams = routePath.replace(
    routeParametersRegex,
    "(?<$1>[a-z0-9-_]+)",
  );

  const pathRegex = new RegExp(`^${pathWithParams}`);
  return pathRegex;
}
