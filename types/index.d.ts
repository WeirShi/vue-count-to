// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Vue, { App, PluginFunction } from "vue";

export declare class CountTo {
  startVal: number;
  endVal: number;
  duration: number;
  autoplay: boolean;
  decimals: number;
  decimal: number;
  separator: number;
  prefix: number;
  suffix: number;
  useEasing: boolean;

  easingFn: () => void;

  start(): void;
  pause(): void;
  reset(): void;
}

// @ts-ignore
export declare class CountTo extends Vue {
  startVal: number;
  endVal: number;
  duration: number;
  autoplay: boolean;
  decimals: number;
  decimal: number;
  separator: number;
  prefix: number;
  suffix: number;
  useEasing: boolean;

  easingFn: () => void;

  start(): void;
  pause(): void;
  reset(): void;
}

//  extends Vue
export default class {
  static install (app: App): void;
  static install (app: PluginFunction<never>): void;

  version: string;
}
