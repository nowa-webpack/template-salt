export default {
  defaults() {
    return {
      loaded: false,
      list: [],
      error: false,
    };
  },
  async fetch({ fn, setState }, workNo) {
    const { list } = await fn.DB.SomeModuleAPI.getSomeInfo(workNo);
    setState({ loaded: true, list });
  },
};
