// eslint-disable-next-line no-undef
module.exports = (ctx) => ({
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'autoprefixer': {},
  }
})