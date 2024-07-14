export interface ICategory {
  id: number;
  categoryTypeId: number;
  categoryName: string;
  categoryDescription: string;
  entityId: number | null;
  categoryCode: string | null;
  sortOrder: number | null;
  isActive: boolean;
  seoTitle: string | null;
  seoDescription: string | null;
}

export async function getCategory() {
  try {
    const response = await fetch(
      "https://ino.school/api/Category?pageNo=0&pageCount=20"
    );
    const data = await response.json();
    const category = data.data.filter((category: ICategory) => category.id < 5);

    return { data: category };
  } catch (error) {
    return { error };
  }
}
