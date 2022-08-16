import recursion from "./recursion";
import BinarySearchTree from "./BinarySearch";

var BST = new BinarySearchTree();
test("adds returns revursive search of BST", () => {
  BST.insert(15);
  BST.insert(25);
  BST.insert(10);
  BST.insert(7);
  BST.insert(22);
  BST.insert(17);
  BST.insert(13);
  BST.insert(5);
  BST.insert(9);
  BST.insert(27);
  expect(recursion(BST)).toBe(BST);
});
