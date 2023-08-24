import { type Database } from ".";

type PostEntity = Database["public"]["Tables"]["posts"]["Row"];
type UserEntity = Database["public"]["Tables"]["users"]["Row"];
export type Post = PostEntity & { users: UserEntity };
