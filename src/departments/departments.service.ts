import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department) private departmentsRepository: Repository<Department>,
  ) {}

  async create(data: CreateDepartmentDto) {

    const { department } = data;
    
    const departmentIsExist = await this.departmentsRepository.findOneBy({ department });

    if (departmentIsExist) throw new HttpException('El departamento ya existe', HttpStatus.CONFLICT);

    const newDepartment = this.departmentsRepository.create(data)

    return this.departmentsRepository.save(newDepartment);
  }

  findAll() {
    const departments = this.departmentsRepository.find()

    return departments
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
