// src/__tests__/main.test.tsx

import { describe, it, beforeEach, afterEach } from 'vitest';

describe('Entry point test', () => {
    beforeEach(() => {
        const root = document.createElement('div');
        root.id = 'root';
        document.body.appendChild(root);
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('should load without error', async () => {
        await import('../main');
    });
});
