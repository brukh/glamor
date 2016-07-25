module.exports = {
  plugins: [
    require('rollup-plugin-babel')({
      exclude: 'node_modules/**'
    })
  ]
}
