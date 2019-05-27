import { describe } from './decorators/describe';

export abstract class TestCommand {
    /* key - test method name, value - test description, ref: testDecorator */
    protected tests: Map<string, string>;

    public execute() {
        beforeAll(async () => await this.setUp());
        this.test();
        afterAll(async () => await this. tearDown());
    }

    @describe()
    protected test(): void {
        [...this.tests.keys()].forEach(name => test(this.tests.get(name) || '', async () => await this[name]()));
    }

    protected setUp(): void {}

    protected tearDown(): void {}
}
