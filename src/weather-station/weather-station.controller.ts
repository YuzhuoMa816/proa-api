import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WeatherStationService } from './weather-station.service';
import { CreateWeatherStationDto } from './dto/create-weather-station.dto';
import { UpdateWeatherStationDto } from './dto/update-weather-station.dto';

@Controller('weather-station')
export class WeatherStationController {
  constructor(private readonly weatherStationService: WeatherStationService) {}

  @Post()
  create(@Body() createWeatherStationDto: CreateWeatherStationDto) {
    return this.weatherStationService.create(createWeatherStationDto);
  }

  @Get()
  findAll() {
    return this.weatherStationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weatherStationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeatherStationDto: UpdateWeatherStationDto) {
    return this.weatherStationService.update(+id, updateWeatherStationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weatherStationService.remove(+id);
  }
}
