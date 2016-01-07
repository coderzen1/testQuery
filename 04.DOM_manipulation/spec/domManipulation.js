describe('domManipulation', function() {

  beforeEach(function() {
    var temp = affix('.container .jack .something');
  });

  var $selectedElement, selectedElement;

  beforeEach(function() {
    affix('.learn-query-testing #toddler .hidden.toy+h1[class="title"]+span[class="subtitle"]+span[class="subtitle"]+input[name="toyName"][value="cuddle bunny"]+input[class="creature"][value="unicorn"]+.hidden+.infinum[value="awesome cool"]');

    $selectedElement = $('#toddler');
    selectedElement = $selectedElement[0];
  });

  it('should be able to remove a HTML element', function() {
    expect(document.contains(selectedElement)).toBe(true);
    dom.remove(selectedElement);
    expect(document.contains(selectedElement)).toBe(false);
  });

  it('should append a HTML element to the given element', function() {
    var newElement = document.createElement('h4');
    var initialChildrenCount = $selectedElement.children().length;

    expect(initialChildrenCount).toBeGreaterThan(0);

    dom.append(selectedElement, newElement);

    expect($selectedElement.children().length).toBe(initialChildrenCount + 1);
    expect($selectedElement.children()[initialChildrenCount]).toBe(newElement);
  });

  it('should prepend a HTML element to the given element', function() {
    var newElement = document.createElement('h4');
    var initialChildrenCount = $selectedElement.children().length;

    expect(initialChildrenCount).toBeGreaterThan(0);

    dom.prepend(selectedElement, newElement);

    expect($selectedElement.children().length).toBe(initialChildrenCount + 1);
    expect($selectedElement.children()[0]).toBe(newElement);
  });

  it('should be able to add a new HTML element after a given HTML element', function() {
    var newElement = document.createElement('div');

    expect($selectedElement.next()[0]).not.toBe(newElement);
    dom.after(selectedElement, newElement);
    expect($selectedElement.next()[0]).toBe(newElement);
  });

  it('should be able to add a new HTML element before a given HTML element', function() {
    var newElement = document.createElement('main');

    expect($selectedElement.prev()[0]).not.toBe(newElement);
    dom.before(selectedElement, newElement);
    expect($selectedElement.prev()[0]).toBe(newElement);
  });

  it('should return a value of a given HTML element', function() {
    var element = $('.creature')[0];
    var elementValue = dom.val(element);

    expect(elementValue).toBe('unicorn');

    element.value = 'pikachu';

    elementValue = dom.val(element);
    expect(elementValue).toBe('pikachu');
  });

  it('should not throw exception if the target element is not in the DOM when calling dom.remove', function() {
    var elementNotInTheDom = document.createElement('div');
    expect(function() {
      dom.remove(elementNotInTheDom);
    }).not.toThrowError();
  });

  it('should not throw exception if the target element is not in the DOM when calling dom.after', function() {
    var elementNotInTheDom = document.createElement('div');
    var newElement = document.createElement('h4');

    expect(function() {
      dom.after(elementNotInTheDom, newElement);
    }).not.toThrowError();
  });
});

dom = new Dom();
});

it('should be able to add a new HTML element after a given HTML element', function() {
  var myElement = document.createElement('div');
  dom.after('.something', myElement);
  expect(myElement).toBe($('.something').next()[0]);
});

it('should be able to remove an HTML element', function() {
  // write your code here
  var myElement = document.createElement('h1');
  document.body.appendChild(myElement);
  dom.remove('h1');
  expect(document.contains(myElement)).toBe(false);
});

it('should append a HTML element to the given element', function() {
  // write your code here
  var newElement = document.createElement('span');
  dom.append('.jack', newElement);
  expect($('.jack').children()[1]).toBe(newElement);
});

it('should remove all HTML elements with a specific css class', function() {
  // write your code here
  var myElement = document.createElement('h5');
  document.body.appendChild(myElement);
  dom.addClass('h5', '.something');
  dom.remove('.something');
  expect(document.contains('.something')).toBe(false);
});

it('should be able to add a new HTML element before a given HTML element', function() {
  // write your code here
  var newElement = document.createElement('h3');
  dom.before('.jack', newElement);
  expect($('.jack').children()[0]).toBe(newElement);
});

// this is the exact same wording of test #1 above ****************************
it('should be able to add a new HTML element after a given HTML element', function() {
  // write your code here
  var newElement = document.createElement('span');
  dom.append('.jack', newElement);
  expect($('.jack').children()[1]).toBe(newElement);
});

it('should return a value of a given HTML element', function() {
// write your code here
var testElements = document.getElementsByClassName('.jack');
var testDivs = Array.prototype.filter.call(testElements, function(testElement) {
  return testElement.nodeName === 'DIV';
});
testDivs.value = 'check';
dom.val(testDivs);
expect(testDivs.value).toBe('check');
});

// it('should be able to handle the case when one of the elements does not exist', function() {
//   // write your code here

// });
});