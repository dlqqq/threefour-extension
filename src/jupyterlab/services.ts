import * as jlxServices from '@jlx/services';
import * as jl3Services from '@jl3/services';
import * as jl4Services from '@jl4/services';

export namespace ServerConnection {
  const jlx = jlxServices.ServerConnection;
  const jl3 = jl3Services.ServerConnection;
  const jl4 = jl4Services.ServerConnection;

  export const NetworkError: typeof jl3.NetworkError | typeof jl4.NetworkError =
    jlx.NetworkError;

  export const ResponseError:
    | typeof jl3.ResponseError
    | typeof jl4.ResponseError = jlx.ResponseError;

  export const makeSettings: typeof jl3.makeSettings | typeof jl4.makeSettings =
    jlx.makeSettings;

  export const makeRequest: typeof jl3.makeRequest | typeof jl4.makeRequest =
    jlx.makeRequest;
}
