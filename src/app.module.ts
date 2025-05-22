import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherStationModule } from './weather-station/weather-station.module';
import { WeatherStation } from './weather-station/entities/weather-station.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',         
      password: 'yuzhuoma', 
      database: 'Proa', 
      entities: [WeatherStation],         // 引入你的实体
      synchronize: true,        // dev 阶段设为 true，prod 请设为 false
    }),
    WeatherStationModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
