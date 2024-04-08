export interface PostFrontmatter extends Record<string, unknown> {
  title: string;
  date: string;
  tags?: string[];
  image?: string;
  featured?: boolean;
  hidden?: boolean;
}
