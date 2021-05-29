export class AwsSqsReceiveMessageDto {
    AttributeNames: [];
    MaxNumberOfMessages: number;
    MessageAttributeNames: [];
    QueueUrl: string;
    VisibilityTimeout: number;
    WaitTimeSeconds: number;
}