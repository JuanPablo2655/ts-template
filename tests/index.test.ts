import { foo } from '#root/index';

describe('index', () => {
	test('foo RETURNS foo', () => {
		expect(foo()).toBe('foo');
	});
});
