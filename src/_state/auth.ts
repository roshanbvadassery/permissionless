import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface NFTMetaData {
  id: string;
  identifier?: string;
}

interface authInterface {
  address?: string;
  username?: string;
  twitterUsername?: string;
  wallet?: string;
  status?: string;
  token?: string;
  userWallet?: string;
  campaignWhitelist: string[];
  nftsOwned: NFTMetaData[];
  whitelisted?: boolean;
}

const authAtom = atom<authInterface | null>({
  key: "auth",
  default: { nftsOwned: [], campaignWhitelist: [] },
  effects_UNSTABLE: [persistAtom],
});

export { authAtom };
