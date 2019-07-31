module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          id: 1,
          category: 'WORK',
          title: 'test'
        },
        {
          id: 2,
          category: 'HOBBY',
          title: 'test2'
        }
      ]
    });
  }
};
