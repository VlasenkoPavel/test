declare const describeDecorator: (message?: string) => (this: any, target: any, key: string, descriptor: PropertyDescriptor) => {
    value(): void;
};
export { describeDecorator as describe };
