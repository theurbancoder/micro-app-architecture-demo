import { ExpoRoot } from "expo-router";
import { combineContexts } from "./combineContexts";

interface Props {
  contexts: any;
}

export function MicroAppRoot({ contexts }: Props) {
  return <ExpoRoot context={combineContexts(contexts)} />;
}
