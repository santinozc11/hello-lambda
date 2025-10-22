exports.handler = async () => {
  return { statusCode: 200, body: JSON.stringify({ msg: "Hello v1 desde pipeline" }) };
};
