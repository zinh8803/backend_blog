export interface IPost {
  id: number;
  user_id: number;
  title: string;
  slug: string;
  content: string;
  status: "draft" | "published" | "archived";
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPostInput {
  user_id: number;
  title: string;
  slug: string;
  content: string;
  status: "draft" | "published" | "archived";
  publishedAt: Date | null;
}
