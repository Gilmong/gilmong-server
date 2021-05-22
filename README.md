# 길몽거래소

### 서비스 소개

`서비스 이름` : 진술게임  
`서비스 한 줄 소개` : 자네, 어젯밤 꿈을 나에게 팔아보겠는가? 길몽 경매 거래소

### Models

- /models/Auction.ts

```typescript
import mongoose from "mongoose";
import { IAuction } from "../interfaces/IAuction";

const AuctionSchema = new mongoose.Schema({
  dream: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Dream",
  },

  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },

  initialPrice: {
    type: Number,
  },

  currentPrice: {
    type: Number,
  },

  comment: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Comment",
    },
  ],

  enrollDate: {
    type: Date,
  },

  dueDate: {
    type: Date,
  },

  participant: {
    type: Number,
  },
});

export default mongoose.model<IAuction & mongoose.Document>(
  "Auction",
  AuctionSchema
);
```

- /interfaces/IAuction.ts
- /models/Comment.ts
- /interfaces/IComment.ts
- /models/Dream.ts
- /interfaces/IDream.ts
- /models/User.ts
- /interfaces/IUser.ts

### ERD

mongoDB로 구현하여 없으므로 생략함

### API 명세서

- [API 명세서](https://google.com)
