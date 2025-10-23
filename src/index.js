exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello desde pipeline v2" }),
  };
};
