const axios = require("axios");

const numbersController = async (req, res) => {
  const { numberId: numberId } = req.params;
  const numberIds = {
    p: "primes",
    f: "fibo",
    r: "random",
    e: "even",
  };
  const response1 = await axios.post("http://20.244.56.144/test/auth", {
    companyName: "Affordmed",
    clientID: "3d395b05-46e3-41f4-a4ef-c8b1d22eb47c",
    clientSecret: "mOOqrAWLxAjQANUi",
    ownerName: "Zaid Md",
    ownerEmail: "zaid.md221@gmail.com",
    rollNo: "22911A05C9",
  });

  const token = response1.data.access_token;

  const response = await axios.get(
    `http://20.244.56.144/test/${numberIds[numberId]}`,
    {
      headers: {
        Authorization: ` Bearer ${token}`,
      },
    }
  );

  const numbers = response.data.numbers;
  const windowSize = 10;
  const windowPrevState = [];
  const windowCurrState = numbers;

  const uniqueElements = [];
  let sum = 0;

  for (let num of numbers) {
    if (!uniqueElements.includes(num)) {
      uniqueElements.push(num);
      sum += num;
    }
  }

  const avg = sum / uniqueElements.length;
  res.status(200).json({
    windowPrevState,
    windowCurrState,
    numbers,
    avg,
  });
};

module.exports = numbersController;
