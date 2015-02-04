// TODO questa gestione delle fixtures non va bene, dopo la prima chiamata l'input è ordinato essendo passato per riferimento
var fixtures = {
	inputArray: [5,2,4,6,1,3],
	incrSortedArray: [1,2,3,4,5,6],
	decrSortedArray: [6,5,4,3,2,1],
};

QUnit.module( "Algorithm tests");
QUnit.test( "Bubble sort", function( assert ) {
  assert.deepEqual( bubble_sort(fixtures.inputArray.slice()), fixtures.incrSortedArray, "Bubble sort, Passed!" );
});

QUnit.test( "Counting sort", function( assert ) {
  assert.deepEqual( counting_sort(fixtures.inputArray.slice(), 6), fixtures.incrSortedArray, "Counting sort, Passed!" );
});

QUnit.test( "Insertion sort", function( assert ) {
  assert.deepEqual( insertion_sort_incr(fixtures.inputArray.slice()), fixtures.incrSortedArray, "Insertion sort Incr, Passed!" );
  assert.deepEqual( insertion_sort_decr(fixtures.inputArray.slice()), fixtures.decrSortedArray, "Insertion sort Decr, Passed!" );
});

QUnit.test( "Merge sort", function( assert ) {
  assert.deepEqual( merge_sort(fixtures.inputArray.slice(), 0, fixtures.inputArray.length-1), fixtures.incrSortedArray, "Merge, Passed!" );
});

QUnit.test( "Quick sort", function( assert ) {
  assert.deepEqual( quick_sort(fixtures.inputArray.slice(), 0, fixtures.inputArray.length-1), fixtures.incrSortedArray, "Quick sort Standard, Passed!" );
  assert.deepEqual( quick_sort_random(fixtures.inputArray.slice(), 0, fixtures.inputArray.length-1), fixtures.incrSortedArray, "Quick sort Random, Passed!" );
});
// ============================================================
// TODO
QUnit.module( "Data structures tests");