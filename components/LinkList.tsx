import React from "react";
import { useLink } from "./useLink";
import Link from "./Link";
import urlFor from "@/sanity/lib/urlFor";

export default function LinkList() {
  const { data, isLoading, isError } = useLink();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div className="flex flex-col w-full gap-2">
      {data.map(
        (link: {
          id: string | undefined;
          title: string | undefined;
          url: string;
          alt: any;
          icon: string;
        }) => (
          <Link
            key={link.id}
            title={link.title!} // assert that title will not be undefined
            icon={urlFor(link.icon).url()}
            url={link.url}
            alt={link.alt}
            id={""}
          />
        )
      )}
    </div>
  );
}
