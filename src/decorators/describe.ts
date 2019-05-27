import { startCase, toLower } from 'lodash';

const describeDecorator = (message?: string) => {
    return function (this: any, target: any, key: string, descriptor: PropertyDescriptor) {
        return {
            value () {
                const name = toLower(startCase(Object.getPrototypeOf(this).constructor.name));
                describe(message || name, () => (descriptor.value as Function).apply(this));
            }
        };
    };
};

export { describeDecorator as describe };
