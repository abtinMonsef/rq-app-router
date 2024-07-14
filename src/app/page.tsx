import { lazy, Suspense } from "react";

const Category = lazy(() => import("@/components/Category"));
const Field = lazy(() => import("@/components/Field"));
const Grade = lazy(() => import("@/components/Grade"));

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-row items-start justify-between p-24">
      <div className="flex flex-row items-start justify-center gap-4">
        <div className="text-xl p-6">طبقه:</div>
        <Suspense
          fallback={
            <div className="flex flex-col text-center p-6">
              در حال بارگذاری طبقه‌ها ...
            </div>
          }
        >
          <Category />
        </Suspense>
      </div>
      <div className="flex flex-row items-start justify-center gap-4">
        <div className="text-xl p-6">پایه:</div>
        <Suspense
          fallback={
            <div className="flex flex-col text-center p-6 w-[88px]">
              در حال بارگذاری پایه‌ها ...
            </div>
          }
        >
          <Grade />
        </Suspense>
      </div>
      <div className="flex flex-row items-start justify-center gap-4">
        <div className="text-xl p-6">رشته:</div>
        <Suspense
          fallback={
            <div className="flex flex-col text-center p-6 w-[133px]">
              در حال بارگذاری رشته‌ها ...
            </div>
          }
        >
          <Field />
        </Suspense>
      </div>
    </main>
  );
}
