import { TestCommand } from '../TestCommand';
declare const testDecorator: (message?: string) => (target: TestCommand, key: string) => void;
export { testDecorator as test };
