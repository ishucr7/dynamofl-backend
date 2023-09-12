import { cleanEnv, str } from 'envalid'

export const WorkerName = 'celery@dynamofl';
export const QueueName = 'dynamofl';

export const env = cleanEnv(process.env, {
    RABBITMQ_DEFAULT_USER: str({default: 'dynamofl'}),
    RABBITMQ_DEFAULT_PASS: str({default: 'dynamofl'}),
    FLOWER_ENDPOINT: str({default: "http://localhost:5555"})
})

export enum RedisPrefixes {
    JobDsu = 'job-dsu-',
    JobCompletedTaskList = 'job-completed-task-list'
}