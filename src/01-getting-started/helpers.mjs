const dummyPromise = () => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  return p;
};

export default dummyPromise;
