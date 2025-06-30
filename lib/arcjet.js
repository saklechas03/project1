import arcjet, { tokenBucket } from "@arcjet/next";
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"], //we want to limit our transactions to 10 so we keep a check using arcjet and userId for specific user.

  rules:[
    tokenBucket({
      mode:"LIVE",
      refillRate:10,
      interval:3600,
      capacity: 10,
    }),
  ],
});
export default aj;