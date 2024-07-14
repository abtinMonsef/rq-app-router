"use client";

import { ICategory } from "@/utils/getCategory";
import { getField } from "@/utils/getField";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function Field() {
  const { data, error, isLoading } = useSuspenseQuery({
    queryKey: ["field"],
    queryFn: getField,
  });

  if (isLoading) {
    return <div>در حال بارگذاری داده‌ها ...</div>;
  }

  if (error) {
    return <div>خطایی رخ داده است: {JSON.stringify(error.message)}</div>;
  }

  return (
    <div>
      {data?.data.map((field: ICategory) => (
        <div
          className="flex-col items-center justify-center text-center border-2 border-gray-300 p-4 my-2"
          key={field.id}
        >
          <div>{field.categoryName}</div>
        </div>
      ))}
    </div>
  );
}
