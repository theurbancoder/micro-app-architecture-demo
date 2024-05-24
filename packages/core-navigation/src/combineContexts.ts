export interface RequireContext {
  /** Return the keys that can be resolved. */
  keys(): string[];
  (id: string): any;
  <T>(id: string): T;
  /** **Unimplemented:** Return the module identifier for a user request. */
  resolve(id: string): string;
  /** **Unimplemented:** Readable identifier for the context module. */
  id: string;
}

export interface ContextWithPrefix {
  context: RequireContext;
  prefix: string;
}

const getNormalizedKeys = (ctx: RequireContext, prefix: string) =>
  ctx.keys().map((key: string) => `${prefix}${key.slice(1)}`);

export const combineContexts = (contextList: ContextWithPrefix[]) => {
  let combinedKeys: string[] = [];
  for (const { context, prefix } of contextList) {
    combinedKeys = [...combinedKeys, ...getNormalizedKeys(context, prefix)];
  }

  const myCtx = (id: string) => {
    for (const { context, prefix } of contextList) {
      if (context(`.${id.replace(prefix, "")}`)) {
        return context(`.${id.replace(prefix, "")}`);
      }
    }
    return null;
  };

  myCtx["keys"] = () => combinedKeys;
  myCtx["resolve"] = (id: string) => id;
  myCtx["id"] = "combinedContext";

  return myCtx;
};
