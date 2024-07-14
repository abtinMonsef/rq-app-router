"use client";

import { ICategory } from "@/utils/getCategory";
import { getGrade } from "@/utils/getGrade";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function Grade() {
  const { data, error, isFetched } = useSuspenseQuery({
    queryKey: ["grade"],
    queryFn: getGrade,
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
        {data?.data.map((grade: ICategory) => (
          <div
            className="flex-col items-center justify-center text-center border-2 border-gray-300 p-4 my-2"
            key={grade.id}
          >
            <div>{grade.categoryName}</div>
          </div>
        ))}
      </div>
    );
  }
}
