export interface OrmDelegate<T> {
  create(args: { data: Partial<T> }): Promise<void>;
  update(args: { where: { id: string }; data: Partial<T> }): Promise<void>;
  delete(args: { where: { id: string } }): Promise<void>;
  findUnique(args: { where: { id: string } }): Promise<T | null>;
}
