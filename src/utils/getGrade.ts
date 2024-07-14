import { ICategory } from "./getCategory";

export async function getGrade() {
  try {
    const response = await fetch(
      "https://ino.school/api/Category?pageNo=0&pageCount=20"
    );
    const data = await response.json();
    const grade = data.data.filter(
      (grade: ICategory) => grade.id > 4 && grade.id < 17
    );

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return { data: grade };
  } catch (error) {
    return { error };
  }
}
