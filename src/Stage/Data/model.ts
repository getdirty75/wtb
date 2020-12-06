import { Marker } from "react-globe";

//#region INTERFACE

export interface COUNTRY {
  id: number;
  flag?: {
    file: File;
    url: string;
  };
  marker: Marker;
  beatmakers: USER['id'][];
}

export interface USER {
  id: number;
  createdAt?: Date;
  account: {
    mail: string;
    password: string;
    campaign: CampaignType;
    role: UserRole;
  };
  info: {
    firstName: string;
    lastName: string;
    username: string;
    address: string;
    country: COUNTRY['id'];
    avatar?: {
      file: File;
      url: string;
    }
  };
  followers: USER[];
  plays: number;
  reposts?: any;
};

export interface BEAT {
  id: number;
  createdAt?: Date;
  url: string;
  basics: {
    duration: number;
    name: string;
    picture?: {
      file: File;
      url: string;
    };
    userId: number;
    price: number;
    exclusive: boolean;
  };
  stats?: {
    played: number;
    sold: number;
    favorited: number;
    reposted: number;
  };
  style?: {
    genre: BeatGenre;
    mood: BeatMood;
    relatedArtist: string;
    tags: string[];
  };
}

export interface CAMPAIGN {
  id: number;
  duration: number;
  price: number;
  type: CampaignType;
}
//#endregion

//#region ENUM
export enum UserRole {
  BEATMAKER = 'Beatmaker',
  CUSTOMER = 'Customer',
  MASTER = 'Master',
};
export enum CampaignType {
  FREE = 'Free',
  BASIC = 'Basic',
  KING = 'King',
};
export enum BeatGenre {
  TRAP = 'Trap',
  DRILL = 'Drill'
}
export enum BeatMood {
  SHINE = 'Shine',
  DARK = 'Dark',
  SAD = 'Sad',
  OTHER = 'Other'
}
//#endregion
