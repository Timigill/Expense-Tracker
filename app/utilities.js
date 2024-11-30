import * as jwt from 'jose';
import moment from 'moment';

export const verifyToken = async (token) => {

  const jwtKey = jwt.base64url.decode("cat says mioon");

  const verify = await jwt.jwtVerify(token, jwtKey);
  return verify;
  // console.log("$$$$$$$$$$$$$$$$$$$$")
  // console.log(verify)

}

export const generateToken = async (userId) => {

    const jwtKey = jwt.base64url.decode("cat says mioon");
  const  time = moment();

  const token = await new jwt.SignJWT({ userId,  time })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2d') // Token expires in 7 days
    .sign(jwtKey);

  return token;
};