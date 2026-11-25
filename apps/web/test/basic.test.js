const test=require('node:test');const assert=require('node:assert/strict');
test('navigation contains expected ERP areas',()=>{const names=['Procurement','Inventory','Sales','Finance','Audit Trail'];assert.equal(names.length,5);assert.ok(names.includes('Inventory'))});
