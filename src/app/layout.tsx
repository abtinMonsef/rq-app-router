import "./globals.css";
import { Providers } from "@/app/providers";
import { getCategory } from "@/utils/getCategory";
import { getGrade } from "@/utils/getGrade";
import { getField } from "@/utils/getField";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  Promise.all([
    queryClient.prefetchQuery({ queryKey: ["category"], queryFn: getCategory }),
    queryClient.prefetchQuery({ queryKey: ["grade"], queryFn: getGrade }),
    queryClient.prefetchQuery({ queryKey: ["field"], queryFn: getField }),
  ]);

  return (
    <html dir="rtl" lang="fa">
      <body>
        <Providers>
          <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
