export interface BasicRepository<T> {
  save(item: T): Promise<void>
  delete(id: string): Promise<void>
  create(item: T): Promise<void>
  findById(id: string): Promise<T | null>
}
