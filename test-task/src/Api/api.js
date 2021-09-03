// import * as axios from "axios";
import eurIcon from "../Images/CurrencyIcons/eur.svg";
import gbpIcon from "../Images/CurrencyIcons/gbp.svg";
import krwIcon from "../Images/CurrencyIcons/krw.png";
import usdIcon from "../Images/CurrencyIcons/usd.svg";

const resp = {
  accounts: [
    {
      title: "Euro (EUR)",
      currency: "eur",
      balance: 133.2,
      icon: eurIcon,
      symbol: "€",
    },
    {
      title: "British Sterling (GBP)",
      currency: "gbp",
      balance: 10,
      icon: gbpIcon,
      symbol: "£",
    },
    {
      title: "US Dollar (USD)",
      currency: "usd",
      balance: 10234.2,
      icon: usdIcon,
      symbol: "$",
    },
    {
      title: "South Korea Won (KRW)",
      currency: "krw",
      balance: 0,
      icon: krwIcon,
      symbol: "₩",
    },
  ],

  getAccounts() {
    return this.accounts;
  },
};

export default resp;

// const instanceDate = axios.create({
//   withCredentials: true,
//   baseURL: `https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com`,
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "API-KEY": "ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59",
//   },
// });

// export const getDate = {
//   getDateFrom() {
//     return instanceDate
//       .get(`/dev/data`)
//       .then((response) => console.log(response));
//   },
// };
