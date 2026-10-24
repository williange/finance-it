import { BasicRepository } from "../../../../domain/repositories/interfaces/BasicRepository";
import { BasicEntity } from "../../../../domain/entities/General/BasicEntity";
import { OrmDelegate } from "../../interfaces/OrmDelegate";

export class BasicImplementation<T extends BasicEntity> implements BasicRepository<T> {
  constructor(private readonly prismaDelegate: OrmDelegate<T>) { }

  async save(item: T): Promise<void> {
    return this.prismaDelegate.update({
      where: {
        id: item.id
      },
      data: item
    })
  }
  create(item: T): Promise<void> {
    return this.prismaDelegate.create({data: item})
  }
  delete(id: string): Promise<void> {
    return this.prismaDelegate.delete({
      where: {
        id
      }
    })
  }
  async findById(id: string): Promise<T | null> {
      return await this.prismaDelegate.findUnique({
        where: { id }
      });
    }
}
