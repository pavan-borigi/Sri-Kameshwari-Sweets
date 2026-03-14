import CategoryPage from "@/views/CategoryPage";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CategoryPage id={id} />;
}
