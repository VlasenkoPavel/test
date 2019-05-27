import { TestCommand } from '../TestCommand';
import { toLower, startCase } from 'lodash';

const testDecorator = (message?: string) => function(target: TestCommand, key: string) {
    if (!target['tests']) {
        target['tests'] = new Map();
    }

    const description =  message ||  toLower(startCase(key));
    target['tests'].set(key, description);
};

export { testDecorator as test };
