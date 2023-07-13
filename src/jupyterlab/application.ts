import * as jlxApplication from '@jlx/application';
import * as jl3Application from '@jl3/application';
import * as jl4Application from '@jl4/application';

const jlx = jlxApplication;
const jl3 = jl3Application;
const jl4 = jl4Application;

export const JupyterFrontEnd:
  | typeof jl3.JupyterFrontEnd
  | typeof jl4.JupyterFrontEnd = jlx.JupyterFrontEnd;

export type JupyterFrontEnd<
  T extends
    | jl3Application.JupyterFrontEnd.IShell
    | jl4Application.JupyterFrontEnd.IShell = jlxApplication.JupyterFrontEnd.IShell,
  U extends string = 'desktop' | 'mobile'
> = T extends jl3Application.JupyterFrontEnd.IShell
  ? jl3Application.JupyterFrontEnd<T, U>
  : T extends jl4Application.JupyterFrontEnd.IShell
  ? jl4Application.JupyterFrontEnd<T, U>
  : never;

export type JupyterFrontEndPlugin<
  T,
  U extends
    | jl3Application.JupyterFrontEnd.IShell
    | jl4Application.JupyterFrontEnd.IShell = jlxApplication.JupyterFrontEnd.IShell,
  V extends string = 'desktop' | 'mobile'
> = U extends jl3Application.JupyterFrontEnd.IShell
  ? jl3Application.JupyterFrontEndPlugin<T, U, V>
  : U extends jl4Application.JupyterFrontEnd.IShell
  ? jl4Application.JupyterFrontEndPlugin<T, U, V>
  : never;
