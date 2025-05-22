import { Injectable } from '@nestjs/common';
import { CreateWeatherStationDto } from './dto/create-weather-station.dto';
import { UpdateWeatherStationDto } from './dto/update-weather-station.dto';

import { WeatherStation } from './entities/weather-station.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class WeatherStationService {

  constructor(
    @InjectRepository(WeatherStation)
    private weatherRepo: Repository<WeatherStation>,
  ) { }
  create(createWeatherStationDto: CreateWeatherStationDto) {
    return 'This action adds a new weatherStation';
  }


  findAll() {
    return this.weatherRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} weatherStation`;
  }

  update(id: number, updateWeatherStationDto: UpdateWeatherStationDto) {
    return `This action updates a #${id} weatherStation`;
  }

  remove(id: number) {
    return `This action removes a #${id} weatherStation`;
  }
}
