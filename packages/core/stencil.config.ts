import { Config } from '@stencil/core'

import { angularOutputTarget } from '@stencil/angular-output-target'
import { vueOutputTarget } from '@stencil/vue-output-target'

export const config: Config = {
  namespace: 'core',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'core',
      directivesProxyFile:
        '../angular/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile:
        '../angular/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: 'core',
      proxiesFile: '../vue/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
}
