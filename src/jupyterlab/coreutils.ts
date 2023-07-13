import * as jlxCoreutils from '@jlx/coreutils';
import * as jl3Coreutils from '@jl3/coreutils';
import * as jl4Coreutils from '@jl4/coreutils';

export namespace URLExt {
  const jlx = jlxCoreutils.URLExt;
  const jl3 = jl3Coreutils.URLExt;
  const jl4 = jl4Coreutils.URLExt;

  export const join: typeof jl3.join | typeof jl4.join = jlx.join;
}
