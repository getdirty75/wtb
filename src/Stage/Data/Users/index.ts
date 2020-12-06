import { CampaignType, USER, UserRole } from "../model";

export const mockedUsers: USER[] = [
  {
    id: 1,
    account: {
      mail: 'bambi@gmail.com',
      password: 'bambi',
      campaign: CampaignType.FREE,
      role: UserRole.BEATMAKER,
    },
    info: {
      firstName: 'Bambi',
      lastName: 'Chainsaw',
      username: 'DR DRE',
      address: 'nearby',
      country: 1,
    },
    beats: [],
    followers: [],
    plays: 0,
  },
  {
    id: 2,
    account: {
      mail: 'Emir@gmail.com',
      password: 'Emir',
      campaign: CampaignType.FREE,
      role: UserRole.BEATMAKER,
    },
    info: {
      firstName: 'Emir',
      lastName: 'Kustu',
      username: 'SNOOPP SNOOPP',
      address: '66 death road, Split 3C45',
      country: 5,
    },
    beats: [],
    followers: [],
    plays: 0,
  },
  {
    id: 3,
    account: {
      mail: 'max@gmail.com',
      password: 'max',
      campaign: CampaignType.KING,
      role: UserRole.BEATMAKER,
    },
    info: {
      firstName: 'Macx',
      lastName: 'Mac Hunter',
      username: '7ine7',
      address: '2 Brooklyn Crescent, NYC',
      country: 2,
    },
    beats: [],
    followers: [],
    plays: 0,
  },
  {
    id: 4,
    account: {
      mail: 'pangolin@gmail.com',
      password: 'pangolin',
      campaign: CampaignType.FREE,
      role: UserRole.CUSTOMER,
    },
    info: {
      firstName: 'Pangolin',
      lastName: 'The wicked',
      username: 'BAD ASS',
      address: '871 Wuhan Avenue, 78th floor, 3rd door, Shanghaï',
      country: 4,
    },
    beats: [],
    followers: [],
    plays: 0,
  },
  {
    id: 5,
    account: {
      mail: 'charlene@gmail.com',
      password: 'charlene',
      campaign: CampaignType.FREE,
      role: UserRole.CUSTOMER,
    },
    info: {
      firstName: 'Charlene',
      lastName: '!Master',
      username: 'CHARLENE ',
      address: '39 rue de Chaillot, 75008 PARIS',
      country: 5,
    },
    beats: [],
    followers: [],
    plays: 0,
  },
]