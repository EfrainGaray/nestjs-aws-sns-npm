import { DynamicModule, Module } from '@nestjs/common';
import {ISNSModuleAsyncOptions} from "./interfaces";
import {AwsQsqService, AwsSnsService} from "./services";
import {CONFIG_CONNECTION_OPTIONS} from "./constants";


@Module({})
export class AwsNestModule {
    static forRootSnsAsync(options: ISNSModuleAsyncOptions): DynamicModule {
        return {
            module: AwsNestModule,
            providers: [
                {
                    provide: CONFIG_CONNECTION_OPTIONS,
                    useFactory: options.useFactory,
                    inject: options.inject || [],
                },
                AwsSnsService,
                AwsQsqService
            ],
            exports: [AwsSnsService, AwsQsqService],
        };
    }
}
