import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherStation } from './entities/weather-station.entity';
import { WeatherStationService } from './weather-station.service';
import { WeatherStationController } from './weather-station.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WeatherStation])],
  controllers: [WeatherStationController],
  providers: [WeatherStationService],
})
export class WeatherStationModule { }
