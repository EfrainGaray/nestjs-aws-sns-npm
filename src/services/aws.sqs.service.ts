import { Injectable, Inject, Logger, HttpStatus, HttpException } from '@nestjs/common';
import { SQS, ConfigurationOptions } from 'aws-sdk';
import { CONFIG_CONNECTION_OPTIONS } from '../constants';

/**
 * @export
 * @class AwsSnsService
 */
@Injectable()
export class AwsQsqService {
    private readonly _sqs: SQS;

    constructor(@Inject(CONFIG_CONNECTION_OPTIONS) private _options: ConfigurationOptions) {
        Logger.log('initialising AWS Module', 'SQS SERVICE');
        this._sqs = new SQS(this._options);
    }
    async subcribeQueue(params){
        return this._sqs.receiveMessage(params).promise().then( data => data ).catch((err) => {
            Logger.error('error[subcribeQueue]:', err);
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Failed to confirmSubscription',
                data: err,
            }, HttpStatus.BAD_REQUEST);
        });
    }
}

