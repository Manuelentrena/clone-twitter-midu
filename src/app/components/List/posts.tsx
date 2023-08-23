import { Tweet } from "@/app/components/cards";

export default function Postlist({ posts }: any) {
  return posts?.map((post: any) => {
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
