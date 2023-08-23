"use client";

import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import {
  IconChartBar,
  IconHeart,
  IconMessageCircle,
  IconRepeat,
} from "@tabler/icons-react";
import Link from "next/link";

export function Tweet({
  userName,
  avatarUrl,
  userFullName,
  content,
}: {
  userName: string;
  avatarUrl: string;
  userFullName: string;
  content: string;
}) {
  return (
    <Card className="bg-transparent shadow-none">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {userName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{userFullName}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>{content}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <IconMessageCircle className="w-4 h-4" />
        <IconRepeat className="w-4 h-4" />
        <IconHeart className="w-4 h-4" />
        <IconChartBar className="w-4 h-4" />
      </CardFooter>
    </Card>
  );
}
