import { Tweet } from "@/app/components/cards";
import { type Post } from "@/app/types";

export default function Postlist({ posts }: { posts: Post[] }) {
  return posts?.map((post: Post) => {
    const { id, content, users } = post;
    const {
      name: userName,
      avatar_url: avatarUrl,
      user_name: userFullName,
    } = users;
    return (
      <Tweet
        key={id}
        userName={userName}
        avatarUrl={avatarUrl}
        userFullName={userFullName}
        content={content}
      />
    );
  });
}
