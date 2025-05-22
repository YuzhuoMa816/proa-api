import { Test, TestingModule } from '@nestjs/testing';
import { WeatherStationService } from './weather-station.service';

describe('WeatherStationService', () => {
  let service: WeatherStationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherStationService],
    }).compile();

    service = module.get<WeatherStationService>(WeatherStationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
