//https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: {
    '/*/**': {
      cors: true,
      headers: {
        'access-control-allow-origin': '*',
        'access-control-allow-methods': '*',
      },
    },
    // '/*': {
    //   cors: true,
    //   headers: {
    //     'access-control-allow-origin': '*',
    //     'access-control-allow-methods': '*',
    //   },
    // },
  },
});
