

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WeatherStation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ws_name: string;

    @Column()
    site: string;

    @Column()
    portfolio: string;

    @Column()
    state: string;

    @Column('double')
    latitude: number;

    @Column('double')
    longitude: number;




}