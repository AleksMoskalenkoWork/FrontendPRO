console.log(
  '\nВивести всі відомі вам типи даних JavaScript у консоль. Використовуючи оператор typeof та console.log'
);

console.log('\nString typeof:', typeof 'Aleks Moskalenko');
console.log('Number typeof:', typeof 35);
console.log('Bigint typeof:', typeof 100200300400500600700n);
console.log('Boolean typeof:', typeof false);
console.log('Null typeof:', typeof null);
console.log('Undefined typeof:', typeof undefined);
console.log('Object typeof:', typeof { key: 'value' });
console.log('Symbol typeof:', typeof Symbol('id'));
console.log('Array typeof:', typeof [1, 2, 3]);
console.log('Function typeof:', typeof function () {});
