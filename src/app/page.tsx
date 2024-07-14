import { lazy, Suspense } from 'react';

const Category = lazy(() => import('@/components/Category'));
const Field = lazy(() => import('@/components/Field'));
const Grade = lazy(() => import('@/components/Grade'));
const Skeleton = lazy(() => import('@/components/Skeleton'));

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-row items-start justify-between p-24'>
      <div className='flex flex-row items-start justify-center gap-4'>
        <div className='text-xl p-6'>طبقه:</div>
        <Suspense
          fallback={
            <div className='flex flex-col gap-y-2'>
              <Skeleton
                shape='rectangle'
                animation='flash'
                className='w-[100px] h-[100px]'
              />

              <Skeleton
                shape='rectangle'
                animation='flash'
                className='w-[100px] h-[100px]'
              />
            </div>
          }
        >
          <Category />
        </Suspense>
      </div>
      <div className='flex flex-row items-start justify-center gap-4'>
        <div className='text-xl p-6'>پایه:</div>
        <Suspense
          fallback={
            <div className='flex flex-col gap-y-2'>
              <Skeleton
                shape='rectangle'
                animation='flash'
                className='w-[100px] h-[100px]'
              />

              <Skeleton
                shape='rectangle'
                animation='flash'
                className='w-[100px] h-[100px]'
              />

              <Skeleton
                shape='rectangle'
                animation='flash'
                className='w-[100px] h-[100px]'
              />

              <Skeleton
                shape='rectangle'
                animation='flash'
                className='w-[100px] h-[100px]'
              />
            </div>
          }
        >
          <Grade />
        </Suspense>
      </div>
      <div className='flex flex-row items-start justify-center gap-4'>
        <div className='text-xl p-6'>رشته:</div>
        <Suspense
          fallback={
            <div className='flex flex-col gap-y-2'>
              <Skeleton
                shape='rectangle'
                animation='flash'
                className='w-[100px] h-[100px]'
              />

              <Skeleton
                shape='rectangle'
                animation='flash'
                className='w-[100px] h-[100px]'
              />
            </div>
          }
        >
          <Field />
        </Suspense>
      </div>
    </main>
  );
}
