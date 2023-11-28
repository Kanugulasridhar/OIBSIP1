import  jwt  from 'jsonwebtoken';

export const generateRefreshToken= (data:any)=>{
    const secret = process.env.JWT_SECRET_REFRESH!;
    const decode =  jwt.sign({data}, secret);
    return decode;
}

export const generateAccessToken= (data:any)=>{
    const secret = process.env.JWT_SECRET_ACCESS!;
    const expiresIn = "1d";
    const decode =  jwt.sign({data}, secret,{expiresIn});
    return decode;
}

export const verifyAccessToken = (token: string) => {
  const secret = process.env.JWT_SECRET_ACCESS!;

  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error:any) {
    // Handle verification failure, e.g., token expired or invalid
    console.error('Token verification failed:', error.message);
    return null;
  }
};
export const verifyRefreshToken = (token: string) => {
  const secret = process.env.JWT_SECRET_ACCESS!;

  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error:any) {
    // Handle verification failure, e.g., token expired or invalid
    console.error('Token verification failed:', error.message);
    return null;
  }
};


