import { ExtraEntryPoint, OptimizationOptions } from './shared-models';
import { FileReplacement } from './normalize';
import { CrossOriginValue } from './webpack/write-index-html';

export interface DevServerOptions {
  main: string;
  outputPath: string;
  compiler: 'babel' | 'swc';
  tsConfig: string;
  watch?: boolean;
  sourceMap?: boolean | 'hidden';
  optimization?: boolean | OptimizationOptions;
  memoryLimit?: number;
  maxWorkers?: number;
  poll?: number;

  fileReplacements?: FileReplacement[];
  assets?: any[];

  progress?: boolean;
  statsJson?: boolean;
  extractLicenses?: boolean;

  outputHashing?: any;
  webpackConfig?: string;

  root?: string;
  sourceRoot?: string;

  index: string;
  budgets?: any[];
  baseHref?: string;
  deployUrl?: string;

  crossOrigin?: CrossOriginValue;

  polyfills?: string;
  es2015Polyfills?: string;

  scripts: ExtraEntryPoint[];
  styles: ExtraEntryPoint[];

  vendorChunk?: boolean;
  commonChunk?: boolean;

  namedChunks?: boolean;

  stylePreprocessorOptions?: any;
  subresourceIntegrity?: boolean;

  verbose?: boolean;
  buildLibsFromSource?: boolean;

  deleteOutputPath?: boolean;

  generateIndexHtml?: boolean;

  postcssConfig?: string;
}

export interface DevServeExecutorOptions {
  host: string;
  port: number;
  publicHost?: string;
  ssl: boolean;
  sslKey?: string;
  sslCert?: string;
  proxyConfig?: string;
  buildTarget: string;
  open: boolean;
  liveReload: boolean;
  hmr: boolean;
  watch: boolean;
  allowedHosts?: string;
  maxWorkers?: number;
  memoryLimit?: number;
  baseHref?: string;
}
