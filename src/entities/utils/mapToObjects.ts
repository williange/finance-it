import { Mappable } from "../General/ParsableToObject";

export function mapToObjects<T>(
  entities?: Mappable<T>[],
): T[] {
  return entities?.map(entity => entity.toObject()) ?? [];
}
