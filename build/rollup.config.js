import ts from '@rollup/plugin-typescript'
import path from 'path'

export default {
  input: path.resolve(__dirname, '../src/index.ts'),
  output: {
    format: 'esm',
    dir: 'dist',
    sourcemap: true,
  },
  plugins: [
    ts(),
  ],
}