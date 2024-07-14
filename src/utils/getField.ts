import { ICategory } from "./getCategory";

export async function getField() {
  try {
    const response = await fetch(
      "https://ino.school/api/Category?pageNo=0&pageCount=20"
    );
    const data = await response.json();
    const field = data.data.filter((field: ICategory) => field.id > 17);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { data: field };
  } catch (error) {
    return { error };
  }
}
