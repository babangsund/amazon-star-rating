import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import reactSvg from 'rollup-plugin-react-svg';
import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

const input = 'src/index.ts';
const globals = { react: 'React' };
const external = Object.keys(globals).concat('@babel/runtime');
const license = {
  output: {
    preamble: [
      '/**',
      ' * amazon-star-rating v' + process.env.npm_package_version,
      ' *',
      ' * Copyright (c) 2019 babangsund',
      ' *',
      ' * This source code is licensed under the MIT license found in the',
      ' * LICENSE file in the root directory of this source tree.',
      ' */',
    ].join('\n'),
  },
};

export default {
  input,
  external,
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
    }),
    postcss(),
    reactSvg(),
    commonjs(),
    typescript(),
    nodeResolve(),
    process.env.NODE_ENV === 'production' && terser(license),
  ],
  output: [
    {
      globals,
      format: 'esm',
      file: pkg.module,
    },
    {
      globals,
      format: 'cjs',
      file: pkg.main,
    },
    {
      globals,
      format: 'umd',
      name: 'AmazonStarRating',
      file: `dist/index.umd.${process.env.NODE_ENV}.js`,
    },
  ],
};
