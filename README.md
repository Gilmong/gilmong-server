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

```typescript
import mongoose from "mongoose";

export interface IAuction {
  dream: mongoose.Types.ObjectId;
  owner: mongoose.Types.ObjectId;
  initialPrice: Number;
  currentPrice: Number;
  comment: [mongoose.Types.ObjectId];
  enrollDate: Date;
  dueDate: Date;
  participant: Number;
}
```

- /models/Comment.ts

```typescript
import mongoose from "mongoose";
import { IComment } from "../interfaces/IComment";

const CommentSchema = new mongoose.Schema({
  writer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },

  biddingPrice: {
    type: Number,
  },

  content: {
    type: String,
  },
});

export default mongoose.model<IComment & mongoose.Document>(
  "Comment",
  CommentSchema
);
```

- /interfaces/IComment.ts

```typescript
import mongoose from "mongoose";

export interface IComment {
  writer: mongoose.Types.ObjectId;
  biddingPrice: number;
  content: string;
}

export interface ICommentInputDTO {
  writer: mongoose.Types.ObjectId;
  biddingPrice: number;
  content: string;
}
```

- /models/Dream.ts

```typescript
import mongoose from "mongoose";
import { IDream } from "../interfaces/IDream";

const DreamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  keyword: [
    {
      type: String,
      required: true,
    },
  ],

  dreamer: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },

  price: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    required: true,
    default: Date.now,
  },

  sold: {
    type: Boolean,
    required: true,
  },

  auctioning: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model<IDream & mongoose.Document>("Dream", DreamSchema);
```

- /interfaces/IDream.ts

```typescript
import mongoose from "mongoose";

export interface IDream {
  title: string;
  image: string;
  content: string;
  keyword: [string];
  dreamer: mongoose.Types.ObjectId;
  owner: mongoose.Types.ObjectId;
  price: number;
  date: Date;
  sold: boolean;
  auctioning: boolean;
}

export interface IDreamInputDTO {
  title: string;
  image: string;
  content: string;
  keyword: [string];
  price: number;
}
```

- /models/User.ts

```typescript
import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  boughtDream: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Dream",
    },
  ],

  soldDream: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Dream",
    },
  ],

  coin: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);
```

- /interfaces/IUser.ts

```typescript
import mongoose from "mongoose";
import { IDream } from "./IDream";

export interface IUser {
  name: string;
  email: string;
  password: string;
  date: Date;
  avatar: string;
  boughtDream: [mongoose.Types.ObjectId];
  soldDream: [mongoose.Types.ObjectId];
  coin: number;
}

export interface IUserInputDTO {
  name: string;
  email: string;
  password: string;
}
```

### ERD

mongoDB로 구현하여 없으므로 생략함

### API 명세서

- [API 명세서](https://google.com)
