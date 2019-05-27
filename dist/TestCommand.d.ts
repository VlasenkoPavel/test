export declare abstract class TestCommand {
    protected tests: Map<string, string>;
    execute(): void;
    protected test(): void;
    protected setUp(): void;
    protected tearDown(): void;
}
