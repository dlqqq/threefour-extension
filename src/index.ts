import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from './jupyterlab/application';

import { requestAPI } from './handler';

/**
 * Initialization data for the threefour-extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'threefour-extension:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension threefour-extension is activated!');

    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
        alert('It works.');
      })
      .catch(reason => {
        console.error(
          `The threefour_extension server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default plugin;
