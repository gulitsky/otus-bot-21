import * as dotenv from "dotenv";
import { parseEnv, z } from "znv";

dotenv.config();

export const config = parseEnv(process.env, {
	RPC_URL: z.string().url(),
	CONTRACT_ADDRESS: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
	BOT_TOKEN: z.string(),
	CHAT_ID: z.number().int(),
});
