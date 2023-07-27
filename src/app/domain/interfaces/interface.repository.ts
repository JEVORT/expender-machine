export interface IDataBase<T> {
  Create(produc: T): boolean
  ReadById(id: number): T | undefined
  ReadAll(): Array<T>
  Update(id: number): boolean
  Delette(id: number): boolean
}