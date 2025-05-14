interface User3 {
  readonly dbId: number, 
  email: string,
  userId: number,
  googleId?: string
  //srartTrail: () => string
  startTrail(): string
  getCoupon(couponname: string, values: number): number
}

interface User3 {
  githubToken: string;
}

interface Adimn2 extends User3{
   role: "admin" | "ta" | "learner"
}

const jhon: User3 = {dbId: 21, email: 'j@j.com', userId: 2211,
  githubToken: "github",
  startTrail: () => {
    return "traill started";
  },
  getCoupon: (name: "wick", off: 10) => {
    console.log(`name:${name}, off:${off}`);
    return 10;
  }
}

const mary: Adimn2 = {dbId: 22, email: 'j@j.com', userId: 2211,
  role: 'admin',githubToken: "github",
  startTrail: () => {
    return "traill started";
  },
  getCoupon: (name: "wick", off: 10) => {
    console.log(`name:${name}, off:${off}`);
    return 10;
  }
}