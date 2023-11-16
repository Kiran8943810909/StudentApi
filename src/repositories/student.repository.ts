import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InMemoryDataSource} from '../datasources';
import {Student, StudentRelations} from '../models';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.id,
  StudentRelations
> {
  constructor(
    @inject('datasources.in_memory') dataSource: InMemoryDataSource,
  ) {
    super(Student, dataSource);
  }
}
