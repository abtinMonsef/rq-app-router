"use client";

import { getCategory, ICategory } from "@/utils/getCategory";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function Category() {
  const { data, error, isFetched } = useSuspenseQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  if (error) {
    return <div>خطایی رخ داده است: {JSON.stringify(error.message)}</div>;
  }

  if (!isFetched) {
    return <div>در حال بارگذاری داده‌ها ...</div>;
  }

  if (data) {
    return (
      <div>
        {data?.data.map((category: ICategory) => (
          <div
            className="flex-col items-center justify-center text-center border-2 border-gray-300 p-4 my-2"
            key={category.id}
          >
            <div>{category.categoryName}</div>
          </div>
        ))}
      </div>
    );
  }
}
