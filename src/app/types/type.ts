
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
const {getUser} = getKindeServerSession();
export type KindeUserType = Awaited<ReturnType<typeof getUser >>;
